/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
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
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <CurriculumsContext.Provider
      value={{
        register,
        handleSubmit,
        onSubmit,
      }}
    >
      {props.children}
    </CurriculumsContext.Provider>
  )
}

export default CurriculumsProvider
