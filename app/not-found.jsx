import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function Page() {
    return (
        <div className="z-10 bg-background h-full w-full absolute top-0 left-0 right-0 flex items-center justify-center">
            <div className="grid gap-2 text-center max-w-xs px-6 place-items-center">
                <AlertTriangle className="h-5 w-5" />
                <p className="text-muted-foreground text-sm">The page you are trying to access does not exists.</p>
                <Button variant="outline" asChild><Link href="/">Back to Homepage</Link></Button>
            </div>
        </div>
    )
}