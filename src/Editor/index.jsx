import React from "react";
import EditorCanvas from "./EditorCanvas";
import EditorPicker from "./EditorPicker";
import DraggableLayer from "./EditorCanvas/DraggableElements/DraggableLayer";
import "./index.css";

const Editor = (props) => {
    return (
        <div className="editor">
            <EditorCanvas />
            {/* <DraggableLayer /> */}
            <EditorPicker />
        </div>
    );
};

export default Editor;