import Home from "@/pages/Home";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";

const App: React.FC<{}> = () => {
  return (
    <div className="flex-1">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
