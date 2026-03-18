import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function MenuCategory({ title, icon, children, defaultOpen }) {

  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="border border-border rounded-xl overflow-hidden">

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 bg-surface hover:bg-surface-hover transition-colors"
      >

        <div className="flex items-center gap-3 text-lg font-semibold">
          {icon}
          {title}
        </div>

        <FaChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />

      </button>

      {open && (
        <div className="p-6 bg-surface-2">
          {children}
        </div>
      )}

    </section>
  );
}