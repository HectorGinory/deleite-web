import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-whiteBone-200">
      <div className=" mx-auto px-4 py-12">
        <div className="flex justify-between items-center px-10">
          <div className="w-full lg:w-2/5 mb-6 lg:mb-0 flex flex-col items-start">
            <h2 className="text-3xl text-red-600 font-bold">{t('about_title')}</h2>
            <p className="text-gray-700 mt-4 text-justify">
              {t('about_text_1')}
            </p>
            <br/>
            <p className="text-gray-700 mt-4 text-justify">
              {t('about_text_2')}
            </p>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center items-center gap-4">

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
