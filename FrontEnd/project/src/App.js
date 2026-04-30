import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Registration";
import Dashboard from "./Auth/dashboard";
import Home from "./pages/Home";


function App() {
  const user = localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;