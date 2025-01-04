import {
  SectionHeader,
  SectionHeaderDescription,
  SectionHeaderTitle,
} from "@/components/ui/section-header";

const SolutionCard = () => {
  return (
    <div
      className="px-6 pt-8 pb-6 text-center bg-white rounded border border-gray-100 shadow transition duration-500 hover:shadow-lg hover-up-2 wow animate__animated animate__fadeIn"
      data-wow-delay=".3s"
    >
      <div className="mx-auto mb-4 text-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mx-auto w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          ></path>
        </svg>
      </div>
      <h3 className="mb-2 font-bold font-heading">Mobile App</h3>
      <p className="text-sm text-secondary">
        Experts in <b className="text-blue-500">Ionic</b>,
        <b className="text-blue-500">React Native</b>, and{" "}
        <b className="text-blue-500"> NativeScript</b>. Crafting mobile apps
        with precision and efficiency, delivering seamless experiences for
        diverse platforms.
      </p>
    </div>
  );
};

const ServicesSolutions = () => {
  return (
    <div className="container flex flex-col justify-center items-center py-20">
      <SectionHeader badge="solutions">
        <SectionHeaderTitle>
          Enhance <span className="text-primary">your business</span> with our
          professional solutions
        </SectionHeaderTitle>
        <SectionHeaderDescription>
          Business solution company sit our any how site used the our company
          any site us it-solve theme is very professional
        </SectionHeaderDescription>
      </SectionHeader>

      <div className="grid grid-cols-4 gap-6 mt-12 w-full">
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
      </div>
    </div>
  );
};

export default ServicesSolutions;
