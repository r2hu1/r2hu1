import { ModeToggle } from "@/components/ui/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function Header() {
    return (
        <header className="px-6 md:px-20 lg:px-32 py-5 flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
                <Avatar>
                    <AvatarImage src="https://github.com/r2hu1.png" />
                    <AvatarFallback><Loader2 className="w-4 h-4 animate-spin" /></AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <h1 className="text-lg font-medium">Rahul Rajput</h1>
                    <div className="flex items-center gap-1">
                        <div className="h-1.5 w-1.5 glowBg rounded-full bg-green-500"></div>
                        <p className="text-xs text-gray-400 -mt-0.5">Avilable for work!</p>
                    </div>
                </div>
            </div>
            <div>
                <ModeToggle />
            </div>
        </header>
    )
}