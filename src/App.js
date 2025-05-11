import "./App.css";
import Body from "./components/body/Body.js";
import Header from "./components/header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Features from "./components/Features/Features.js";
import Pricing from "./components/Pricing/Pricing.js";
import Booking from "./components/Booking/Booking.js";

function App() {
  return (
    <>
      <Router>
        <Header />
       

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
         <Body />
      </Router>
    </>
  );
}

export default App;
