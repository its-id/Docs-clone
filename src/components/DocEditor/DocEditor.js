import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import styles from "./DocEditor.module.css";

const DocEditor = () => {
  // EditorState is a draftjs object
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <div className="w-[95%]">
      {/* Three divs are used to create the horizontal and vertical rulers */}
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

      {/* Main Editor component extracted from package react-draft-wysiwyg built on draftjs & react-draft */}
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
