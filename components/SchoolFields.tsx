import React from 'react'


function SchoolFields() {
  return (
    <div>
      <select>
        <option>Ensino Fundamental</option>
        <option>Ensino Médio</option>
        <option>Ensino Superior Incompleto</option>
        <option>Ensino Superior Completo</option>
        <option>Ensino Técnico</option>
      </select>
      <label>
        Nome:
        <input type="text" />
      </label>
      <label>
        Data de início:
        <select>
          <option>Janeiro</option>
          <option>Fevereiro</option>
        </select>
        <select>
          <option>2021</option>
          <option>2020</option>
        </select>
      </label>
      <label>
        Data do término:
        <select>
          <option>Janeiro</option>
          <option>Fevereiro</option>
        </select>
        <select>
          <option>2022</option>
          <option>2022</option>
        </select>
      </label>
      <button type="button">Save</button>
    </div>
  )
}

export default SchoolFields