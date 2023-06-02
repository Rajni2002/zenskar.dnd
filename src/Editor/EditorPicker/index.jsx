import React from 'react';

const EditorPicker = (props) => {
    return (
        <div className="editor-picker">
            <h4>
                {" "}
                Clicking these buttons should create new components on the canvas{" "}
            </h4>
            <button> Create a button </button>
            <button> Create a text input </button>
            <button> Create a dropdown </button>
            <button> Create a table </button>
        </div>
    );
};

export default EditorPicker;
