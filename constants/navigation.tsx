import { BookOpen, Home, Image, SquareTerminal } from "lucide-react";

export const navigation = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Products",
    url: "/dashboard/collections",
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        title: "Collections",
        url: "/dashboard/collections",
      },
    ],
  },
  {
    title: "Content",
    url: "/dashboard/content/files",
    icon: Image,
    items: [
      {
        title: "Files",
        url: "/dashboard/content/files",
      },
      {
        title: "Metaobjects",
        url: "/dashboard/content/metaobjects",
      },
    ],
  },
  {
    title: "Documentation",
    url: "#",
    icon: BookOpen,
  },
];
