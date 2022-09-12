import { mount as reactifiedMount } from 'reactified/ReactifiedIndex';
import React, { useRef, useEffect } from 'react';



export default () => {
  const ref = useRef(null);

  useEffect(() => {
    reactifiedMount(ref.current);
  }, []);

  return (<div ref={ref} />);
};
