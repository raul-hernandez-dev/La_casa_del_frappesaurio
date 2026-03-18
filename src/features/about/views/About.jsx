import { useTranslation } from "react-i18next";
import { HiOutlineSparkles, HiOutlineClock } from "react-icons/hi2";

export default function About() {
  const { t } = useTranslation("about");

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* 1. TÍTULO Y SUBTITULO (Principal - 2/3) */}
        <section className="md:col-span-2 bg-surface-2 border border-border rounded-3xl p-8 flex flex-col justify-center shadow-sm">
          <h1 className="text-4xl font-black mb-4 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-lg text-fg-muted leading-snug">
            {t("subtitle")}
          </p>
        </section>

        {/* 2. FILOSOFÍA ( 1/3) */}
        <section className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-center min-h-[180px]">
          <HiOutlineSparkles className="absolute -right-2 -top-2 text-6xl opacity-20" />
          <h2 className="font-bold text-xl mb-2">{t("philosophy.title")}</h2>
          <p className="text-[15px] text-white/90 leading-normal">
            {t("philosophy.text")}
          </p>
        </section>

        {/* 3. HORARIOS (1/3) */}
        <section className="bg-surface-2 border border-border rounded-3xl p-8">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-3">
            <HiOutlineClock className="text-primary text-xl" />
            {t("hours.title")}
          </h2>
          <div className="space-y-3">
            {[
              { label: t("hours.weekdays.label"), time: t("hours.weekdays.time") },
              { label: t("hours.weekenddays.label"), time: t("hours.weekenddays.time") },
            ].map((h, i) => (
              <div key={i} className="flex justify-between items-center text-[14px] border-b border-border/50 pb-1">
                <span className="text-fg-muted">{h.label}</span>
                <span className={`font-semibold ${h.red ? 'text-red-500' : 'text-fg'}`}>{h.time}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. MAPA (2/3) */}
        <section className="md:col-span-2 bg-surface-3 rounded-3xl overflow-hidden h-[280px] border border-border">
          <iframe
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1053.5303349818087!2d-99.53540727937497!3d19.954562510633327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d23746b0c6b869%3A0x17a870d563f430a1!2sLa%20Casa%20del%20Frapessaurio!5e1!3m2!1ses-419!2smx!4v1773556573508!5m2!1ses-419!2smx"
            className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
            loading="lazy"
          />          
        </section>

        {/* 5. HISTORIA (3/3 ) */}
        <section className="md:col-span-3 bg-surface-2 border border-border rounded-3xl p-8">
          <div className="flex flex-col md:flex-row gap-6 items-baseline">
            <h2 className="font-bold text-lg flex items-center gap-2 whitespace-nowrap">
              <span className="w-1.5 h-5 bg-primary rounded-full"></span>
              {t("story.title")}
            </h2>
            <p className="text-md text-fg-muted leading-relaxed italic border-l-2 border-border pl-4">
              {t("story.p1")}
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}