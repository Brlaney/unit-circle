import * as React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

const R16 = () => {
  const rad = <TeX math='2 \pi' />;

  return (
    <>
      {rad}
    </>
  );
};

export default R16;
