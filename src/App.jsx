import React from "react";
import "./App.css";

// You can split your components
import Editor from "./Editor";
import Header from "./Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Editor />
    </div>
  );
};

export default App;
