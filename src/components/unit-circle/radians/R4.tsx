import * as React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

const R4 = () => {
  const rad = <TeX math='\frac{\pi}{2}' />;

  return (
    <>
      {rad}
    </>
  );
};

export default R4;
