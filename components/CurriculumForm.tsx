import React, { useContext, useEffect } from 'react'
import CurriculumsContext from '../context/CurriculumsContext'
import { SubmitContextType } from '../@types/curriculums'

// import Router from 'next/router'
import BasicSection from './BasicSection';
import ExperienceSection from './ExperienceSection';
import HabilitiesSection from './HabilitiesSection';

function CurriculumForm() {
  const { handleSubmit, onSubmit } = useContext(
    CurriculumsContext
  ) as SubmitContextType

  // const submitForm = () => {
  //   console.log(dataCurriculums);
  //   // Router.push('/');
  // }

  useEffect(() => (
    localStorage.getItem('data') === null ? localStorage.setItem('data', '[]') : undefined
  ), [])

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BasicSection />
        <ExperienceSection />
        <HabilitiesSection />
        <button type="submit" >
          Enviar
        </button>
      </form>
    </div>
  )
}

export default CurriculumForm
