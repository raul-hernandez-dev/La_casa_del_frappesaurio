import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../ui/ThemeToggle";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation(["common"]);
  const { language, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const routes = [
    { path: "/", label: t("home") },
    { path: "/about", label: t("about") },
    { path: "/menu", label: t("menu") },
    { path: "/contact", label: t("contact") },
  ];

  // Cerramos el menú si cambiamos de ruta (por si acaso)
  useEffect(() => setOpen(false), [location]);

  return (
    <header className="bg-surface border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo con Efecto "Pop" */}
          <Link to="/" className="group flex items-center gap-3 relative">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="/dino.png"
                alt="Frappesaurio"
                className="h-14 w-14 p-2 object-contain bg-primary rounded-2xl shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all"
              />

            </motion.div>

            <span className="hidden sm:block font-black text-xl tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              El Frappesaurio
            </span>
          </Link>

          {/* Desktop Nav con Indicador Animado */}
          <nav className="hidden md:flex items-center gap-1 font-semibold">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className="relative px-4 py-2 text-fg-muted hover:text-primary transition-colors group"
              >
                {route.label}
                {location.pathname === route.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full mx-4"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            <div className="relative group overflow-hidden rounded-lg border border-border bg-surface-2 px-3 py-1">
              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="appearance-none bg-transparent text-sm font-bold focus:outline-none cursor-pointer pr-4"
              >
                <option value="en">EN</option>
                <option value="es">ES</option>
              </select>
              <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">▼</div>
            </div>

            <ThemeToggle />

            {/* Mobile Burger Button Animado */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-xl transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-around">
                <span className={`h-1 w-full bg-current rounded-full transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-1 w-full bg-current rounded-full transition-all ${open ? 'opacity-0' : ''}`} />
                <span className={`h-1 w-full bg-current rounded-full transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu Animado con AnimatePresence */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-border/50"
            >
              <div className="py-6 flex flex-col gap-4">
                {routes.map((route, i) => (
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    key={route.path}
                  >
                    <Link
                      to={route.path}
                      className={`text-lg font-bold ${location.pathname === route.path ? 'text-primary' : 'text-fg-muted'}`}
                    >
                      {route.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}