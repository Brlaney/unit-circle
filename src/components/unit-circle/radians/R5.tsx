import * as React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

const R5 = () => {
  const rad = <TeX math='\frac{2 \pi}{3}' />;

  return (
    <>
      {rad}
    </>
  );
};

export default R5;
