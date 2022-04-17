import React from 'react';
import InputComponent from './InputComponent';

type Props = {
  title: string,
}

function CurriculumSection({ title }: Props) {
  return (
    <div>
      <h3>{title}</h3>
      <InputComponent name="Full name" type="text" />
      <InputComponent name="Email" type="email" />
      <InputComponent name="Phone number" type="tel" />
      <InputComponent name="Birth date" type="date" />
      <label htmlFor='gender'>
        Gender:
        Masculino
        <input type="radio" name='gender' />
        Feminino
        <input type="radio" name='gender' />
        Não binário
        <input type="radio" name='gender' />
        Prefiro não responder
        <input type="radio" name='gender' />
      </label>
      <label htmlFor='address'>
        Your address:
        Country:
        <select>
          <option>Brasil</option>
        </select>
        <input type="number" placeholder="00000-000" />
        <InputComponent name="Address" type="text" />
      </label>
      <label htmlFor="city">
        State
        <select>
          <option>Piauí</option>
        </select>
      </label>
      <label htmlFor="city">
        City
        <select>
          <option>Uruçuí</option>
        </select>
      </label>

    </div>
  )
}

export default CurriculumSection