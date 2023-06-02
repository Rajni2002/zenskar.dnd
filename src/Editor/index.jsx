import React from "react";
import EditorCanvas from "./EditorCanvas";
import EditorPicker from "./EditorPicker";
import "./index.css"

const Editor = (props) => {
    return (
        <div className="editor">
            <EditorCanvas />
            <EditorPicker />
        </div>
    );
};

export default Editor;