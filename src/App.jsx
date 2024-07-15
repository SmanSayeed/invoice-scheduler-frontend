/* eslint-disable no-unused-vars */

// src/index.js or src/App.js
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layouts/Layout";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import GenerateInvoice from "./components/GenerateInvoice/GenerateInvoice";
import ClientDropdown from "./components/ClientDropdown/ClientDropdown";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<ClientDropdown/>} />
        <Route path="/generate-invoice" element={<GenerateInvoice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
