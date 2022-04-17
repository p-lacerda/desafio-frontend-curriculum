import React, { useContext } from 'react';
import CurriculumsContext from '../context/CurriculumsContext';
import { SubmitContextType } from '../@types/curriculums';

function HomeScreen() {
  const { dataCurriculums } = useContext(CurriculumsContext) as SubmitContextType;

  return (
    <div>
      {dataCurriculums.map(({ fullname }: { fullname: string }, i: number) => (
        <div key={i}>
          <p>{fullname}</p>
          <button>Acessar currículo</button>
          <button>Remover currículo</button>
        </div>
      ))}
    </div>
  )
}

export default HomeScreen;