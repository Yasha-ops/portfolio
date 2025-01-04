import ProjectInitializationImg from "@/assets/corporate/project_init.svg";
import ProjectPlanningImg from "@/assets/corporate/project_planning.svg";
import ProjectOrganization from "@/assets/corporate/project_organization.svg";

export default () => {
  const data = [
    {
      img: ProjectInitializationImg,
      title: "Project Initialization",
      description:
        "Project initiation ensures that you lay a strong foundation for a new project in your company our team.",
    },
    {
      img: ProjectPlanningImg,
      title: "Project Planning",
      description:
        "Project initiation ensures that you lay a strong foundation for a new project in your company our team.",
    },
    {
      img: ProjectOrganization,
      title: "Project Organization",
      description:
        "Project initiation ensures that you lay a strong foundation for a new project in your company our team.",
    },
  ];

  return (
    <div className=" bg-[#f8fafc] py-20">
      <div className="container flex flex-col justify-center items-center w-full">
        <div className="flex gap-5 justify-between items-center w-full">
          <h1 className="text-[36px] font-bold text-darkGray text-left mb-3 ">
            Understanding your needs to bring them to{" "}
            <span className="text-primary">life</span>
          </h1>
          <h2 className="text-left md:w-1/2 text-secondary">
            Transform your business vision into reality with our skilled team.
            We specialize in Angular, Ionic, React, React Native, and Next.js,
            creating dynamic digital solutions tailored to your success.
          </h2>
        </div>

        <div className="flex gap-5 mt-5">
          {data.map((elt, idx) => {
            return (
              <div className="p-12 bg-white rounded shadow">
                <div className="flex justify-center items-center mx-auto w-12 h-12 font-bold text-blue-800 bg-blue-200 rounded-full font-heading">
                  {idx + 1}
                </div>
                <img src={elt.img} className="mx-auto my-4 h-36" />
                <h3 className="mb-2 text-xl font-bold font-heading">
                  {elt.title}
                </h3>
                <p className="text-sm leading-relaxed text-blueGray-400">
                  {elt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
