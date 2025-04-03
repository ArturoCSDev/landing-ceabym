import React from "react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-ceabym-9 dark:text-ceabym-9"
      >
        <path d="M6 18h8"></path>
        <path d="M3 22h18"></path>
        <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
        <path d="M9 14h2"></path>
        <path d="M9 12a2 2 0 0 1 2-2c2 0 3 2 3 2s-1 2-3 2a2 2 0 0 1-2-2z"></path>
        <path d="M12 8V3"></path>
        <path d="M8 3h8"></path>
      </svg>
      <span className="text-xl font-bold text-ceabym-11 dark:text-ceabym-11">CEABYM</span>
    </div>
  );
}

export default Logo;
