import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import products from '../../helpers/products';
import types from '../../helpers/types';
import companies from '../../helpers/companies';
import ProductCard from '../components/card';

const Catalog = () => {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');

  const filteredProducts = products().filter(product => {
    return (
      (selectedType ? product.type_id === parseInt(selectedType) : true) &&
      (selectedCompany ? product.company_id === parseInt(selectedCompany) : true)
    );
  });

  return (
    <div className='w-full overflow-hidden bg-white'>
      <div className='h-[100vh] flex items-center justify-center '>
        <div className='h-[calc(100%-2rem)] rounded-xl overflow-hidden items-center flex flex-col w-full'>
          <div className='md:h-10 border-b-2 border-red-900 w-full text-red-900 flex md:justify-between px-6 py-6 md:py-12 md:flex-row flex-col '>
            <div className='flex gap-4 md:items-center flex-row'>
              <div className='flex flex-col items-start '>
                <label className='text-xl font-semibold'>{t('company_label')}</label>
                <select 
                  className='px-6 py-2 rounded-lg shadow-md'
                  value={selectedCompany}
                  onChange={e => setSelectedCompany(e.target.value)}
                >
                  <option value="">{t('select_option')}</option>
                  {companies().map(company => (
                    <option key={company.id} value={company.id}>
                      {company.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className='flex flex-col items-start'>
                <label className='text-xl font-semibold'>{t('product_label')}</label>
                <select 
                  className='px-6 py-2 rounded-lg shadow-md'
                  value={selectedType}
                  onChange={e => setSelectedType(e.target.value)}
                >
                  <option value="">{t('select_option')}</option>
                  {types().map(type => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='mt-10 md:mt-0'>
              <p>{t('total_products')} <span className='text-xl'>{filteredProducts.length}</span></p>
            </div>
          </div>
          <div className='md:h-[calc(100%-10rem)] h-[calc(100%-19rem)] w-full mt-5shadow-inner flex flex-wrap gap-5 justify-center py-10 overflow-y-auto'>
            {filteredProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
