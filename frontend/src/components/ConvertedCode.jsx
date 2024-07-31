import React from 'react';
import '../styles/ConvertedCode.css';

const ConvertedCode = ({ convertedCode }) => {
  return (
    
    <div className="converted-code">
      <pre>Result // <br /><br />{convertedCode}</pre>
    </div>
    
  );
};

export default ConvertedCode;
