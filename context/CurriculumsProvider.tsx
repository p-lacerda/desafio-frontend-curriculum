/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import CurriculumsContext from './CurriculumsContext'
import { useForm, SubmitHandler } from 'react-hook-form'

interface CurriculumProps {
  children: any
}

type Inputs = {
  example: string
  exampleRequired: string
}

function CurriculumsProvider(props: CurriculumProps) {
  const [dataCurriculums, setData] = useState<any[]>([]);
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<any> = (data) => setData(prevState => [...prevState, data])


  return (
    <CurriculumsContext.Provider
      value={{
        register,
        handleSubmit,
        onSubmit,
        dataCurriculums
      }}
    >
      {props.children}
    </CurriculumsContext.Provider>
  )
}

export default CurriculumsProvider
