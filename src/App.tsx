import Home from "@/pages/Home";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Skills from "./pages/Skills";
import Services from "./pages/Services";

const App: React.FC<{}> = () => {
  return (
    <div className="flex-1">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="skills" element={<Skills />} />
          <Route path="services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
