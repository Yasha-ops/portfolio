const Footer: React.FC<{}> = () => {
  return (
    <div className="py-10 w-full">
      <div className="container flex justify-between">
        <span>© 2023 Yassine Damiri. All Rights Reserved.</span>

        <div className="flex gap-4">
          <span>About</span>
          <span>Privacy Policy</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
