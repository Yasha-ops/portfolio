import { Badge } from "@/components/ui/badge";

const ProjectCard: React.FC<{}> = () => {
  return (
    <div className="w-full bg-white shadow-lg rounded-[8px]  hover:shadow-lg hover:-translate-y-[5px] transition duration-500">
      <div className="h-[200px] bg-red-300 w-full rounded-t-[8px]">Video</div>

      <div className="flex flex-col p-2">
        <span>Project Title</span>
        <span>Project Duration</span>
        <span className="text-secondary">Description</span>
        <div className="flex">
          <Badge>NextJs</Badge>
          <Badge>ReactJS</Badge>
          <Badge>React Native</Badge>
          <Badge>Typescript</Badge>
          <Badge>Golang</Badge>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
