import { mount as productsMount } from 'products/ProductsIndex';
import React, { useRef, useEffect } from 'react';



const ProductsApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    productsMount(ref.current);
  }, []);

  return (<div ref={ref} />);
};

export default ProductsApp;
