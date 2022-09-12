import { mount as productsMount } from 'products/ProductsIndex';
import React, { useRef, useEffect } from 'react';



export default () => {
  const ref = useRef(null);

  useEffect(() => {
    productsMount(ref.current);
  }, []);

  return (<div ref={ref} />);
};
