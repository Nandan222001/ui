import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const NotFoundView: React.FC = () => {
  return (
    <div className="site-grid py-24 min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center text-center">
      <span className="font-mono-tag text-[#979797] block mb-4">404 // NOT FOUND</span>
      <h1 className="type-h2 mb-6">This page doesn't exist yet.</h1>
      <p className="type-body-large text-[#444444] max-w-md mb-8">
        The page you're looking for was moved, renamed, or never built. Head
        back to the showroom to see what Hero can do.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-[#000000] text-[#ffffff] px-6 py-3.5 rounded-lg font-neo font-medium text-sm hover:bg-[#2f2f2f] transition-colors"
      >
        Back to Showroom
        <ArrowUpRight className="w-4 h-4 text-[#d1ffca]" />
      </Link>
    </div>
  );
};
