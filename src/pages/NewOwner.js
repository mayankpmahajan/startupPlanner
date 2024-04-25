// FormComponent.jsx
import React, { useState } from 'react';
import '../css/NewOwner.css'; // Import CSS stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';

const FormComponent = () => {
  const [industry, setIndustry] = useState('');
  const [designPref, setDesignPref] = useState('');
  const [startupDescription, setStartupDescription] = useState('');
  const [usp, setUSP] = useState('');

  const handleIndustryChange = (event) => {
    setIndustry(event.target.value);
  };

  const handleDesignPrefChange = (event) => {
    setDesignPref(event.target.value);
  };

  const handleStartupDescriptionChange = (event) => {
    setStartupDescription(event.target.value);
  };

  const handleUSPChange = (event) => {
    setUSP(event.target.value);
  };

  return (
    <form className="form">
      <div className="form-group">
        <label className="form-label">Industry:</label>
        <div className="radio-group">
          <input type="radio" id="healthcare" name="industry" value="healthcare" onChange={handleIndustryChange} />
          <label htmlFor="healthcare">Healthcare</label>

          <input type="radio" id="education" name="industry" value="education" onChange={handleIndustryChange} />
          <label htmlFor="education">Education</label>

          <input type="radio" id="finance" name="industry" value="finance" onChange={handleIndustryChange} />
          <label htmlFor="finance">Finance</label>

          <input type="radio" id="tech" name="industry" value="tech" onChange={handleIndustryChange} />
          <label htmlFor="tech">Tech</label>

          <input type="radio" id="other" name="industry" value="other" onChange={handleIndustryChange} />
          <label htmlFor="other">Other</label>
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Design Preference:</label>
        <div className="radio-group">
          <input type="radio" id="minimalistic" name="designPref" value="minimalistic" onChange={handleDesignPrefChange} />
          <label htmlFor="minimalistic">Minimalistic</label>

          <input type="radio" id="modern" name="designPref" value="modern" onChange={handleDesignPrefChange} />
          <label htmlFor="modern">Modern</label>

          <input type="radio" id="vintage" name="designPref" value="vintage" onChange={handleDesignPrefChange} />
          <label htmlFor="vintage">Vintage</label>

          <input type="radio" id="corporate" name="designPref" value="corporate" onChange={handleDesignPrefChange} />
          <label htmlFor="corporate">Corporate</label>

          <input type="radio" id="playful" name="designPref" value="playful" onChange={handleDesignPrefChange} />
          <label htmlFor="playful">Playful</label>
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="startupDescription">Describe your startup:</label>
        <textarea id="startupDescription" className="form-textarea" value={startupDescription} onChange={handleStartupDescriptionChange} />
      </div>
      <div className="form-group">
        <label className="form-label">USP:</label>
        <div className="radio-group">
          <input type="radio" id="innovative" name="usp" value="innovative" onChange={handleUSPChange} />
          <label htmlFor="innovative">Innovative</label>

          <input type="radio" id="cost-effective" name="usp" value="cost-effective" onChange={handleUSPChange} />
          <label htmlFor="cost-effective">Cost-effective</label>

          <input type="radio" id="user-friendly" name="usp" value="user-friendly" onChange={handleUSPChange} />
          <label htmlFor="user-friendly">User-friendly</label>

          <input type="radio" id="high-quality" name="usp" value="high-quality" onChange={handleUSPChange} />
          <label htmlFor="high-quality">High-quality</label>

          <input type="radio" id="customizable" name="usp" value="customizable" onChange={handleUSPChange} />
          <label htmlFor="customizable">Customizable</label>
        </div>
        <div className="form-group">
        <label className="form-label">Avatar:</label>
        <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off"/>
        <label class="btn btn-secondary snoop" for="option4"></label>

        <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"/>
        <label class="btn btn-secondary williams" for="option2"></label>

        <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off"/>
        <label class="btn btn-secondary kanye" for="option1"></label>

        <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off"/>
        <label class="btn btn-secondary guruji" for="option3"></label>

        </div>
      </div>
    </form>
  );
};

export default FormComponent;
