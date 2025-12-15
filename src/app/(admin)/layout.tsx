import { Sidebar } from "@/components/layout/Sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-muted/20">
            <Sidebar />
            <div className="flex-1 md:pl-64 transition-all duration-300 ease-in-out">
                {children}
            </div>
        </div>
    );
}
