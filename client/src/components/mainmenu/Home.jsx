import React, { useContext, useEffect, useState } from 'react';
import Connect from '../Connect';
import ThemeContext from '../context/Theme';
import ProductCard from './ProductCard';

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);
  const { themeMode } = useContext(ThemeContext);
  useEffect(async () => {
    const products = await Connect.getProducts(1010);
    setCurrentProducts(products.data.slice(0, 10));
    setAllProducts(products.data);
  }, []);

  const viewMoreProducts = () => {
    const additional8 = allProducts.slice(currentProducts.length, currentProducts.length + 8);
    setCurrentProducts([...currentProducts, ...additional8]);
  };
  return (
    <div className="row w-75 align-items-center flex-column mx-auto">
      <div className="mt-3 justify-content-between row bg-transparent">
        {currentProducts.map((item) => <ProductCard Product={item} key={item.id} />)}
      </div>
      <button
        type="button"
        className={`rounded-sm shadow btn w-100 mx-auto py-3 h3 text-bold my-3
         ${themeMode === 'Light' ? 'bg-light-dark text-dark' : 'bg-dark text-light-dark'}
        `}
        onClick={viewMoreProducts}
      >
        Show More
      </button>
    </div>
  );
};

export default Home;
