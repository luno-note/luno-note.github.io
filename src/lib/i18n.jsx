import { createContext, useContext, useEffect, useState } from 'react';
import { translations, languages } from './translations';

const LanguageContext = createContext({ lang: 'en', setLang: () => {}, t: translations.en, languages });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    return localStorage.getItem('luno-lang') || 'en';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem('luno-lang', lang);
  }, [lang]);

  const t = translations[lang] || translations.en;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useI18n = () => useContext(LanguageContext);