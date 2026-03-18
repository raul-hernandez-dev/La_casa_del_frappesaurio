import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const { t } = useTranslation("contact");

  // Configuración de WhatsApp
  const WHATSAPP_NUMBER = "525583958139";
  const message = encodeURIComponent("¡Hola! 🦖");
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  const socialLinks = [
    { 
      icon: <FaInstagram />, 
      name: "Instagram", 
      desc: t("instagram"), 
      href: "https://www.instagram.com/lacasadelfrapessaurio/" 
    },
    { 
      icon: <FaFacebook />, 
      name: "Facebook", 
      desc: t("facebook"), 
      href: "https://www.facebook.com/lacasadelfrapessaurio" 
    },
    { 
      icon: <MdEmail />, 
      name: "Email", 
      desc: t("email"), 
      href: "mailto:casacafejilotepec@gmail.com" 
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        
        {/* LADO IZQUIERDO: Encabezado Adaptativo */}
        <section className="w-full lg:w-1/3 lg:sticky lg:top-24 space-y-4 md:space-y-6">
          <div className="space-y-2 md:space-y-4">
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-app-fg leading-none">
              {t("title")}
            </h1>
            <p className="text-base md:text-lg text-fg-muted leading-relaxed">
              {t("subtitle")}
            </p>
          </div>

          {/* Información de disponibilidad */}
          <div className="hidden sm:block pt-6 border-t border-border">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
              {t("hours.title")}
            </p>
            <p className="text-fg-subtle text-sm">
              {t("hours.time")}
            </p>
          </div>
        </section>

        {/* LADO DERECHO: Acciones Táctiles */}
        <section className="w-full lg:w-2/3 space-y-3 md:space-y-4">
          
          {/* BOTÓN PRINCIPAL: WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between bg-primary p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] text-white transition-all active:scale-[0.98] lg:hover:shadow-2xl lg:hover:shadow-primary/20"
          >
            <div className="flex items-center gap-4 md:gap-6">
              <div className="bg-white/20 p-3 md:p-4 rounded-xl backdrop-blur-sm">
                <FaWhatsapp className="text-2xl md:text-4xl" />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-bold leading-tight">{t("cta.title")}</h3>
                <p className="text-white/80 text-xs md:text-sm">{t("cta.subtitle")}</p>
              </div>
            </div>
            <FaArrowRight className="text-lg group-hover:translate-x-2 transition-transform hidden sm:block" />
          </a>

          {/* GRID DE REDES SOCIALES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-surface-2 border border-border p-5 md:p-6 rounded-[1.2rem] md:rounded-[1.5rem] hover:bg-surface-hover transition-all active:bg-surface-3 group"
              >
                <div className="text-xl md:text-2xl text-primary group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-sm md:text-base">{link.name}</h4>
                  <p className="text-xs text-fg-muted truncate">{link.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}