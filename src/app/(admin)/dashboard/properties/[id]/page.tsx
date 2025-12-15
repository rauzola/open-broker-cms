import { getProperty, getAuditLogs } from "@/lib/actions";
import { PropertyForm } from "@/components/properties/PropertyForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AuditTimeline } from "@/components/admin/AuditTimeline";

export default async function EditPropertyPage({ params }: { params: Promise<{ id: string }> }) {
    // Await params if needed in Next.js 15, but Next 14 standard:
    const { id } = await params;

    if (id === 'new') {
        return (
            <div className="p-8 space-y-6 max-w-4xl">
                <h1 className="text-2xl font-bold">New Property</h1>
                <PropertyForm propertyId="new" />
            </div>
        )
    }

    const property = await getProperty(id);
    const logs = await getAuditLogs(id);

    if (!property) return <div className="p-8">Property not found</div>;

    return (
        <div className="p-8 space-y-6 max-w-5xl">
            <h1 className="text-2xl font-bold">Edit Property</h1>
            <Tabs defaultValue="details">
                <TabsList>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="history">History</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="pt-4">
                    <PropertyForm initialData={property} propertyId={id} />
                </TabsContent>
                <TabsContent value="history" className="pt-4">
                    <AuditTimeline logs={logs} />
                </TabsContent>
            </Tabs>
        </div>
    )
}
