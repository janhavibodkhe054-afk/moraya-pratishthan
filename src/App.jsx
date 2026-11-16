
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Common Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import StickyLanguageSwitcher from "./components/StickyLanguageSwitcher";

// Website Pages
import Home from "./pages/Home";
import About from "./pages/About";
import College from "./pages/College";
import Program from "./pages/Program";
// import CSR from "./pages/CSR";
// import UNExposure from "./pages/UNExposure";
// import Team from "./pages/Team";
import Success from "./pages/Success";
import Gallery from "./pages/Gallery";
// import Enquiry from "./pages/Enquiry";
import Contact from "./pages/Contact";

// Individual College Pages
// import LaxmanJagtap from "./pages/colleges/LaxmanJagtap";
// import KailasabhauChandgude from "./pages/colleges/KailasabhauChandgude";
// import ShriMorya from "./pages/colleges/ShriMorya";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* Global Navbar */}
      <Navbar />

      {/* Website Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/colleges" element={<College />} />
        <Route path="/programs" element={<Program />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route
          path="/success-stories"
          element={<Success />}
        />
        {/*
        
        

        
        
        <Route path="/csr" element={<CSR />} />
        <Route path="/un-exposure" element={<UNExposure />} />
        <Route path="/team" element={<Team />} />

        

        
        <Route path="/enquiry" element={<Enquiry />} />
        
        */}
      </Routes>

      {/* Global Footer */}
      <Footer />

      {/* Global Floating Language Switcher */}
      <StickyLanguageSwitcher />
    </BrowserRouter>
  );
}

export default App;
