import * as React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

const R13 = () => {
  const rad = <TeX math='\frac{5 \pi}{3}' />;

  return (
    <>
      {rad}
    </>
  );
};

export default R13;
