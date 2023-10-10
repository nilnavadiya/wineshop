import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import './Component/common/Footer/Login.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Error from "./Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Faqs from "./pages/Faqs";
import Contact from "./pages/Contact";
import Header from "./Component/common/Layout/Header";
import Footer from "./Component/common/Footer/Footer";



function App() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <>
      <Header handleAction={setShow}/>
      <Routes>
        <Route exact path="/" element={<Home action={show} handleAction={setShow}/>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/faq" element={<Faqs />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;