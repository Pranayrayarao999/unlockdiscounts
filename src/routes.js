// src/routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import DistanceLearning from "./pages/DistanceLearning";
import About from "./pages/About";
import WomensWear from "./pages/WomensWear";
import MensWear from "./pages/MensWear";
import KidsWear from "./pages/KidsWear";
import Electronics from "./pages/Electronics";
import Beauty from "./pages/Beauty";
import Banking from "./pages/Banking";
import SearchResults from "./pages/SearchResult";
import HomeAndLiving from "./pages/HomeAndLiving";
import BlogDetail from "./pages/BlogDetails";
import Certificate from "./pages/Certificate";
import Verification from "./pages/Verification";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/search-results" element={<SearchResults />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:id" element={<BlogDetail />} />
    <Route path="/distancelearning" element={<DistanceLearning />} />
    <Route path="/about" element={<About />} />
    <Route path="/fashion/womens-wear" element={<WomensWear />} />
    <Route path="/fashion/womens-wear/latest" element={<WomensWear />} />
    {/*created new route for displaying latest product */}
    <Route path="/fashion/mens-wear" element={<MensWear />} />
    <Route path="/fashion/mens-wear/latest" element={<MensWear />} />
    {/*created new route for displaying latest product */}
    <Route path="/fashion/kids-wear" element={<KidsWear />} />
    <Route path="/fashion/kids-wear/latest" element={<KidsWear />} />
    {/*created new route for displaying latest product */}
    <Route path="/electronics" element={<Electronics />} />
    <Route path="/electronics/latest" element={<Electronics />} />
    <Route path="/electronics/appliances" element={<Electronics />} />
    <Route path="/electronics/mobiles-accessories" element={<Electronics />} />
    {/*created new route for displaying latest product */}
    <Route path="/beauty" element={<Beauty />} />
    <Route path="/beauty/latest" element={<Beauty />} />{" "}
    {/*created new route for displaying latest product */}
    <Route path="/banking" element={<Banking />} />
    <Route path="/home-and-living" element={<HomeAndLiving />} />
    <Route path="/certification" element={<Certificate />} />
    <Route path="/verification" element={<Verification />} />
  </Routes>
);

export default AppRoutes;
