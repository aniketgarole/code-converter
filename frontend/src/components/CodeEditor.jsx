import React from 'react';
import MonacoEditor from 'react-monaco-editor';
// import './CodeEditor.css';

const CodeEditor = ({ code, onCodeChange }) => {

    const options = {
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        cursorStyle: 'line',
        // automaticLayout: true,
      };

  const handleEditorChange = (newCode) => {
    onCodeChange(newCode);
    // console.log(newCode)
  };

  return (
    <div className="code-editor">
      <MonacoEditor
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditor;
