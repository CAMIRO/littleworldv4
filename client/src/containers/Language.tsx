import React, { useState, createContext, useContext } from 'react'
import { languageOptions, dictionaryList } from '../languages';

type GenericObject = { [key: string]: any };

interface ContextType {
    language?: any;
    dictionary?: any;
    setLanguage?: any;
  }
// create the language context with default selected language
export const LanguageContext = createContext<ContextType>({
    language: languageOptions[0],
    dictionary: dictionaryList[languageOptions[0].id]
});

// it provides the language context to app
export function LanguageProvider({ children }: any) {
    const languageContext = useContext(LanguageContext);
    const [language, setLanguage] = useState(languageContext.language);
    const [dictionary, setDictionary] = useState(languageContext.dictionary);

    const provider = {
        language,
        dictionary,
        setLanguage: (selectedLanguage: GenericObject) => {
            setLanguage(selectedLanguage); // it will update the language in state
            setDictionary(dictionaryList[selectedLanguage.id]);
        }
    };
    return (
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    )

}