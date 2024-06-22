"use client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./about/page";
import HomePage from "./HomePage/page";
import Products from "./Products/page";
import Contacts from "./Contacts/page";
import Single from "./Single/[id]/page";
import Cart from "./Cart/page";
import ErrorPage from "./errorPage/page";
import Header from "@/components/Header/Header";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../../public/styles/global.scss";
import Footer from "@/components/Footer/Footer";
import { AppProvider } from "@/context/ProductContext";

export default function Home() {
  return (
    // <ThemeProvider theme={theme}>
    <AppProvider >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
      </AppProvider>
  );
}
