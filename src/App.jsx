import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

import Layout from "./Layouts/Layout/Layout";
import Spinner from "./Components/Spinner/Spinner";
const Home = React.lazy(() => import("./Pages/Home/Home"));
const About = React.lazy(() => import("./Pages/About/About"));
const Service = React.lazy(() => import("./Pages/Services/Service"));
const Products = React.lazy(() => import("./Pages/Products/Products"));
const ContactUs = React.lazy(() => import("./Pages/Contact_Us/ContactUs"));

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="text-center w-screen h-screen grid place-items-center">
            <Spinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/product" element={<Products />} />
            <Route path="/contact" element={<ContactUs />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
