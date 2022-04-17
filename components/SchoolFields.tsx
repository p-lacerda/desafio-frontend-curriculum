import React, { useContext } from 'react'

import CurriculumsContext from '../context/CurriculumsContext'
import { SubmitContextType } from '../@types/curriculums'

function SchoolFields() {
  const { register } = useContext(CurriculumsContext) as SubmitContextType;

  return (
    <div>
      <select {...register("schools.0.type", { required: true })}>
        <option>Ensino Fundamental</option>
        <option>Ensino Médio</option>
        <option>Ensino Superior Incompleto</option>
        <option>Ensino Superior Completo</option>
        <option>Ensino Técnico</option>
      </select>
      <label htmlFor="schoolName">
        Nome:
        <input name="schoolName" {...register("schools.0.schoolName", { required: true })} />
      </label>
      <label htmlFor="initialMonth">
        Data de início:
        <select name="initialMonth" {...register("schools.0.initialMonth", { required: true })}>
          <option>Janeiro</option>
          <option>Fevereiro</option>
        </select>
        <select name="initialYear"  {...register("schools.0.initialYear", { required: true })}>
          <option>2021</option>
          <option>2020</option>
        </select>
      </label>
      <label htmlFor="finishMonth">
        Data de conclusão:
        <select name="finishMonth" {...register("schools.0.finishMonth", { required: true })}>
          <option>Janeiro</option>
          <option>Fevereiro</option>
        </select>
        <select name="finishYear" {...register("schools.0.finishYear", { required: true })}>
          <option>2022</option>
          <option>2023</option>
        </select>
      </label>
    </div>
  )
}

export default SchoolFields
