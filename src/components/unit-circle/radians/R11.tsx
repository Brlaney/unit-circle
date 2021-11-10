import * as React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

const R11 = () => {
  const rad = <TeX math='\frac{4 \pi}{3}' />;

  return (
    <>
      {rad}
    </>
  );
};

export default R11;
