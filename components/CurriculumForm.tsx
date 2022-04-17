import React from 'react';
import { PersonalFormFields } from './utils/FormFields';
import InputComponent from './InputComponent';

function CurriculumForm() {
  return (
    <div>
      <h3>Add new curriculum</h3>
      <form>
        <div>
          {PersonalFormFields.map((field, i) => (
            <InputComponent key={i} name={field.name} type={field.type} />
          ))}
          <button type="button">Add</button>
        </div>
      </form>
    </div>
  )
}

export default CurriculumForm