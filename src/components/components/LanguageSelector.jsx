import React from 'react';
import { useTranslation } from 'react-i18next';
import UkFlag from '../../assets/svg/uk_flag.svg';
import SpainFlag from '../../assets/svg/spain_flag.svg';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className='flex gap-4 items-center justify-center w-full md:w-auto md:justify-start md:py-0 py-2'>
      <p className='text-red-500 md:text-whiteBone-200 font-bold'>{currentLanguage === 'en' ? 'Language' : 'Idioma'}:</p>
      <button
        onClick={() => changeLanguage('en')}
        className="max-h-10"
      >
        <img
          src={UkFlag}
          alt="UK Flag"
          className={`max-h-6 rounded-full border-2 ${currentLanguage === 'en' ? 'border-red-500 md:border-whiteBone-200' : 'border-whiteBone-200 md:border-red-500'}`}
        />
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className="max-h-10"
      >
        <img
          src={SpainFlag}
          alt="Spain Flag"
          className={`max-h-6 rounded-full border-2 ${currentLanguage === 'es' ? 'border-red-500 md:border-whiteBone-200' : 'border-whiteBone-200 md:border-red-500'}`}
        />
      </button>
    </div>
  );
};

export default LanguageSelector;
