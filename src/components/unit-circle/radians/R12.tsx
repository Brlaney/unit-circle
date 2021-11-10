import * as React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

const R12 = () => {
  const rad = <TeX math='\frac{3 \pi}{2}' />;

  return (
    <>
      {rad}
    </>
  );
};

export default R12;
