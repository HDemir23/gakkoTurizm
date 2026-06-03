"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { languages, type LanguageCode } from "@/lib/i18n";
import { ChevronDown, Menu, Truck, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState, type MouseEvent } from "react";

const navItems = [
  { href: "#capabilities", key: "capabilities" },
  { href: "#services", key: "services" },
  { href: "#process", key: "process" },
  { href: "#contact", key: "contact" }
] as const;

export function Header() {
  const { language, dictionary, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const activeLanguage = useMemo(() => languages[language], [language]);
  const languageCodes = useMemo(() => Object.keys(languages) as LanguageCode[], []);
  const headerClassName = useMemo(() => (isScrolled ? "site-header is-scrolled" : "site-header"), [isScrolled]);
  const navClassName = useMemo(() => (isMenuOpen ? "site-nav is-open" : "site-nav"), [isMenuOpen]);
  const languagePickerClassName = useMemo(
    () => (isLanguageOpen ? "language-picker is-open" : "language-picker"),
    [isLanguageOpen]
  );

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  }, []);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const chooseLanguage = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const nextLanguage = event.currentTarget.value as LanguageCode;
      setLanguage(nextLanguage);
      setIsLanguageOpen(false);
    },
    [setLanguage]
  );

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((value) => !value);
    setIsLanguageOpen(false);
  }, []);

  const toggleLanguage = useCallback(() => {
    setIsLanguageOpen((value) => !value);
    setIsMenuOpen(false);
  }, []);

  return (
    <header className={headerClassName}>
      <div className="header-shell">
        <a className="brand" href="#top" aria-label="GakkoTransport23 home">
          <span className="brand-mark" aria-hidden="true">
            <Truck size={20} />
          </span>
          <span className="brand-copy">
            <span className="brand-name">GakkoTransport23</span>
            <span className="brand-tagline">International road transport</span>
          </span>
        </a>

        <nav id="site-nav" className={navClassName} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {dictionary.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div className={languagePickerClassName}>
            <button
              className="language-button"
              type="button"
              aria-haspopup="listbox"
              aria-expanded={isLanguageOpen}
              aria-controls="language-menu"
              onClick={toggleLanguage}
            >
              <span className="flag" aria-hidden="true">
                {activeLanguage.flag}
              </span>
              <span>{activeLanguage.code}</span>
              <ChevronDown size={16} aria-hidden="true" />
            </button>

            <div id="language-menu" className="language-menu" role="listbox" aria-label="Language">
              {languageCodes.map((code) => (
                <button
                  key={code}
                  className="language-option"
                  type="button"
                  value={code}
                  role="option"
                  aria-selected={code === language}
                  onClick={chooseLanguage}
                >
                  <span className="flag" aria-hidden="true">
                    {languages[code].flag}
                  </span>
                  <span>{languages[code].label}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            className="icon-button nav-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="site-nav"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
