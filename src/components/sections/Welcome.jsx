import React from 'react';
import { useTranslation } from 'react-i18next';
import bannerImage from '../../assets/images/banner.png'

const Welcome = () => {
  const { t } = useTranslation();
  // const [firstProduct, setFirstProduct] = useState(0);

  return (
    <main>
      {/* Hero Section */}
      <div className='relative w-full h-96 bg-cover bg-center border-b-2 border-red-600' style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className='absolute inset-0'></div> {/* Overlay for text contrast */}
      </div>
      <section className="bg-whiteBone-200 md:h-[20rem] flex items-center justify-center py-8 md:py-0">
        <div className="text-center">
          <h2 className="text-5xl text-red-800 font-light">{t('hero_title')}</h2>
          <p className="text-xl text-red-800 mt-2">{t('hero_subtitle')}</p>
          {/* Subscribe Form */}
          <div className="mt-4">
            <input
              type="email"
              placeholder={t('email_placeholder')}
              className="mt-2 p-2 border-2 border-red-900"
            />
            <button className="bg-red-900 text-whiteBone-200 p-2 border-2 border-red-900 border-l-0 hover:bg-red-700">
              {t('join_button')}
            </button>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Welcome;

