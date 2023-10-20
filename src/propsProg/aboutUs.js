import React, { useState } from 'react';

const AboutUs = (props) => {
  // Corrected usage of useState with default values
  const [companyName] = useState(props.companyName);
  const [companyAddress] = useState(props.companyAddress);

  return (
    <div>
      <h1>Company Name: {companyName}</h1>
      <h2>Company Address: {companyAddress}</h2>
      <p>A mission statement. This describes the purpose of your business as it relates to the industry or market you serve</p>
    </div>
  );
}

export default AboutUs;