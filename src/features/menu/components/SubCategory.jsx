import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function SubCategory({ title, subtitle, children, isSpecial = false }) {
  const [open, setOpen] = useState(isSpecial); 
  return (
    <div className={`rounded-[2rem] overflow-hidden transition-all duration-500 border-2
      ${isSpecial 
        ? "border-primary/20 bg-surface shadow-md" 
        : "border-border bg-surface shadow-sm"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex justify-between items-center px-6 py-5 transition-colors
          ${isSpecial ? "hover:bg-primary/5" : "hover:bg-surface-2"}`}
      >
        <div className="text-left">
          <span className={`block font-black tracking-tight text-xl 
            ${isSpecial ? "text-primary" : "text-fg"}`}>
            {isSpecial && "🦖 "} {title}
          </span>
          {subtitle && (
            <span className={`text-[10px] uppercase tracking-[0.2em] font-bold italic
              ${isSpecial ? "text-primary/70 animate-pulse" : "text-fg-muted"}`}>
              {subtitle}
            </span>
          )}
        </div>

        <FaChevronDown
          className={`text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div className={`transition-all duration-300 ease-in-out ${open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="p-6 pt-0">
          {children}
        </div>
      </div>
    </div>
  );
}