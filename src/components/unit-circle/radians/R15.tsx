import * as React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

const R15 = () => {
  const rad = <TeX math='\frac{11 \pi}{6}' />;

  return (
    <>
      {rad}
    </>
  );
};

export default R15;
