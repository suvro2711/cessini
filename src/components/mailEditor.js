import React, { useRef } from 'react';
import "./firstWindow.css"
import EmailEditor from 'react-email-editor';

function MailEditor() {

  const emailEditorRef = useRef(null);

  return (
    <React.Fragment>
        <div className="editorWindow">
            <EmailEditor ref={emailEditorRef}></EmailEditor>
        </div>
    </React.Fragment>
  );

}

export default MailEditor;