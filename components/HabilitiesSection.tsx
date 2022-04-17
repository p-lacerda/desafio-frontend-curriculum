import React, { useContext } from 'react'

import CurriculumsContext from '../context/CurriculumsContext'
import { SubmitContextType } from '../@types/curriculums'

function HabilitiesSection() {
  const { register } = useContext(CurriculumsContext) as SubmitContextType

  return (
    <div>
      <h3>Habilidades</h3>
      {/* 
      Habilidades
      <input type="text" />
      <button type="button">Add a new hability</button> */}
      Github
      <input name="github" {...register('github', { required: false })} />
      Linkedin
      <input name="linkedin" {...register('linkedin', { required: false })} />
    </div>
  )
}

export default HabilitiesSection
