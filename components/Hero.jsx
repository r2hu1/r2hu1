import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Github, Instagram } from "lucide-react";
import Link from "next/link";


export default function Hero() {
    return (
        <section className="py-10 px-7 md:px-20 lg:px-32">
            <div className="grid gap-3 max-w-2xl">
                <h2 className="text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-4xl"><span className="font-serif">I</span> am <span className="font-serif">R</span>ahul <span className="font-serif">R</span>ajput, <span className="animate-text-gradient sm:inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400 italic">self thought full stack developer</span> from <span className="font-medium">India.</span></h2>
                <p className="text-base text-gray-400 -mt-1 mb-3">A full stack developer with a passion for creating modern and intuitive web applications.</p>
                <div className="flex gap-3">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>GetIn Touch</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Get in touch</DialogTitle>
                                <DialogDescription>
                                    <p>Fill in the form to get in touch with me.</p>
                                </DialogDescription>
                            </DialogHeader>
                            <form>
                                <div className="grid gap-4 py-2">
                                    <Label htmlFor="name" className="-mb-2">Name</Label>
                                    <Input id="name" placeholder="Name" type="text" required />
                                    <Label htmlFor="email" className="-mb-2">Email</Label>
                                    <Input id="email" placeholder="Email" type="email" required />
                                    <Label htmlFor="message" className="-mb-2">Message</Label>
                                    <Textarea id="message" placeholder="Message" className="min-h-[100px]" required />
                                    <Button type="submit" className="mt-1">Submit</Button>
                                    <div className="flex gap-3 items-center">
                                        <span className="text-sm text-gray-500">or</span>
                                        <div className="flex items-center gap-2">
                                            <Link href="https://instagram.com/r.rah_ul">
                                                <span className="cursor-pointer hover:bg-primary transition hover:text-primary-foreground bg-secondary/50 p-2 text-xs flex gap-1 items-center w-fit rounded-md px-3"><Instagram className="h-3 w-3" />Instagram</span>
                                            </Link>
                                            <Link href="mailto:hi@rahul.eu.org">
                                                <span className="cursor-pointer hover:bg-primary transition hover:text-primary-foreground bg-secondary/50 p-2 text-xs flex gap-1 items-center w-fit rounded-md px-3">hi@rahul.eu.org</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </DialogContent>
                    </Dialog>
                    <Button variant="outline">Resume</Button>
                </div>
            </div>
        </section>
    )
}