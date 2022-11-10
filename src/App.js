// import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./components/admin-login/AdminLogin";
import NavbarLayout from "./components/navbar/NavbarLayout";
import SignIn from "./components/sign-in/SignIn";
import Signup from './components/sign-up/Signup';
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/" element={<NavbarLayout />} >
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
