import en from './en';
import ch from './ch';

type GenericObject = { [key: string]: any };

export const dictionaryList: { [key: string]: any  } = {
    en,
    ch
};

export const languageOptions: Array<GenericObject>  = [
    { id: 'ch', text: '中文'},
    { id: 'en', text: 'English'},
]