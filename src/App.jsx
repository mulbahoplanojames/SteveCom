import { Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Service from "./Pages/Services/Service";
import Products from "./Pages/Products/Products";
import ContactUs from "./Pages/Contact_Us/ContactUs";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
