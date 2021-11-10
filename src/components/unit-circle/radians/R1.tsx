import * as React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

const R1 = () => {
  const rad = <TeX math='\frac{\pi}{6}' />;

  return (
    <>
      {rad}
    </>
  );
};

export default R1;
