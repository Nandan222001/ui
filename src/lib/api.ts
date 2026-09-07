/**
 * Typed client for the NMT Solutions backend (../backend).
 *
 * Security model:
 * - Access token lives in memory + sessionStorage only (cleared when the tab
 *   closes) and is sent as an Authorization header — never in localStorage
 *   long-term, never in URLs.
 * - The refresh token is an httpOnly cookie scoped to /api/v1/auth managed
 *   entirely by the server; on a 401 we transparently refresh once and retry.
 * - All responses use the uniform envelope { success, data | error, requestId }.
 */

declare global {
  interface ImportMetaEnv {
    readonly VITE_API_BASE_URL?: string;
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

const BASE_URL: string = import.meta.env.VITE_API_BASE_URL ?? '/api/v1';
const ACCESS_TOKEN_KEY = 'nmt.access_token';

let accessToken: string | null = null;
try {
  accessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);
} catch {
  accessToken = null;
}

export function getAccessToken(): string | null {
  return accessToken;
}

export function setAccessToken(token: string | null): void {
  accessToken = token;
  try {
    if (token) sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
    else sessionStorage.removeItem(ACCESS_TOKEN_KEY);
  } catch {
    /* storage unavailable (private mode) — memory-only is still fine */
  }
}

interface ApiEnvelope<T> {
  success: boolean;
  data: T;
  meta?: Record<string, unknown>;
  error?: { code: string; message: string; details?: unknown };
  requestId?: string;
}

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly code: string,
    message: string,
    public readonly details?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

async function parseEnvelope<T>(response: Response): Promise<T> {
  let body: ApiEnvelope<T> | null = null;
  try {
    body = (await response.json()) as ApiEnvelope<T>;
  } catch {
    body = null;
  }
  if (!response.ok || !body?.success) {
    throw new ApiError(
      response.status,
      body?.error?.code ?? 'HTTP_ERROR',
      body?.error?.message ?? `Request failed with status ${response.status}`,
      body?.error?.details
    );
  }
  return body.data;
}

async function request<T>(path: string, init: RequestInit = {}, allowRefresh = true): Promise<T> {
  const headers = new Headers(init.headers);
  headers.set('Accept', 'application/json');
  if (init.body && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }
  if (accessToken) {
    headers.set('Authorization', `Bearer ${accessToken}`);
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    ...init,
    headers,
    credentials: 'include'
  });

  // Transparent single-retry after refreshing the access token.
  if (response.status === 401 && allowRefresh && !path.startsWith('/auth/')) {
    try {
      const refreshed = await fetch(`${BASE_URL}/auth/refresh`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: '{}'
      });
      if (refreshed.ok) {
        const envBody = (await refreshed.json()) as ApiEnvelope<{ accessToken: string }>;
        if (envBody.data?.accessToken) {
          setAccessToken(envBody.data.accessToken);
          return request<T>(path, init, false);
        }
      }
    } catch {
      /* fall through and surface the original 401 */
    }
    setAccessToken(null);
  }

  return parseEnvelope<T>(response);
}

export interface NmtUser {
  id: string;
  email: string;
  fullName: string | null;
  role: 'user' | 'manager' | 'admin';
  marketingConsent: boolean;
  lastLoginAt?: string | null;
  createdAt?: string | null;
}

export interface LeadSubmitInput {
  companyName: string;
  contactName: string;
  email: string;
  message?: string;
  interest?: string;
  consentGiven: true;
}

import type { ReadinessAuditResponse, UsecaseAuditResponse } from '../types';

export const api = {
  auth: {
    async login(email: string, password: string): Promise<NmtUser> {
      const data = await request<{ user: NmtUser; accessToken: string; expiresAt: number }>(
        '/auth/login',
        { method: 'POST', body: JSON.stringify({ email, password }) }
      );
      setAccessToken(data.accessToken);
      return data.user;
    },
    async register(input: {
      email: string;
      password: string;
      fullName: string;
      marketingConsent?: boolean;
    }) {
      const data = await request<{
        userId: string;
        email: string;
        requiresEmailConfirmation: boolean;
        accessToken: string | null;
      }>('/auth/register', { method: 'POST', body: JSON.stringify(input) });
      if (data.accessToken) setAccessToken(data.accessToken);
      return data;
    },
    async logout(): Promise<void> {
      try {
        await request('/auth/logout', { method: 'POST', body: '{}' });
      } finally {
        setAccessToken(null);
      }
    },
    me: () => request<{ user: NmtUser }>('/auth/me')
  },
  privacy: {
    exportMyData: () => request<Record<string, unknown>>('/users/me/export'),
    deleteMyAccount: async (): Promise<void> => {
      await request<{ message: string }>('/users/me', { method: 'DELETE' });
      setAccessToken(null);
    }
  },
  leads: {
    submit: (input: LeadSubmitInput) =>
      request<{ id: string; status: string; message: string }>('/leads', {
        method: 'POST',
        body: JSON.stringify(input)
      })
  },
  ai: {
    analyzeUseCase: (input: {
      industry?: string;
      department?: string;
      workflowDescription?: string;
      teamSize?: string;
      currentCost?: string;
    }) =>
      request<UsecaseAuditResponse>('/ai/analyze-usecase', {
        method: 'POST',
        body: JSON.stringify(input)
      }),
    agentPlayground: (input: {
      agentType: string;
      userQuery: string;
      contextData?: Record<string, unknown>;
    }) =>
      request<{ output: string }>('/ai/agent-playground', {
        method: 'POST',
        body: JSON.stringify(input)
      }),
    readinessAudit: (answers: Array<{ question: string; selectedOption: string }>) =>
      request<ReadinessAuditResponse>('/ai/readiness-audit', {
        method: 'POST',
        body: JSON.stringify({ answers })
      })
  }
};

