import React, { useContext } from 'react'
import CurriculumsContext from '../context/CurriculumsContext'
import { SubmitContextType } from '../@types/curriculums'

function BasicSection() {
  const { register } = useContext(CurriculumsContext) as SubmitContextType
  const REGEX_EMAIL =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const REGEX_PHONE =
    /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm
  return (
    <div>
      <h3>About you</h3>
      <label htmlFor="fullname">
        Full name:
        <input name="fullname" {...register('fullname', { required: true })} />
      </label>
      <label htmlFor="email">
        Email:
        <input
          name="email"
          {...register('email', { required: true, pattern: REGEX_EMAIL })}
        />
      </label>
      <label htmlFor="phone">
        Phone number:
        <input
          name="phone"
          {...register('phone', { required: true, pattern: REGEX_PHONE })}
        />
      </label>
      <label htmlFor="birth">
        Birth date:
        <input
          type="date"
          name="birth"
          {...register('birthDate', { required: true })}
        />
      </label>

      <p>Gender:</p>
      <label htmlFor="male">
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          {...register('gender', { required: true })}
        />
        Male
      </label>

      <label htmlFor="female">
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          {...register('gender')}
        />
        Female
      </label>

      <label htmlFor="nonBinary">
        <input
          type="radio"
          id="nonBinary"
          name="gender"
          value="nonBinary"
          {...register('gender')}
        />
        Não binário
      </label>

      <label htmlFor="other">
        <input
          type="radio"
          id="other"
          name="gender"
          value="other"
          {...register('gender')}
        />
        Prefiro não responder
      </label>
      <label htmlFor="country">
        <p>Country:</p>
        <select id="country" name="country" {...register('country')}>
          <option>Brasil</option>
          <option>Argentina</option>
        </select>
      </label>
      <label htmlFor="zipCode">
        <p>Zip Code:</p>
        <input
          type="number"
          id="zipCode"
          placeholder="00000-000"
          {...register('zipCode')}
        />
      </label>

      <label htmlFor="address">
        Address:
        <input type="text" id="address" {...register('address')} />
      </label>
      <label htmlFor="state">
        State
        <select id="state" {...register('state')}>
          <option>Piauí</option>
        </select>
      </label>
      <label htmlFor="city">
        City
        <select id="city" {...register('city')}>
          <option>Uruçuí</option>
        </select>
      </label>
      <label htmlFor='objective'>
        Objetivo Profissional
        <textarea id="objective" {...register('objective')} />
      </label>
    </div>
  )
}

export default BasicSection
