import { getProperties } from "@/lib/actions";
import { PropertiesTable } from "@/components/properties/PropertiesTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function PropertiesPage() {
    const data = await getProperties();

    return (
        <div className="p-8 space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Properties</h1>
                <Link href="/dashboard/properties/new">
                    <Button><Plus className="mr-2 h-4 w-4" /> Add Property</Button>
                </Link>
            </div>
            <PropertiesTable data={data} />
        </div>
    );
}
