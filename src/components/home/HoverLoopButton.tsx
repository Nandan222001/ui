import React from "react";

interface HoverLoopButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  as?: "button" | "span";
}

export const HoverLoopButton: React.FC<HoverLoopButtonProps> = ({
  children,
  className = "",
  onClick,
  as = "button",
}) => {
  const Tag = as as any;
  return (
    <Tag
      onClick={onClick}
      className={`group relative inline-flex overflow-hidden cursor-pointer ${className}`}
    >
      <span className="inline-flex items-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 inline-flex items-center gap-2 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
      >
        {children}
      </span>
    </Tag>
  );
};
