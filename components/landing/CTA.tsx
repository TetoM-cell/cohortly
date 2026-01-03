"use client";

import { useTransition } from "react";
import { toast } from "sonner";
import { joinWaitlist } from "@/app/actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";


const formSchema = z.object({
    email: z.string().email("Please enter a valid email address."),
    name: z.string().optional(),
    type: z.string().optional(),
    why: z.string().optional(),
});

export default function CTA() {
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            name: "",
            type: "",
            why: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        startTransition(async () => {
            const result = await joinWaitlist(values);
            if (result.error) {
                toast.error(result.error);
            } else {
                toast.success("Thanks for your submission. See you soon!");
                form.reset();
            }
        });
    }

    return (
        <section id="waitlist" className="py-24 bg-gray-50 dark:bg-gray-900/50">
            <div className="container px-4 mx-auto max-w-xl text-center">
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
                    Ready to leave spreadsheet hell behind?
                </h2>
                <p className="text-base text-muted-foreground mb-8">
                    Join the waitlist for <span className="text-[#007AFF] font-semibold">early access</span>, lifetime founder pricing, and a free trial when we launch.
                </p>

                <div className="bg-gradient-to-br from-white to-[#007AFF]/5 dark:from-gray-800 dark:to-gray-800/50 p-8 rounded-2xl shadow-xl text-left space-y-5 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#007AFF]/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email address <span className="text-red-500">*</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="you@program.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name <span className="text-muted-foreground font-normal">(optional)</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Jane Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>What type of program do you run?</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select program type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="accelerator">Accelerator</SelectItem>
                                                <SelectItem value="grant">Grant Program</SelectItem>
                                                <SelectItem value="university">University Program</SelectItem>
                                                <SelectItem value="fellowship">Fellowship</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="why"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Why are you excited? <span className="text-muted-foreground font-normal">(optional)</span></FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Tell us about your current pain points..."
                                                className="resize-none min-h-[100px] overflow-hidden"
                                                {...field}
                                                onInput={(e) => {
                                                    const target = e.target as HTMLTextAreaElement;
                                                    target.style.height = "auto";
                                                    target.style.height = `${target.scrollHeight}px`;
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" size="lg" className="w-full h-12 text-lg bg-[#007AFF] hover:bg-[#0062CC]" disabled={isPending}>
                                {isPending ? "Joining..." : "Get Early Access"}
                            </Button>
                        </form>
                    </Form>

                    <p className="text-xs text-center text-muted-foreground mt-4">
                        No spam. Only meaningful updates + one launch discount.
                    </p>
                </div>

                <p className="text-sm text-[#007AFF] dark:text-blue-400 font-medium mt-8 bg-[#007AFF]/10 dark:bg-[#007AFF]/20 py-2 px-4 rounded-full inline-block">
                    🚀 Launching Q1 2026. First 250 waitlisters get 30% off forever.
                </p>
            </div>
        </section>
    );
}
