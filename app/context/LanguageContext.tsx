import { createContext, FC, ReactNode, useEffect, useState } from 'react'

import i18n from '../i18n'

export interface LanguageContextType {
  language: string
  setLanguage: (lang: string) => void
}

// Create a context to hold the current language
// Option 1: Provide a default value if it makes sense:
export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {
    console.warn('setLanguage function not implemented')
  },
})

interface LanguageProviderProps {
  children: ReactNode
}
const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<string>(i18n.locale)

  useEffect(() => {
    i18n.locale = language
    setLanguage(language)
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
