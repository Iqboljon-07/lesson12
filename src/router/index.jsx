import Developers from "@/pages/developer/Developers";
import Home from "@/pages/home/Home";
import Layout from "@/pages/layout/Layout";
import Partners from "@/pages/partners/Partners";
import Products from "@/pages/products/Products";

import React from "react";
import { Route, Routes } from "react-router-dom";

function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/developer" element={<Developers />} />
          <Route path="/product" element={<Products />} />
          <Route path="/partner" element={<Partners />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Routers;
