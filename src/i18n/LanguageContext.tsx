import { createContext, useContext, useState } from 'react';
import { translations, type Lang } from './translations';

export type TranslationType = typeof translations.en;

interface LanguageContextType {
  lang: Lang;
  t: TranslationType;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('uz');
  const toggleLang = () => setLang((l) => (l === 'en' ? 'uz' : 'en'));
  const currentT = translations[lang] as TranslationType;

  return (
    <LanguageContext.Provider value={{ lang, t: currentT, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}

