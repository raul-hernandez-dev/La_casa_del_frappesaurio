import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation("common");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border p-8 pt-12">
      <div className="container mx-auto px-6">

        {/* Cuerpo del Footer: 3 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Columna 1: Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-primary rounded-full p-2 flex items-center justify-center shadow-sm">
                <img src="/dino.png" alt="Dino" className="object-contain" />
              </div>
              <span className="font-bold text-lg tracking-tight text-app-fg">
                La Casa del Frappesaurio
              </span>
            </div>
            <p className="text-sm text-fg-muted leading-relaxed max-w-[240px]">
              {t("footer.description")}
            </p>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-app-fg/50">
              {t("footer.explore")}
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-fg-muted hover:text-primary transition-colors">{t("home")}</Link>
              <Link to="/menu" className="text-sm text-fg-muted hover:text-primary transition-colors">{t("menu")}</Link>
              <Link to="/about" className="text-sm text-fg-muted hover:text-primary transition-colors">{t("about")}</Link>
              <Link to="/contact" className="text-sm text-fg-muted hover:text-primary transition-colors">{t("contact")}</Link>
            </nav>
          </div>

          {/* Columna 3: Redes Sociales con Iconos */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-app-fg/50">
              {t("footer.social")}
            </h4>
            <div className="flex flex-wrap gap-3">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/lacasadelfrapessaurio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-surface-2 border border-border text-fg-muted hover:border-primary hover:text-primary transition-all shadow-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/lacasadelfrapessaurio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-surface-2 border border-border text-fg-muted hover:border-primary hover:text-primary transition-all shadow-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.893.419.42.677.819.893 1.38.163.422.358 1.057.412 2.227.059 1.266.071 1.646.071 4.85s-.012 3.584-.071 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.893 1.38-.42.419-.819.677-1.38.893-.422.163-1.057.358-2.227.412-1.266.059-1.646.071-4.85.071s-3.584-.012-4.85-.071c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.893-.419-.42-.677-.819-.893-1.38-.163-.422-.358-1.057-.412-2.227-.059-1.266-.071-1.646-.071-4.85s.012-3.584.071-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.893-1.38.42-.419.819-.677 1.38-.893.422-.163 1.057-.358 2.227-.412 1.266-.059 1.646-.071 4.85-.071zM12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.132 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.333.072 4.613c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.336 1.079 2.126 1.384c.766.296 1.636.499 2.913.558C8.333 23.986 8.741 24 12 24s3.333-.014 4.613-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384s1.079-1.336 1.384-2.126c.296-.765.499-1.636.558-2.913.058-1.28.072-1.687.072-4.613s-.014-3.333-.072-4.613c-.06-1.277-.262-2.148-.558-2.913-.306-.788-.718-1.459-1.384-2.126s-1.336-1.079-2.126-1.384c-.765-.296-1.636-.499-2.913-.558C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/525583958139"
                aria-label="WhatsApp"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-surface-2 border border-border text-fg-muted hover:border-primary hover:text-primary transition-all shadow-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.263-1.643a11.836 11.836 0 005.783 1.503h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:casacafejilotepec@gmail.com"
                aria-label="Email"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-surface-2 border border-border text-fg-muted hover:border-primary hover:text-primary transition-all shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Barra Inferior */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 justify-center">
          <p className="text-xs text-fg-muted/60 font-medium text-center md:text-left">
            © {year} {t("footer.legal")}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;