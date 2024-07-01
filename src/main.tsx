import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomClassNameSetup";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import store from "./store";
import { extendedApi } from "./store/slices/configuration";
import palette from "./theme/palette";
import router from "./routes";
import MainLoadingScreen from "./components/MainLoadingScreen";

store.dispatch(extendedApi.endpoints.getConfiguration.initiate(undefined));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Ejemplo de Vulnerabilidad Critica
// new RegExp("([");

// Ejemplo de Vulnerabilidad Alta

// const major_vul = [0,1,2];
// const result = major_vul.length >= 0;

// Ejemplo de Vulnerabilidad Media

let minor_vul = true;

if(!!minor_vul){
  minor_vul = false;
}

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={createTheme({ palette })}>
        <RouterProvider
          router={router}
          fallbackElement={<MainLoadingScreen />}
        />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
);
