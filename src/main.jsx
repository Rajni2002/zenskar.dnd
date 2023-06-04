import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store"
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { saveState } from "./store/localStorage";
import { ThemeProvider, createTheme } from "@mui/material";

store.subscribe(() => {
  saveState({
    elements: store.getState().elements
  })
})

const theme = createTheme({
  typography: {
    fontFamily: [
      "Montserrat", "sans-serif"
    ].join(','),
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
      <DndProvider backend={HTML5Backend}>
        <Provider store={store}>
          <App />
        </Provider>
      </DndProvider>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
