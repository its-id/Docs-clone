import React, { useState, Component } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import Navbar from "./components/Navbar/Navbar";

function App() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  return (
    <div className="App">
      <Navbar />
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={(e) => setEditorState(e)}
      />
    </div>
  );
}

export default App;
