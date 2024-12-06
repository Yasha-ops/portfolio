import Home from "@/pages/Home";
import Navbar from "./components/ui/navbar";

const App: React.FC<{}> = () => {
  return (
    <>
      <Navbar />

      <Home />
    </>
  );
};

export default App;
