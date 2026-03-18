import { useTranslation } from "react-i18next";
import {TbMilkshake} from "react-icons/tb"
import { FaCoffee, FaArrowRight } from "react-icons/fa";
import { GiCoffeeBeans, GiChocolateBar } from "react-icons/gi"; 
import { MdOutlineLocalCafe } from "react-icons/md";
import { LuLeaf } from "react-icons/lu";
import { GiFruitBowl } from "react-icons/gi"; 
import { Link } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation("home");

  // Definición de las categorías con sus respectivos links
  const menuCategories = [
    { icon: <TbMilkshake />, key: "frappes", path: "/menu?category=frappe" },
    { icon: <FaCoffee />, key: "coffee", path: "/menu?category=coffee" },
    { icon: <GiChocolateBar />, key: "chocolate", path: "/menu?category=chocolate" }, 
    { icon: <GiFruitBowl />, key: "fruit", path: "/menu?category=fruit" }, 
    { icon: <LuLeaf />, key: "tea", path: "/menu?category=tea" },
    { icon: <GiCoffeeBeans />, key: "beans", path: "/menu?category=beans_coffee" }
  ];

  return (
    <main className="min-h-screen mx-auto max-w-5xl">
      {/* HERO SECTION */}
      <section className="container mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-left">
          <div className="space-y-4">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              {t("experience.title")}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {t("title")}
            </h1>
            <p className="text-xl text-fg-muted leading-relaxed max-w-xl">
              {t("subtitle")}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/menu"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              {t("cta.menu")}
              <FaArrowRight className="text-sm" />
            </Link>
            <Link
              to="/about"
              className="bg-surface-2 hover:bg-surface-2-hover border border-border px-8 py-4 rounded-full font-medium transition-colors flex items-center gap-2"
            >
              <MdOutlineLocalCafe />
              {t("cta.visit")}
            </Link>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative bg-surface-3 aspect-square rounded-3xl border border-border flex items-center justify-center overflow-hidden">
            <img
              src="./xhita_frappe.jpg"
              alt="Mesozoic Coffee Experience"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </section>

      {/* MENU PREVIEW  */}
      <section className="bg-surface rounded-2xl py-20">
        <div className="container mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold">{t("menu.title")}</h2>
              <p className="text-fg-muted max-w-md">{t("menu.subtitle")}</p>
            </div>
            <Link to="/menu" className="text-primary hover:underline font-medium flex items-center gap-2">
              Ver todo el menú <FaArrowRight size={12} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuCategories.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className="group bg-surface-2 border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{t(`menu.items.${item.key}`)}</h3>
                <p className="text-fg-muted text-sm leading-relaxed">
                  {t(`menu.desc.${item.key}`)}
                </p>
                <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.key} <FaArrowRight className="ml-2" size={10} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="container mx-auto py-24">
        <div className="bg-primary rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("experience.title")}
            </h2>
            <p className="text-white/80 text-lg">
              {t("experience.text")}
            </p>
            <Link to="/about" className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-opacity-90 transition-colors">
              Visítanos
            </Link>
          </div>
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>
      </section>
    </main>
  );
}