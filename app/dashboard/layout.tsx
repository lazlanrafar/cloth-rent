import { AppSidebar } from "@/components/app/sidebar";
import { SidebarLayout } from "@/components/atoms/sidebar";
import { getUser } from "@/lib/kinde";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { cookies } = await import("next/headers");
  const user = await getUser();

  return (
    <SidebarLayout
      defaultOpen={cookies().get("sidebar:state")?.value === "true"}
    >
      <AppSidebar user={user} />
      <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out">
        {children}
        {/* <SidebarTrigger /> */}
      </main>
    </SidebarLayout>
  );
}
