import React from 'react';
import { useTranslation } from 'react-i18next';

import aboutUs from '../../assets/images/image_about_us.png'
import products from '../../assets/images/image_products.png'
const Information = () => {
  const { t } = useTranslation();
  // const [firstProduct, setFirstProduct] = useState(0);

  return (
      <section>
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 md:h-96">
            <div className='bg-red-300 w-full md:h-full h-auto py-4 justify-center flex flex-col items-start px-8'>
              <h2 className="text-2xl text-red-600 font-bold">{t('about_title')}</h2>
                <p className="text-gray-700 mt-2 text-justify text-sm">
                  {t('about_text_1')}
                </p>
                <br/>
                <p className="text-gray-700 mt-2 text-justify text-sm">
                  {t('about_text_2')}
                </p>
            </div>
            <div className="bg-red-600 md:h-auto h-96 bg-cover bg-center sm:bg-custom-sm md:bg-custom-md" style={{ backgroundImage: `url(${aboutUs})`, backgroundPosition: 'center' }}>
              {/* Reemplaza con una <img> o deja el div para una imagen de fondo */}
            </div>
        </div>

        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 md:h-96">
          <div className="bg-red-600 h-48 md:h-auto md:order-3 bg-cover bg-center hidden md:block shadow-lg" style={{ backgroundImage: `url(${products})` }}>
            {/* Reemplaza con una <img> o deja el div para una imagen de fondo */}
          </div>
          <div className="md:order-4 order-1 px-14 p-4 bg-whiteBone-200 justify-center flex flex-col items-start">
            <h2 className="text-2xl text-red-600 font-bold mb-4">{t('our_products_title')}</h2>
            <p className="text-gray-600 mb-4 text-justify">
              {t('our_products_text')}
            </p>
            <a href="./#catalog" className="text-red-600 hover:text-red-800 transition duration-300 hover:underline cursor-pointer">
              {t('more_info')}
            </a>
          </div>
        </div>
      </section>
  );
};

export default Information;
