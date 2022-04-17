import React from 'react'

type Props = {
  name: string
  type: string
}

function InputComponent({ name, type }: Props) {
  return (
    <label>
      <p>{name}:</p>
      <input type={type} />
    </label>
  )
}

export default InputComponent
