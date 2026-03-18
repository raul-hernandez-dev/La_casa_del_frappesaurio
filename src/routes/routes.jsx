import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";

import Home from "../features/home/views/Home";
import About from "../features/about/views/About";
import Contact from "../features/contact/views/Contact";
import Menu from "../features/menu/views/Menu";
import ScrollToTop from "../components/shared/ScrollToTop";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}