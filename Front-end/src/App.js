import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./components/admin-login/AdminLogin";
import NavbarLayout from "./components/navbar/NavbarLayout";
import PostJob from "./components/PostJob/PostJob";
import { AlertContextProvider } from "./context/alert-context";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Signup from './pages/Signup';
import { LoaderContextProvider } from './context/loader-context';

function App() {
  return (
    <LoaderContextProvider>
      <AlertContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/" element={<NavbarLayout />} >
              <Route path="/" element={<Home />} />
              <Route path='/employer/post-job' element={<PostJob />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AlertContextProvider>
    </LoaderContextProvider>
  );
}

export default App;
