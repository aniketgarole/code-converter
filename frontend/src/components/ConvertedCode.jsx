import React from 'react';
import '../styles/ConvertedCode.css';

const ConvertedCode = ({ convertedCode }) => {
  return (
    
    <div className="converted-code">
      <pre>again Updated Result // <br /><br />{convertedCode}</pre>
    </div>
    
  );
};

export default ConvertedCode;
