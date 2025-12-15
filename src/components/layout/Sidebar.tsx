"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Building2, Users, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const sidebarLinks = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Properties", href: "/dashboard/properties", icon: Building2 },
    { name: "Team", href: "/dashboard/team", icon: Users },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="hidden border-r bg-card md:flex h-screen w-64 flex-col fixed inset-y-0 z-50">
            <div className="p-6 border-b">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                    <Building2 className="h-6 w-6" />
                    <span>OpenBroker</span>
                </Link>
            </div>
            <div className="flex-1 overflow-auto py-6 px-3">
                <nav className="grid gap-1">
                    {sidebarLinks.map((link) => {
                        const isActive = pathname === link.href || (link.href !== '/dashboard' && pathname.startsWith(link.href));
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:text-primary",
                                    isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-muted"
                                )}
                            >
                                <link.icon className="h-4 w-4" />
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
            <div className="p-4 border-t">
                <div className="flex items-center gap-3 mb-4 px-2">
                    <div className="h-8 w-8 rounded-full bg-slate-200" /> {/* Avatar Mock */}
                    <div className="text-sm">
                        <p className="font-medium">Alice Admin</p>
                        <p className="text-xs text-muted-foreground">Super Admin</p>
                    </div>
                </div>
                <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                </Button>
            </div>
        </div>
    );
}
