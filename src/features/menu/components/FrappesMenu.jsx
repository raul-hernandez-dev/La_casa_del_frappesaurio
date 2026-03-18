import { TbMilkshake } from "react-icons/tb";
import { FaSnowflake, FaStar, FaFire } from "react-icons/fa";
import { FaGlassWater } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import MenuCategory from "./MenuCategory";
import SubCategory from "./SubCategory";
import { frappesClasicos, frappesEspeciales } from "../services/frappesData";

export default function FrappesMenu({ defaultOpen }) {
  const { t } = useTranslation("menu");


  const renderList = (items, isJurassic = false) => (
    <div className="grid md:grid-cols-2 gap-4">
      {items.map((item, i) => {
        const isRec = item.recommended;
        return (
          <div
            key={i}
            className={`group/item border border-border rounded-2xl p-4 transition-all duration-300 bg-surface-2 
              ${isRec ? "ring-1 ring-primary/40 bg-primary/[0.03] dark:bg-primary/[0.08]" : "hover:border-primary/30 hover:bg-surface-1"}`}
          >
            <div className="flex justify-between items-start gap-3">
              <div className="flex-1">
                {/* Cabecera: Nombre o Alias */}
                <div className="flex items-center gap-2 mb-0.5">
                  <h4 className={`italic leading-tight transition-transform group-hover/item:translate-x-1
                    ${isJurassic ? "font-black text-[16px] uppercase tracking-tight" : "font-bold text-[15px] text-fg"}`}>
                    {isJurassic ? (item.alias || item.name) : item.name}
                  </h4>

                  {/* Iconos de Atributos */}
                  <div className="flex gap-1 text-[10px] text-primary/60 shrink-0">
                    {isRec && <FaStar className="animate-pulse" />}
                    {item.temperature === "both" ? (
                      <><FaFire /><FaSnowflake /></>
                    ) : (item.temperature === "hot" ? <FaFire /> : <FaSnowflake />)}
                    {item.milk && <FaGlassWater />}
                  </div>
                </div>

                {/* Subtítulo: Nombre real (solo si es jurásico) */}
                {isJurassic && item.alias && (
                  <p className="text-[10px] font-bold text-fg-muted uppercase tracking-widest mb-1 opacity-70">
                    {item.name}
                  </p>
                )}

                {item.description && (
                  <p className="text-xs text-fg-muted leading-tight italic line-clamp-2 mt-1 opacity-80 border-l-2 border-primary/10 pl-2">
                    {item.description}
                  </p>
                )}
              </div>

              {/* Precios Limpios (estilo Ticket) */}
              <div className="flex gap-3 shrink-0 font-mono self-center">
                {item.sizes.map((s, j) => (
                  <div key={j} className="flex flex-col items-end">
                    <span className="text-[8px] uppercase font-black text-fg-muted/50 tracking-tighter leading-none mb-1">
                      {s.label}
                    </span>
                    <span className="text-[13px] font-bold text-primary dark:text-primary-light">
                      ${s.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <MenuCategory
      title={t("menu.items.frappes")}
      icon={<TbMilkshake className="text-primary text-2xl" />}
      defaultOpen={defaultOpen}
    >
      <div className="space-y-6">
        <SubCategory title="Frappés Clásicos" subtitle="Tradicional 🦖">
          {renderList(frappesClasicos, false)}
        </SubCategory>

        <SubCategory
          title="Frappesaurios"
          subtitle="¡Incluye Dino de Chocolate! ✨"
          isSpecial={true}
        >
          {renderList(frappesEspeciales, true)}
        </SubCategory>
      </div>
    </MenuCategory>
  );
}