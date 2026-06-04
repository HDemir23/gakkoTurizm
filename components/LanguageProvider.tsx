"use client";

import {
  defaultLanguage,
  dictionaries,
  isLanguageCode,
  type Dictionary,
  type LanguageCode
} from "@/lib/i18n";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";

type LanguageContextValue = {
  language: LanguageCode;
  dictionary: Dictionary;
  setLanguage: (language: LanguageCode) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const LANGUAGE_STORAGE_KEY = "gakgo-language";
const LEGACY_LANGUAGE_STORAGE_KEY = "gakko-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(defaultLanguage);

  useEffect(() => {
    const stored =
      window.localStorage.getItem(LANGUAGE_STORAGE_KEY) ??
      window.localStorage.getItem(LEGACY_LANGUAGE_STORAGE_KEY);
    if (stored && isLanguageCode(stored)) {
      setLanguageState(stored);
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLanguage = useCallback((nextLanguage: LanguageCode) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    document.documentElement.lang = nextLanguage;
  }, []);

  const value = useMemo(
    () => ({
      language,
      dictionary: dictionaries[language],
      setLanguage
    }),
    [language, setLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
