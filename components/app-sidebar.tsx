"use client";

import {
  BookOpen,
  Frame,
  History,
  LifeBuoy,
  Map,
  PieChart,
  Rabbit,
  Send,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from "@/components/atoms/sidebar";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

const data = {
  navMain: [
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
    },
    {
      title: "Products",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Collections",
          url: "/dashboard/collections",
          icon: History,
          description: "View your recent prompts",
        },
      ],
    },
  ],

  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
  searchResults: [
    {
      title: "Routing Fundamentals",
      teaser:
        "The skeleton of every application is routing. This page will introduce you to the fundamental concepts of routing for the web and how to handle routing in Next.js.",
      url: "#",
    },
    {
      title: "Layouts and Templates",
      teaser:
        "The special files layout.js and template.js allow you to create UI that is shared between routes. This page will guide you through how and when to use these special files.",
      url: "#",
    },
    {
      title: "Data Fetching, Caching, and Revalidating",
      teaser:
        "Data fetching is a core part of any application. This page goes through how you can fetch, cache, and revalidate data in React and Next.js.",
      url: "#",
    },
    {
      title: "Server and Client Composition Patterns",
      teaser:
        "When building React applications, you will need to consider what parts of your application should be rendered on the server or the client. ",
      url: "#",
    },
    {
      title: "Server Actions and Mutations",
      teaser:
        "Server Actions are asynchronous functions that are executed on the server. They can be used in Server and Client Components to handle form submissions and data mutations in Next.js applications.",
      url: "#",
    },
  ],
};

export function AppSidebar({ user }: { user: KindeUser<any> }) {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-1.5 overflow-hidden px-2 py-1.5 text-left text-sm transition-all">
          <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-primary text-primary-foreground">
            <Rabbit className="h-3.5 w-3.5 shrink-0" />
          </div>
          <div className="line-clamp-1 flex-1 pr-2 font-medium">Cohinyan</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarItem>
          <SidebarLabel>Platform</SidebarLabel>
          <NavMain items={data.navMain} searchResults={data.searchResults} />
        </SidebarItem>
        <SidebarItem>
          <SidebarLabel>Projects</SidebarLabel>
          <NavProjects projects={data.projects} />
        </SidebarItem>
        <SidebarItem className="mt-auto">
          <SidebarLabel>Help</SidebarLabel>
          <NavSecondary items={data.navSecondary} />
        </SidebarItem>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
