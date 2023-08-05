import React, { useState } from 'react';
import './App.css';
import MonacoEditor from 'react-monaco-editor';
import CodeEditor from './components/CodeEditor';
import ConvertedCode from './components/ConvertedCode';
import axios from 'axios';

function App() {
  const [code, setCode] = useState('');
  const [convertedCode, setConvertedCode] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('javascript');
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)

  const handleCodeChange = (newCode) => {
    setCode(newCode);
    
  };

  const handleConvertCode = async() => {
    // Simulating conversion by adding "// Converted" to the code
    
    
    // console.log(code)
    try {
      const payload = {
        outLanguage: targetLanguage, 
        inCode: code
      }

      setLoading(true)
      let res = await axios.post(`http://localhost:8080/convert`, payload)
      // console.log(res.data.msg)
      setLoading(false)
      setConvertedCode(res.data.msg);

    } catch (error) {
      setLoading(false)
      setErr(true)
      console.log(error)
    }
  };

  const handleDebugCode = async() => {
    // Simulating debugging by adding "// Debugged" to the code
    
    

    try {
      const payload = {
         
        inCode: code
      }

      setLoading(true)
      let res = await axios.post(`http://localhost:8080/debug`, payload)
      // console.log(res.data.msg)
      setLoading(false)
      setConvertedCode(res.data.msg);
      
    } catch (error) {
      setLoading(false)
      setErr(true)
      console.log(error)
    }
  };

  const handleQualityCheck = async() => {
    // Simulating quality check by adding "// Quality Checked" to the code
    try {
      const payload = {
         
        inCode: code
      }

      setLoading(true)
      
      let res = await axios.post(`http://localhost:8080/quality`, payload)
      // console.log(res.data.msg)
      setLoading(false)
      setConvertedCode(res.data.msg);
      
    } catch (error) {
      setLoading(false)
      setErr(true)
      console.log(error)
    }
  };

  return (
    <>
      <p className='title'>Code Converter</p>
    <div className="app">
      <div className="control-bar">
        <select
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
          >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
          <option value="csharp">C#</option>
          <option value="ruby">Ruby</option>
          {/* Add more language options */}
        </select>
        <button onClick={handleConvertCode}>Convert Code</button>
        <button onClick={handleDebugCode}>Debug Code</button>
        <button onClick={handleQualityCheck}>Quality Check</button>
      </div>
      <div className="editor-container">
        <CodeEditor code={code} onCodeChange={handleCodeChange} />
      </div>
      <div className="converted-code-container">
        {loading ? <pre>Please wait...</pre>
         : err ? <pre>Something went wrong, please refresh and try again</pre>
         : <ConvertedCode convertedCode={convertedCode} />}
        
      </div>
    </div>
         </>
  );
}

export default App;
