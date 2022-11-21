import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./components/admin-login/AdminLogin";
import NavbarLayout from "./components/navbar/NavbarLayout";
import { AlertContextProvider } from "./context/alert-context";
import Home from "./pages/Home";
import PostJob from "./pages/PostJob";
import SignIn from "./pages/SignIn";
import Signup from './pages/Signup';
import { LoaderContextProvider } from './context/loader-context';
import { AuthContextProvider } from "./context/auth-context";
import AdminHome from "./pages/AdminHome";
import AdminRouteLayout from './components/navbar/AdminRouteLayout';

function App() {
  return (
    <AuthContextProvider>
      <LoaderContextProvider>
        <AlertContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/user/sign-up" element={<Signup />} />
              <Route path="/user/sign-in" element={<SignIn />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminRouteLayout />} >
                <Route path="/admin/home" element={<AdminHome />} />
              </Route>
              <Route path="/" element={<NavbarLayout />} >
                <Route path="/" element={<Home />} />
                <Route path='/employer/post-job' element={<PostJob />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AlertContextProvider>
      </LoaderContextProvider>
    </AuthContextProvider>
  );
}

export default App;
