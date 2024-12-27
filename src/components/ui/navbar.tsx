import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import YashaIcon from "@/assets/corporate/yasha.svg";

("use client");

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "./drawer";
import { Link } from "react-router-dom";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "More projects",
    href: "/docs/primitives/tooltip",
    description: "Discover my other projects",
  },
];

export function MiddleMenuButtons() {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), "rounded-lg")}
          >
            <Link to="/services">Services</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), "rounded-lg")}
          >
            <Link to="/skills">Skills</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), "rounded-lg")}
          >
            <Link to="/experience">Experience</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="rounded-lg">
            <Link to="/projects">Projects</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white rounded-xl shadow-lg">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="hover:bg-gray-100"
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="rounded-lg">
            <Link to="/blog">Blog</Link>
          </NavigationMenuTrigger>

          <NavigationMenuContent className="bg-white rounded-xl shadow-lg">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <ListItem
                title={"Cybersecurity"}
                href={"/cyber"}
                className="hover:bg-gray-100"
              >
                Mes découvertes, astuces dans le domaine de la sécurité
                informatique
              </ListItem>

              <ListItem
                title={"Sofware Developpment"}
                href={"/dev"}
                className="hover:bg-gray-100"
              >
                Mes découvertes, astuces dans le domaine du developpment
                fullstack
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), "rounded-lg")}
          >
            <Link to="/contact">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block p-3 space-y-1 leading-none no-underline rounded-md transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar: React.FC<{}> = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);
  return (
    <nav className="container flex justify-between items-center py-3 mt-2">
      <Link to="/">
        <img src={YashaIcon} className="w-[40px] h-[40px]" />
      </Link>

      <Menu
        className="w-[40px] h-[40px] text-primary lg:hidden"
        onClick={() => setIsDrawerOpen(true)}
      />

      <MiddleMenuButtons />

      <div className="hidden gap-3 items-center text-sm lg:flex">
        <Link to="/contact">
          <Button variant={"outline"}>Cybersecurity</Button>
        </Link>

        <Link to="/contact">
          <Button variant={"default"}>Contact Me</Button>
        </Link>
      </div>

      <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <DrawerContent className="bg-white">
          <DrawerHeader>
            <DrawerTitle>Navigate</DrawerTitle>
            <DrawerDescription>
              Select the page you want to visit
            </DrawerDescription>
          </DrawerHeader>

          <div className="flex flex-col justify-center px-10 text-md mb-[50px]">
            <span>Cybersecurity</span>
            <span>Projects</span>
            <span>Blog</span>
            <span>Contact</span>
          </div>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default Navbar;
