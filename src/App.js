// import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./normalize-2.css";

import Articulos from "./components/Articulos/Articulos";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ArticulosPage from "./components/ArticuloPage/ArticulosPage";
import Login from "./components/Login/Login";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Register from "./components/Register/Register";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactoPage from "./components/ContactoPage/ContactoPage";




function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Articulos />} />
            <Route path="/articulos/:id" element={<ArticulosPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<ContactoPage />} />

              
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ScrollToTop>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
