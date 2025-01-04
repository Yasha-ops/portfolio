import { Download } from "lucide-react";
import { Button } from "./button";

const PubCV: React.FC<{}> = () => {
  return (
    <div className="container flex justify-between items-center p-16 w-full bg-gradient-to-r to-[#04378b] from-primary my-20">
      <div className="flex flex-col text-white">
        <span className="text-[30px] font-bold">Discover my expertise</span>
        <span>Dive into my journey in full-stack development and DevOps.</span>
      </div>
      <Button>
        <Download />
        Téléchager
      </Button>
    </div>
  );
};

export default PubCV;
