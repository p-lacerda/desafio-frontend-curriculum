import React, { useContext } from 'react';
import CurriculumsContext from '../context/CurriculumsContext';
import { SubmitContextType } from '../@types/curriculums';

import BasicSection from './BasicSection';
import ExperienceSection from './ExperienceSection';
import HabilitiesSection from './HabilitiesSection';

function CurriculumForm() {
  const { handleSubmit, onSubmit } = useContext(CurriculumsContext) as SubmitContextType;
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BasicSection />
        <ExperienceSection />
        <HabilitiesSection />
        <input type="submit" />
      </form>
    </div>
  )
}

export default CurriculumForm
