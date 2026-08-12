import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// This app ships no service worker. Unregister any leftover one from a
// previous session on this origin (e.g. an AI Studio preview) — a stale
// worker intercepting fetches is what throws the "Cache put on a 206
// partial response is unsupported" errors seen when it tries to cache
// ranged video requests.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => registration.unregister());
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
