import { HiPlus } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

export default function ExtrasMenu() {
  const { t } = useTranslation("menu");

  const rowClass = "flex items-baseline group hover:translate-x-1 transition-all duration-300";
  const labelClass = "text-sm font-medium text-fg group-hover:text-primary transition-colors";
  const dotsClass = "flex-grow border-b border-dotted border-border dark:border-white/10 mx-2 opacity-30 group-hover:opacity-60";
  const priceBadgeClass = "font-mono font-bold text-[13px] text-primary bg-primary/5 dark:bg-primary/10 px-2 py-0.5 rounded-lg border border-primary/10 dark:border-primary/20 shadow-sm";

  const toppings = [
    { name: t("extras.toppings.whippedCream"), price: "$12" },
    { name: t("extras.toppings.chocolateDinos"), price: "$15" },
    { name: t("extras.toppings.poppingBoba"), price: "$15" }
  ];

  return (
    <section className="bg-surface-2 border border-border rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group/section">
      
      <div className="absolute right-[-2%] bottom-[-5%] w-64 h-64 md:w-80 md:h-80 opacity-[0.07] dark:opacity-[0.12] grayscale invert-0 dark:invert-[0.2] pointer-events-none select-none group-hover/section:scale-110 group-hover/section:rotate-6 transition-transform duration-1000 ease-in-out">
        <img 
          src="/logo.png" 
          alt={t("extras.alt.decoration")} 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* COLUMNA 1: TOPPINGS */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-border dark:border-white/5 pb-4">
            <div className="bg-primary text-white p-1 rounded-md shadow-sm">
              <HiPlus className="text-xs" />
            </div>
            <h3 className="font-black uppercase text-[10px] tracking-[0.3em] text-fg-muted">
              {t("extras.sections.toppings")}
            </h3>
          </div>

          <div className="space-y-5">
            {toppings.map((item, i) => (
                <div key={i} className={rowClass}>
                    <span className={labelClass}>{item.name}</span>
                    <div className={dotsClass}></div>
                    <span className={priceBadgeClass}>{item.price}</span>
                </div>
            ))}
          </div>
        </div>

        {/* COLUMNA 2: LECHES */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-border dark:border-white/5 pb-4">
            <div className="bg-primary text-white p-1 rounded-md shadow-sm">
              <HiPlus className="text-xs" />
            </div>
            <h3 className="font-black uppercase text-[10px] tracking-[0.3em] text-fg-muted">
              {t("extras.sections.milkVariants")}
            </h3>
          </div>

          <div className="space-y-5">
            <div className={rowClass}>
              <span className={labelClass}>{t("extras.milk.lactoseFree")}</span>
              <div className={dotsClass}></div>
              <span className={priceBadgeClass}>+$3</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <span className={labelClass}>{t("extras.milk.specialty")}</span>
                <div className="flex-grow border-b border-dotted border-border dark:border-white/10 mx-2 opacity-30"></div>
              </div>
              <div className="flex gap-3 justify-end">
                {[
                    { label: "12oz", price: "$10" },
                    { label: "16oz", price: "$12" }
                ].map((size, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-1 dark:bg-white/5 border border-border dark:border-white/10 hover:border-primary/30 transition-colors shadow-sm">
                        <span className="text-[9px] font-black opacity-40 uppercase tracking-tighter">{size.label}</span>
                        <span className="font-mono font-bold text-[13px] text-primary">{size.price}</span>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-12 text-center relative z-10">
        <span className="px-5 py-2 rounded-full border border-border dark:border-white/10 text-[9px] font-black uppercase tracking-[0.2em] text-fg-muted/50 bg-surface-1/50 dark:bg-black/20 backdrop-blur-sm">
          {t("extras.footerQuote")}
        </span>
      </div>

    </section>
  );
}