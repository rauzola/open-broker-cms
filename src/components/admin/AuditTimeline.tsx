import { AuditLog } from "@/lib/types";

export function AuditTimeline({ logs }: { logs: AuditLog[] }) {
    if (!logs || logs.length === 0) return <div className="text-muted-foreground p-4">No history available for this property.</div>;

    return (
        <div className="space-y-4">
            {logs.map(log => (
                <div key={log.id} className="flex gap-4 p-4 border rounded-lg bg-card text-card-foreground shadow-sm">
                    <div className="flex-none pt-1">
                        <div className="h-2 w-2 rounded-full bg-primary ring-2 ring-primary/20" />
                    </div>
                    <div className="flex-1 space-y-1">
                        <div className="flex justify-between items-center">
                            <p className="text-sm font-medium"><span className="uppercase text-xs font-bold text-primary mr-2">{log.action}</span> by user {log.actorId}</p>
                            <p className="text-xs text-muted-foreground">{new Date(log.timestamp).toLocaleString()}</p>
                        </div>
                        <div className="text-sm text-muted-foreground bg-muted/50 p-2 rounded">
                            {log.changes.map((c, i) => (
                                <div key={i} className="font-mono text-xs mt-1 break-all">
                                    <span className="font-semibold text-foreground">{c.field}</span>: <span className="text-red-500 line-through opacity-70">{c.old !== undefined && c.old !== null ? String(c.old).slice(0, 50) : 'null'}</span> {' -> '} <span className="font-bold text-green-600">{c.new !== undefined && c.new !== null ? String(c.new).slice(0, 50) : 'null'}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
