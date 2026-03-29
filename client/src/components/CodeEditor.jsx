import { useEffect, useRef } from 'react';

function CodeEditor({ code, onChange, readOnly }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current && document.activeElement !== textareaRef.current) {
      textareaRef.current.scrollTop = 0;
    }
  }, [code]);

  return (
    <div className="code-editor-container">
      <textarea
        ref={textareaRef}
        className="code-editor-textarea"
        value={code}
        onChange={(e) => onChange(e.target.value)}
        readOnly={readOnly}
        spellCheck={false}
      />
    </div>
  );
}

export default CodeEditor;
