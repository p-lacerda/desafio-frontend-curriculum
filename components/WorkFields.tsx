import React, { useContext } from 'react'

import CurriculumsContext from '../context/CurriculumsContext'
import { SubmitContextType } from '../@types/curriculums'

function WorkFields() {
  const { register } = useContext(CurriculumsContext) as SubmitContextType;

  return (
    <div>
      <label htmlFor="companyName">
        Nome da empresa:
        <input name="companyName" {...register("works.0.companyName", { required: true })} />
      </label>
      <label htmlFor="workName">
        Nome do cargo:
        <input name="workName" {...register("works.0.workName", { required: true })} />
      </label>
      <label htmlFor="initialMonth">
        Data de início:
        <select name="initialMonth" {...register("works.0.initialMonth", { required: true })}>
          <option>Janeiro</option>
          <option>Fevereiro</option>
        </select>
        <select name="initialYear"  {...register("works.0.initialYear", { required: true })}>
          <option>2021</option>
          <option>2020</option>
        </select>
      </label>
      <label htmlFor="finishMonth">
        Data de encerramento:
        <select name="finishMonth" {...register("works.0.finishMonth", { required: true })}>
          <option>Janeiro</option>
          <option>Fevereiro</option>
        </select>
        <select name="finishYear" {...register("works.0.finishYear", { required: true })}>
          <option>2022</option>
          <option>2023</option>
        </select>
      </label>
    </div>
  )
}

export default WorkFields
