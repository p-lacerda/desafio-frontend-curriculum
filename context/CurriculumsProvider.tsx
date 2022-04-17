/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import CurriculumsContext from './CurriculumsContext';

interface CurriculumProps {
  children: any;
}

function CurriculumsProvider(props: CurriculumProps) {
  const [counterItems, setCounter] = useState(1);

  return (
    <CurriculumsContext.Provider
      value={{
        counterItems,
        setCounter,
      }}
    >
      {props.children}
    </CurriculumsContext.Provider>
  );
}

export default CurriculumsProvider;
