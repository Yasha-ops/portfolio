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
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function MiddleMenuButtons() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), "rounded-lg")}
          >
            Cybersecurity
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="rounded-lg">
            Projects
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
            Blog
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
            Contact
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
  return (
    <nav className="container flex justify-between py-3 mx-auto mt-2">
      <img src={YashaIcon} className="w-[40px] h-[40px]" />

      <MiddleMenuButtons />

      <div className="flex gap-3 items-center text-sm">
        <Button variant={"outline"}>Contact Me</Button>
        <Button variant={"default"}>Hire Me</Button>
      </div>
    </nav>
  );
};

export default Navbar;
