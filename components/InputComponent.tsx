import React from 'react'

type Props = {
  name: string,
  type: string
}

function InputComponent({ name, type }: Props) {
  return (
    <label>
      {name}
      <input type={type} />
    </label>
  )
}

export default InputComponent