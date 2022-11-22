import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AlertContextProvider } from "./context/alert-context";

import { LoaderContextProvider } from './context/loader-context';
import { AuthContextProvider } from "./context/auth-context";
import AllRoutes from "./components/navbar/AllRoutes";


function App() {
  return (
    <AuthContextProvider>
      <LoaderContextProvider>
        <AlertContextProvider>
          <BrowserRouter>
            <AllRoutes />
          </BrowserRouter>
        </AlertContextProvider>
      </LoaderContextProvider>
    </AuthContextProvider>
  );
}

export default App;
