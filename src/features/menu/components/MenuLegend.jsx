import { FaFire, FaSnowflake, FaStar } from "react-icons/fa";
import { FaGlassWater } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export default function MenuLegend() {
  const { t } = useTranslation("menu");

  const iconClass = "text-primary text-base";
  const itemClass = "flex items-center gap-2 whitespace-nowrap text-fg-muted font-medium text-[13px]";

  return (
    <section className="bg-surface-2 border border-border rounded-xl p-3 px-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-fg-muted/60">
            {t("legend.title")}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:flex-row gap-x-6 gap-y-2">
          
          <div className={itemClass}>
            <FaStar className={iconClass} />
            <span>{t("legend.favorites")}</span>
          </div>

          <div className={itemClass}>
            <FaFire className={iconClass} />
            <span>{t("legend.hot")}</span>
          </div>

          <div className={itemClass}>
            <FaSnowflake className={iconClass} />
            <span>{t("legend.cold")}</span>
          </div>

          <div className={itemClass}>
            <FaGlassWater className={iconClass} />
            <span>{t("legend.milk")}</span>
          </div>

        </div>
      </div>
    </section>
  );
}