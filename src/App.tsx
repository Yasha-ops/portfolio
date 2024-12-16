import Home from "@/pages/Home";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";

const App: React.FC<{}> = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default App;
