"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { BRAND_CONTACT_PERSON, BRAND_SHORT_NAME } from "@/lib/brand";
import { languages, type LanguageCode } from "@/lib/i18n";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type MouseEvent,
} from "react";

const navItems = [
  { href: "#capabilities", key: "capabilities" },
  { href: "#services", key: "services" },
  { href: "#routes", key: "routes" },
  { href: "#process", key: "process" },
  { href: "#gallery", key: "gallery" },
  { href: "#contact", key: "contact" },
] as const;

const worldClocks = [
  { flag: "🇬🇷", label: "Yunanistan", timeZone: "Europe/Athens" },
  { flag: "🇹🇷", label: "Türkiye", timeZone: "Europe/Istanbul" },
  { flag: "🇦🇱", label: "Arnavutluk", timeZone: "Europe/Tirane" },
  { flag: "🇷🇸", label: "Sırbistan", timeZone: "Europe/Belgrade" },
] as const;

const clockFormatters = worldClocks.map(
  ({ timeZone }) =>
    new Intl.DateTimeFormat("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
      timeZone,
    }),
);

export function Header() {
  const { language, dictionary, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [clockNow, setClockNow] = useState<Date | null>(null);

  const activeLanguage = useMemo(() => languages[language], [language]);
  const languageCodes = useMemo(
    () => Object.keys(languages) as LanguageCode[],
    [],
  );
  const headerClassName = useMemo(
    () => (isScrolled ? "site-header is-scrolled" : "site-header"),
    [isScrolled],
  );
  const navClassName = useMemo(
    () => (isMenuOpen ? "site-nav is-open" : "site-nav"),
    [isMenuOpen],
  );
  const languagePickerClassName = useMemo(
    () => (isLanguageOpen ? "language-picker is-open" : "language-picker"),
    [isLanguageOpen],
  );
  const clockItems = useMemo(
    () =>
      worldClocks.map((clock, index) => ({
        ...clock,
        time: clockNow ? clockFormatters[index].format(clockNow) : "--:--",
      })),
    [clockNow],
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

  useEffect(() => {
    const updateClock = () => setClockNow(new Date());
    let intervalId: number | undefined;
    const now = new Date();
    const nextMinuteDelay =
      (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    updateClock();

    const timeoutId = window.setTimeout(() => {
      updateClock();
      intervalId = window.setInterval(updateClock, 60_000);
    }, nextMinuteDelay);

    return () => {
      window.clearTimeout(timeoutId);

      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, []);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const chooseLanguage = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const nextLanguage = event.currentTarget.value as LanguageCode;
      setLanguage(nextLanguage);
      setIsLanguageOpen(false);
    },
    [setLanguage],
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
        <a
          className="brand"
          href="#top"
          aria-label={`${BRAND_SHORT_NAME} home, ${BRAND_CONTACT_PERSON}`}
        >
          <span className="brand-mark" aria-hidden="true">
            <img
              className="brand-emblem"
              src="/gakgo-transport23.svg"
              alt=""
              width="42"
              height="42"
            />
          </span>
          <span className="brand-copy">
            <span className="brand-person">{BRAND_CONTACT_PERSON}</span>
          </span>
        </a>

        <nav
          id="site-nav"
          className={navClassName}
          aria-label="Primary navigation"
        >
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
              aria-label={`Select language: ${activeLanguage.label}`}
              onClick={toggleLanguage}
            >
              <span className="flag" aria-hidden="true">
                {activeLanguage.flag}
              </span>
              <ChevronDown size={16} aria-hidden="true" />
            </button>

            <div
              id="language-menu"
              className="language-menu"
              role="listbox"
              aria-label="Language"
            >
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

      <div className="world-clock-strip" aria-label="Dünya saatleri">
        {clockItems.map((clock) => (
          <time
            key={clock.timeZone}
            className="world-clock"
            dateTime={clockNow?.toISOString()}
            aria-label={`${clock.label} yerel saat ${clock.time}`}
          >
            <span className="world-clock-flag" aria-hidden="true">
              {clock.flag}
            </span>
            <span className="world-clock-time">{clock.time}</span>
          </time>
        ))}
      </div>
    </header>
  );
}
