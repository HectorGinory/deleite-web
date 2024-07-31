import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductCard = ({ product }) => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <div className='md:w-96 w-80 pb-4 rounded-md shadow-lg'>
      <img 
        src={product.image} 
        alt={isEnglish ? product.name_eng : product.name} 
        className='w-full h-80 md:h-96 object-cover border-b-2 border-red-900'
      />
      <div className='flex flex-col items-start px-4 w-full py-4 gap-2  border-b-2 border-red-300'>
        <p className='text-red-900 text-xl font-semibold'>
          {isEnglish ? product.name_eng : product.name}
        </p>
        <p className='text-red-900 text-sm font-light'>
          {isEnglish ? product.name_eng : product.name}
        </p>
      </div>
      <div className='flex flex-col items-start px-4 w-full py-2 gap-2 my-4'>
        <p className='text-red-900 font-light'>
          {isEnglish ? product.description_eng.slice(0,20) : product.description.slice(0,20)}...
        </p>
      </div>
      <div className='px-4 w-full flex'>
        <button className='bg-red-900 hover:bg-red-700 text-whiteBone-100 rounded-lg px-4 py-2'>
          {isEnglish ? 'View more...' : 'Ver más...'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
