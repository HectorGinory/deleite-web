import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import './Landing.css';
import Welcome from '../../components/sections/Welcome';
import Catalog from '../../components/sections/Catalog';
// import About from '../../components/sections/About';
import Contact from '../../components/sections/Contact';
import Nav from '../../components/components/nav';
import { Parallax } from 'react-parallax';
import imageLanding1 from '../../assets/images/image_landing_1.jpg';
import imageLanding2 from '../../assets/images/image_landing_2.jpg';
import imageLanding3 from '../../assets/images/image_landing_3.jpg';
import imageLandingMov1 from '../../assets/images/image_landing_mov_1.jpg';
import imageLandingMov2 from '../../assets/images/image_landing_mov_2.jpg';
import imageLandingMov3 from '../../assets/images/image_landing_mov_3.jpg';
import Information from '../../components/sections/Information';

const Landing = () => {
  // const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  const parallaxStyle = {
    backgroundSize: '',
    backgroundRepeat: 'repeat-y',
    backgroundPosition: 'center',
    opacity: 0.6
  };

  return (
    <div className="landing bg-red-950 w-[100vw] overflow-hidden">
      <Nav />
      <section className='border-b-2 shadow-xl border-red-900' id="home">
        <Welcome />
      </section>
      <section className='border-b-2 shadow-xl border-red-900' id="home">
          <Information />
      </section>
        <section className='border-b-2 shadow-xl border-red-900' id="catalog">
          <Catalog />
        </section>
        <section className='border-b-2 shadow-xl border-red-900' id="contact">
          <Contact />
        </section>
    </div>
  );
};

export default Landing;

