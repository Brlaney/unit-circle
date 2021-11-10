import * as React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

const R9 = () => {
  const rad = <TeX math='\frac{7 \pi}{6}' />;

  return (
    <>
      {rad}
    </>
  );
};

export default R9;
