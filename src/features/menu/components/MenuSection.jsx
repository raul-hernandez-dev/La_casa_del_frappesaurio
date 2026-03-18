import MenuCategory from "./MenuCategory";
import { FaFire, FaSnowflake, FaStar } from "react-icons/fa";
import { FaGlassWater } from "react-icons/fa6"; 

export default function MenuSection({
  title,
  icon,
  items,
  milkOptions = [],
  defaultOpen
}) {

  const sortedItems = [...items].sort(
    (a, b) => (b.recommended || 0) - (a.recommended || 0)
  );

  const renderIcons = (item) => (
    <div className="flex gap-1.5 text-[10px] text-primary/60 shrink-0">
      {item.recommended && <FaStar className="animate-pulse text-primary" />}
      {item.temperature === "both" ? (
        <div className="flex gap-0.5"><FaFire /><FaSnowflake /></div>
      ) : item.temperature === "hot" ? <FaFire /> : <FaSnowflake />}
      {item.milk && <FaGlassWater />}
    </div>
  );

  return (
    <MenuCategory title={title} icon={icon} defaultOpen={defaultOpen}>
      <div className="grid md:grid-cols-2 gap-4">

        {sortedItems.map((item, index) => (
          <div
            key={index}
            className={`group/item border border-border rounded-2xl p-4 bg-surface-2 transition-all duration-300
              ${item.recommended 
                ? "ring-1 ring-primary/40 bg-primary/[0.03] dark:bg-primary/[0.08] shadow-sm" 
                : "hover:border-primary/30 shadow-sm hover:bg-surface-1"
              }`}
          >
            <div className="flex justify-between items-start gap-4">
              
              {/* LADO IZQUIERDO: INFO */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-[15px] group-hover/item:text-primary transition-colors leading-tight italic">
                    {item.name}
                  </h4>
                  {renderIcons(item)}
                </div>

                {item.description && (
                  <p className="text-xs text-fg-muted leading-tight italic line-clamp-2 opacity-80 border-l-2 border-primary/10 pl-2 mt-1">
                    {item.description}
                  </p>
                )}

                {/* INFO DE LECHE (Solo si aplica) */}
                {item.milk && milkOptions.length > 0 && (
                  <div className="mt-2 flex items-center gap-2">
                     <span className="text-[9px] font-black uppercase tracking-tighter text-primary/40">Opciones:</span>
                     <p className="text-[10px] text-fg-muted italic">
                       {milkOptions.join(", ")}
                     </p>
                  </div>
                )}
              </div>

              {/* LADO DERECHO: PRECIOS LIMPIOS */}
              <div className="flex gap-4 shrink-0 font-mono self-center">
                {item.sizes.map((s, i) => (
                  <div key={i} className="flex flex-col items-end">
                    <span className="text-[9px] uppercase font-black text-fg-muted/50 dark:text-fg-muted/40 tracking-tighter leading-none mb-1">
                      {s.label}
                    </span>
                    <span className="text-[14px] font-bold text-primary dark:text-primary-light">
                      ${s.price}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}

      </div>
    </MenuCategory>
  );
}