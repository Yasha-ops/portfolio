const Footer: React.FC<{}> = () => {
  return (
    <div className="py-10 w-full">
      <div className="container flex flex-col-reverse gap-3 justify-between text-center md:flex-row md:gap-0 md:text-left">
        <span className="w-full">
          © 2023 Yassine Damiri. All Rights Reserved.
        </span>

        <div className="flex gap-4 justify-center w-full text-center md:justify-end md:text-right">
          <span>About</span>
          <span>Privacy Policy</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
