import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  useEffect(() => {
    console.log(t())
  }, [t])
  return (
    <div className='w-screen'>
      <div className='bg-red-200 w-screen'></div>
      <div className="p-4 md:px-20 bg-red-100 pt-8">
        <div className="flex flex-col lg:flex-row justify-between items-center bg-white shadow-lg rounded-lg p-6 w-full">
          {/* Formulario de comentarios */}
          <div className="w-full flex flex-col items-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">{t('contact_title')}</h2>
            <form className='w-full'>
            {currentLanguage === 'es' ? (
              <p className='text-red-500 w-full text-start italic'>Los campos con <strong className='text-red-700'>*</strong> son obligatorios</p>
            ) : (
              <p className='text-red-500 w-full text-start italic'>Fields marked with <strong className='text-red-700'>*</strong> are mandatory</p>
            )}
              <div className="mb-4 flex flex-col items-start">
                <label htmlFor="nombre" className="block text-red-600">{t('name_label')}:</label>
                <input type="text" id="nombre" className="w-full border-b-2 text-red-500 border-red-300 focus:border-red-500 outline-none py-2" />
              </div>
              <div className="mb-4 flex flex-col items-start">
                <label htmlFor="apellido" className="block text-red-600">{t('surname_label')}:</label>
                <input type="text" id="apellido" className="w-full border-b-2 text-red-500 border-red-300 focus:border-red-500 outline-none py-2" />
              </div>
              <div className="mb-4 flex flex-col items-start">
                <label htmlFor="email" className="block text-red-600">{t('email_label')}:</label>
                <input type="email" id="email" className="w-full border-b-2 text-red-500 border-red-300 focus:border-red-500 outline-none py-2" />
              </div>
              <div className="mb-4 flex flex-col items-start">
                <label htmlFor="telefono" className="block text-red-600">{t('phone_label')}:</label>
                <input type="tel" id="telefono" className="w-full border-b-2 text-red-500 border-red-300 focus:border-red-500 outline-none py-2" />
              </div>
              <div className="mb-4 flex flex-col items-start">
                <label htmlFor="comentario" className="block text-red-600">{t('message_label')}:</label>
                <textarea id="comentario" className="w-full border-b-2 text-red-500 border-red-300 focus:border-red-500 outline-none py-2" rows="4"></textarea>
              </div>
              <div className="text-right">
                <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition duration-300">{t('submit_button')}</button>
              </div>
              <p className="text-red-600 mt-2">{t('thank_you_message')}</p>
            </form>
          </div>

          {/* Imagen de ejemplo para el lado derecho */}
          <div className="w-full lg:w-1/2">
            <div className="bg-red-200 h-64 lg:h-full mt-4 lg:mt-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
