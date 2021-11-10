import * as React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

const R6 = () => {
  const rad = <TeX math='\frac{3 \pi}{4}' />;

  return (
    <>
      {rad}
    </>
  );
};

export default R6;
