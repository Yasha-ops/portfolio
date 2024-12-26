import { Badge } from "@/components/ui/badge";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import PolygonContact from "@/assets/polygones/contact.svg";

const ContactForm = () => {
  return (
    <>
      <BlurFade
        delay={0.25 * 1.5}
        inView
        className="flex items-center mt-5 w-full"
      >
        <img src={PolygonContact} className="mx-auto w-2/3 md:w-1/3" />
        <div className="max-w-[680px] w-full flex flex-col gap-4 md:w-1/2 mx-auto mt-12 md:mt-0">
          <input
            className="p-4 w-full text-xs font-semibold leading-none rounded outline-none bg-primary/5"
            type="text"
            placeholder="Subject"
          />

          <input
            className="p-4 w-full text-xs font-semibold leading-none rounded outline-none bg-primary/5"
            type="text"
            placeholder="Name"
          />

          <input
            className="p-4 w-full text-xs font-semibold leading-none rounded outline-none bg-primary/5"
            type="email"
            placeholder="name@example.com"
          />

          <textarea
            className="p-4 w-full h-24 text-xs font-semibold leading-none rounded outline-none resize-none bg-primary/5"
            placeholder="Message..."
          ></textarea>

          <div className="flex justify-between items-center">
            <label className="flex justify-start items-center">
              <input className="mr-1" type="checkbox" name="terms" value="1" />
              <span className="text-sm">I agree to terms and conditions.</span>
            </label>

            <Button>Submit</Button>
          </div>
        </div>
      </BlurFade>
    </>
  );
};

const ContactHero = () => {
  return (
    <div className="container flex flex-col justify-center items-center mx-auto mt-[90px] md:mb-[150px] ">
      <BlurFade delay={0.25} inView>
        <div className="flex flex-col justify-center max-w-[500px] mb-12">
          <div className="flex justify-center mb-3">
            <Badge>Contact Me</Badge>
          </div>
          <h1 className="text-[36px] font-bold text-darkGray text-center mb-3">
            I will be <span className="text-primary">glad</span> to hear from
            you !
          </h1>
          <h2 className="text-center text-secondary">
            Would you like to introduce me to a project, or just say hello?
          </h2>
        </div>
      </BlurFade>
      <ContactForm />
    </div>
  );
};

export default ContactHero;
