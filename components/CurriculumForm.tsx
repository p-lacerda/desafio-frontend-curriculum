import React, { useContext } from 'react';
import CurriculumsContext from '../context/CurriculumsContext';
import { SubmitContextType } from '../@types/curriculums';

import Router from 'next/router';
import BasicSection from './BasicSection';
import ExperienceSection from './ExperienceSection';
import HabilitiesSection from './HabilitiesSection';

function CurriculumForm() {
  const { handleSubmit, onSubmit, dataCurriculums } = useContext(
    CurriculumsContext
  ) as SubmitContextType;

  const submitForm = () => {
    localStorage.setItem('data', JSON.stringify(dataCurriculums));
    Router.push('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BasicSection />
        <ExperienceSection />
        <HabilitiesSection />
        <button type="submit" onClick={() => submitForm()}>Enviar</button>
      </form>
    </div>
  )
}

export default CurriculumForm
