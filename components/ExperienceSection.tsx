import React from 'react';
import SchoolFields from './SchoolFields';

function ExperienceSection() {
  return (
    <div>
      <h3>Your experience</h3>
      <div>
        <SchoolFields />

        <button type="button">Add new school</button>
        <button type="button">Add new job</button>
      </div>
    </div>
  )
}

export default ExperienceSection;
