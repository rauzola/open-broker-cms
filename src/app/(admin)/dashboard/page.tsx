import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { getProperties } from "@/lib/actions";
import { DollarSign, Home, Activity, Users } from "lucide-react";

export default async function DashboardPage() {
    const properties = await getProperties();
    const totalValue = properties.reduce((acc, p) => acc + p.price, 0);
    const active = properties.filter(p => p.status === 'PUBLISHED').length;

    return (
        <div className="p-8 space-y-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">${(totalValue / 1000000).toFixed(1)}M</div>
                        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
                        <Home className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{active}</div>
                        <p className="text-xs text-muted-foreground">+2 since last hour</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Interactions</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+12,234</div>
                        <p className="text-xs text-muted-foreground">+19% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">573</div>
                        <p className="text-xs text-muted-foreground">+201 since last month</p>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <SalesChart />
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Sales</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            <div className="flex items-center">
                                <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full bg-slate-200 mr-4"></span>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">Luxury Penthouse</p>
                                    <p className="text-sm text-muted-foreground">Sold for $1.5M</p>
                                </div>
                                <div className="ml-auto font-medium">+$1,500,000</div>
                            </div>
                            <div className="flex items-center">
                                <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full bg-slate-200 mr-4"></span>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">Cozy Cottage</p>
                                    <p className="text-sm text-muted-foreground">Offer accepted</p>
                                </div>
                                <div className="ml-auto font-medium">Pending</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
