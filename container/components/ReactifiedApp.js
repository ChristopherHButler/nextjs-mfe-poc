import { mount as reactifiedMount } from 'reactified/ReactifiedIndex';
import React, { useRef, useEffect } from 'react';



const ReactifiedApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    reactifiedMount(ref.current);
  }, []);

  return (<div ref={ref} />);
};

export default ReactifiedApp;
