import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import AddEditBlog from "./pages/AddEditBlog";
import Details from "./pages/Details";
import NoteFound from "./pages/NoteFound";
import Contact from "./pages/Contact";

const Index = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create" element={<AddEditBlog />} />
        <Route path="/edit/:id" element={<AddEditBlog />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="*" element={<NoteFound />} />
      </Routes>
  );
};

export default Index;
