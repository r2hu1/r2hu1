"use client";
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
import { Instagram, Loader2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { IoOpenOutline } from "react-icons/io5";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/query/useMediaQuery";
import { useState } from "react";

export default function Hero() {
    const isBreakpoint = useMediaQuery(768);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);

    const sendEmail = async (e) => {
        setIsSending(true);
        e.preventDefault();
        await fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message }),
        }).then((data) => data.json()).then((data) => {
            if (data.id) {
                toast("Your message has been sent!");
                setIsSending(false);
                setName("");
                setEmail("");
                setMessage("");
                return true;
            }
            toast(data.error);
            setIsSending(false);
            return false;
        });
    };

    return (
        <section className="py-10 mt-3 px-7 md:px-20 lg:px-32">
            <div className="grid gap-3 max-w-2xl lg:max-w-4xl">
                <h2 className="text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-4xl lg:text-5xl"><span className="font-serif">I</span> am <span className="font-serif">R</span>ahul <span className="font-serif">R</span>ajput, <span className="animate-text-gradient sm:inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">self thought full stack developer</span> from <span className="font-medium">India.</span></h2>
                <p className="text-base dark:text-gray-400 text-gray-600 -mt-1 mb-3">A full stack developer with a passion for creating modern and intuitive web applications.</p>
                <div className="flex gap-3">
                    {!isBreakpoint ? (
                        <>
                            <Drawer shouldScaleBackground>
                                <DrawerTrigger asChild>
                                    <Button variant="shine" className="btn">GetIn Touch</Button>
                                </DrawerTrigger>
                                <DrawerContent>
                                    <DrawerHeader>
                                        <DrawerTitle>GetIn Touch</DrawerTitle>
                                        <DrawerDescription>Fill in the form to get in touch with me.</DrawerDescription>
                                    </DrawerHeader>
                                    <DrawerFooter>
                                        <form method="post" onSubmit={sendEmail}>
                                            <div className="grid gap-4">
                                                <Label htmlFor="name" className="-mb-2">Name</Label>
                                                <Input autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Name" type="text" required />
                                                <Label htmlFor="email" className="-mb-2">Email</Label>
                                                <Input value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" id="email" placeholder="Email" type="email" required />
                                                <Label htmlFor="message" className="-mb-2">Message</Label>
                                                <Textarea value={message} onChange={(e) => setMessage(e.target.value)} autoComplete="off" id="message" placeholder="Message" className="min-h-[100px]" required />
                                                <Button type="submit" className="mt-1" variant="shine" disabled={isSending}>{isSending ? <Loader2 className="w-4 h-4 animate-spin" /> : "Send "}</Button>
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
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                            <Drawer>
                                <DrawerTrigger asChild>
                                    <Button variant="outline" className="flex items-center gap-1">Resume <IoOpenOutline className="w-4 h-4" /></Button>
                                </DrawerTrigger>
                                <DrawerContent>
                                    <DrawerFooter>
                                        <iframe src="/resume.pdf" className="h-[500px] rounded-md"></iframe>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                        </>
                    ) : (
                        <>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="shine" className="btn">GetIn Touch</Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Get in touch</DialogTitle>
                                        <DialogDescription>
                                            <p>Fill in the form to get in touch with me.</p>
                                        </DialogDescription>
                                    </DialogHeader>
                                    <form method="post" onSubmit={sendEmail}>
                                        <div className="grid gap-4 py-2">
                                            <Label htmlFor="name" className="-mb-2">Name</Label>
                                            <Input value={name} onChange={(e) => setName(e.target.value)} autoComplete="off" id="name" placeholder="Name" type="text" required />
                                            <Label htmlFor="email" className="-mb-2">Email</Label>
                                            <Input value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" id="email" placeholder="Email" type="email" required />
                                            <Label htmlFor="message" className="-mb-2">Message</Label>
                                            <Textarea value={message} onChange={(e) => setMessage(e.target.value)} autoComplete="off" id="message" placeholder="Message" className="min-h-[100px]" required />
                                            <Button type="submit" className="mt-1" variant="shine" disabled={isSending}>{isSending ? <Loader2 className="w-4 h-4 animate-spin" /> : "Send "}</Button>
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
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="flex items-center gap-1">Resume <IoOpenOutline className="w-4 h-4" /></Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <iframe src="/resume.pdf" className="h-[500px] mt-3 w-full rounded-md"></iframe>
                                </DialogContent>
                            </Dialog>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
