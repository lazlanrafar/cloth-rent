"use client";

import { Rabbit } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from "@/components/atoms/sidebar";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import AppSidebarSearch from "./app-sidebar-search";

import { AppSidebarHelp } from "./app-sidebar-help";
import { navigation } from "@/constants/navigation";
import { AppSidebarNavItem } from "./app-sidebar-nav-item";
import { AppSidebarUser } from "./app-sidebar-user";

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
          <AppSidebarSearch />
        </SidebarItem>
        {navigation.map((item, index) => (
          <SidebarItem key={index}>
            <AppSidebarNavItem item={item} />
          </SidebarItem>
        ))}
        <SidebarItem className="mt-auto">
          <AppSidebarHelp />
        </SidebarItem>
      </SidebarContent>
      <SidebarFooter>
        <AppSidebarUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
