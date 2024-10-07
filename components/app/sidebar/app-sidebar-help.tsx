"use client";

import Link from "next/link";
import { LifeBuoy, Send } from "lucide-react";

import { cn } from "@/lib/utils";
import { SidebarLabel } from "@/components/atoms/sidebar";

const items = [
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
];

export function AppSidebarHelp({ className }: {} & React.ComponentProps<"ul">) {
  if (!items?.length) {
    return null;
  }

  return (
    <>
      <SidebarLabel>Help</SidebarLabel>
      <ul className={cn("grid gap-0.5", className)}>
        {items.map((item) => (
          <li key={item.title}>
            <Link
              href={item.url}
              className="flex h-7 items-center gap-2.5 overflow-hidden rounded-md px-1.5 text-xs ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2"
            >
              <item.icon className="h-4 w-4 shrink-0 translate-x-0.5 text-muted-foreground" />
              <div className="line-clamp-1 grow overflow-hidden pr-6 font-medium text-muted-foreground">
                {item.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
