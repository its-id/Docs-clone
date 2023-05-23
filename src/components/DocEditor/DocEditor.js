import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import styles from "./DocEditor.module.css";

const DocEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <div className="w-[95%]">
      <div className={styles.horizontalRuler}>
        <label>1</label>
        <span class="material-symbols-outlined">arrow_drop_down</span>
        <label>2</label>
        <label>3</label>
        <label>4</label>
      </div>
      <div className={styles.connector}></div>
      <div className={styles.verticalRuler}>
        <div className={styles.verticalMain}>
          <label>7</label>
          <label>6</label>
          <label>5</label>
          <label>4</label>
          <label>3</label>
          <label>2</label>
          <span class="material-symbols-outlined">arrow_drop_down</span>
          <label>1</label>
        </div>
      </div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbar-class"
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={(e) => setEditorState(e)}
      />
    </div>
  );
};

export default DocEditor;
