
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AdminSidebar } from "./_components/admin-sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
        <Sidebar>
            <AdminSidebar />
        </Sidebar>
        <SidebarInset>
            <main className="p-4 sm:p-6 lg:p-8">
                <div className="sm:hidden">
                    <SidebarTrigger />
                </div>
                {children}
            </main>
        </SidebarInset>
    </SidebarProvider>
  );
}
