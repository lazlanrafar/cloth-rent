"use client";

import Link from "next/link";
import { ChevronRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/atoms/collapsible";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";

export function AppSidebarNavItem({
  className,
  item,
}: {
  item: {
    title: string;
    url: string;
    icon: LucideIcon;
    items?: {
      title: string;
      url: string;
    }[];
  };
} & React.ComponentProps<"ul">) {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useLayoutEffect(() => {
    if (item.items) {
      setOpen(item.items.some((subItem) => pathname.startsWith(subItem.url)));
    }
  }, [pathname, item.items, item.url]);

  return (
    <ul className={cn("grid gap-0.5", className)}>
      <Collapsible asChild open={open}>
        <li>
          <div className="relative flex items-center">
            <Link
              href={item?.url}
              className={cn(
                "min-w-8 flex h-8 flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-2"
              )}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              <div className="flex flex-1 overflow-hidden">
                <div className="line-clamp-1 pr-6">{item?.title}</div>
              </div>
            </Link>
            {item?.items && (
              <CollapsibleTrigger asChild onClick={() => setOpen(!open)}>
                <Button
                  variant="ghost"
                  className="absolute right-1 h-6 w-6 rounded-md p-0 ring-ring transition-all focus-visible:ring-2 data-[state=open]:rotate-90"
                >
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            )}
          </div>
          <CollapsibleContent className="px-4 py-0.5">
            <ul className="grid border-l px-2">
              {item.items?.map((subItem) => {
                const isSubActive = pathname.startsWith(subItem.url);

                return (
                  <li key={subItem.title}>
                    <Link
                      href={subItem.url}
                      className={cn(
                        "min-w-8 flex h-8 items-center gap-2 overflow-hidden rounded-md px-2 text-sm font-medium text-muted-foreground ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-2",
                        isSubActive ? "bg-accent text-accent-foreground" : ""
                      )}
                    >
                      <div className="line-clamp-1">{subItem.title}</div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </CollapsibleContent>
        </li>
      </Collapsible>
    </ul>
  );
}
