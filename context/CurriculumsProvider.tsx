/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import CurriculumsContext from './CurriculumsContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

interface CurriculumProps {
  children: any
}

type Inputs = {
  example: string
  exampleRequired: string
}

function CurriculumsProvider(props: CurriculumProps) {
  const [dataCurriculums, setData] = useState<any[]>([])
  const { register, handleSubmit } = useForm<Inputs>()
  const id: string = uuidv4();

  // const onSubmit: SubmitHandler<any> = (data) => (
  // setData((prevState) => ([...prevState, { ...data, id }])
  // )

  const onSubmit: SubmitHandler<any> = async (data) => {
    setData((prevState) => [...prevState, { ...data, id }])
  }

  useEffect(() => (
    localStorage.setItem('data', JSON.stringify(dataCurriculums))
  ), [dataCurriculums])

  return (
    <CurriculumsContext.Provider
      value={{
        register,
        handleSubmit,
        onSubmit,
        dataCurriculums,
      }}
    >
      {props.children}
    </CurriculumsContext.Provider>
  )
}

export default CurriculumsProvider
