import { AppWindow, GitGraph, SquareChevronRight } from "lucide-react";
import {
  NestJsIcon,
  GolangIcon,
  JavascriptIcon,
  TsNodeIcon,
  PythonIcon,
  CppIcon,
  JavaIcon,
  RustIcon,
  NextJsIcon,
  ReactIcon,
  HtmlIcon,
  CssIcon,
  AngularIcon,
  SvelteIcon,
  TypescriptIcon,
  DockerIcon,
  PodmanIcon,
  TerraformIcon,
  SplunkIcon,
  KubernetesIcon,
  GitlabIcon,
  JenkinsIcon,
  AnsibleIcon,
  JavascriptRIcon,
} from "@/assets/logos";

export const DATA_STACK = [
  {
    title: "Backend",
    description:
      "Simply upload your data to our secure platform. We support various file ",
    icon: SquareChevronRight,
    logos: [
      NestJsIcon,
      GolangIcon,
      JavascriptIcon,
      TsNodeIcon,
      PythonIcon,
      CppIcon,
      JavaIcon,
      RustIcon,
    ],
  },
  {
    title: "Frontend",
    description:
      "Simply upload your data to our secure platform. We support various file ",
    icon: AppWindow,
    logos: [
      NextJsIcon,
      ReactIcon,
      HtmlIcon,
      CssIcon,
      JavascriptRIcon,
      TypescriptIcon,
      AngularIcon,
      SvelteIcon,
    ],
  },
  {
    title: "DevOps",
    description:
      "Simply upload your data to our secure platform. We support various file ",
    icon: GitGraph,
    logos: [
      DockerIcon,
      AnsibleIcon,
      PodmanIcon,
      TerraformIcon,
      SplunkIcon,
      KubernetesIcon,
      GitlabIcon,
      JenkinsIcon,
    ],
  },
];
