import React from 'react';
import SchoolFields from './SchoolFields';
import CurriculumSection from './CurriculumSection';

function CurriculumForm() {
  return (
    <div>
      <form>
        <CurriculumSection title="About you" />
        <h3>Your Experience</h3>
        <div>
          <SchoolFields />

          <button type="button">Add new school</button>
          <button type="button">Add new job</button>
        </div>
        <div>
          <h3>Habilities</h3>
          <input type="text" />
          <button type="button">Add a new hability</button>
          Github
          <input type="text" />
          Linkedin
          <input type="text" />
        </div>
        <button type="button">Add New Curriculum</button>
      </form>
    </div>
  )
}

export default CurriculumForm
