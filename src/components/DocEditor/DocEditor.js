import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const DocEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <Editor editorState={editorState} wrapperClassName="demo-wrapper" editorClassName="demo-editor" onEditorStateChange={(e) => setEditorState(e)} />
  );
};

export default DocEditor;
