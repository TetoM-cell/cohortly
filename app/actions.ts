"use server";

import { z } from "zod";
import { supabase } from "@/lib/supabase";

const formSchema = z.object({
    email: z.string().email("Please enter a valid email address."),
    name: z.string().optional(),
    type: z.string().optional(),
    why: z.string().optional(),
});

export async function joinWaitlist(values: z.infer<typeof formSchema>) {
    const parsed = formSchema.safeParse(values);

    if (!parsed.success) {
        return { error: "Invalid fields" };
    }

    const { email, name, type, why } = parsed.data;

    try {
        const { error } = await supabase
            .from("waitlist")
            .insert({
                email,
                name,
                program_type: type,
                pain_points: why,
            });

        if (error) {
            // Check for unique constraint violation on email
            if (error.code === '23505') {
                return { error: "You are already on the waitlist!" };
            }
            console.error("Supabase Error:", error);
            return { error: "Failed to join waitlist. Please try again." };
        }

        return { success: true };
    } catch (err) {
        console.error("Internal Error:", err);
        return { error: "Something went wrong. Please try again." };
    }
}
