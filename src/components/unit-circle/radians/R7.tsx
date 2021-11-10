import * as React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

const R7 = () => {
  const rad = <TeX math='\frac{5 \pi}{6}' />;

  return (
    <>
      {rad}
    </>
  );
};

export default R7;
