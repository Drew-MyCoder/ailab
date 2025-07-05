"use server";

import { toast } from "sonner";
import { z } from "zod";


const googleScriptURL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT as string;

const subscriptionScriptURL = process.env.NEXT_PUBLIC_SUBSCRIPTION as string;

 const schema = z.object({
          email: z.string().email({ message: "Invalid email address" }),
      });

const schemas = z.object({
        firstName: z.string().min(3, { message: "Firstname must be at least 3 characters" }),
        lastName: z.string().min(3, { message: "Lastname must be at least 3 characters" }),
        email: z.string().email({ message: "Invalid email address" }),
    });


export const addRegistration = async (formData: FormData) => {
        
        const firstName = formData.get("firstName")?.toString() || "";
        const lastName = formData.get("lastName")?.toString() || "";
        const email = formData.get("email")?.toString() || "";

        const validation = schemas.safeParse({ firstName, lastName, email });

        if (!validation.success) {
            const errorMsg = validation.error.errors[0]?.message ?? "Invalid input";
            toast.error(errorMsg);
            return;
        }


    try {
        const res = await fetch(googleScriptURL, {
            
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email
            })
        })

        if (!res.ok) {
            throw new Error("Failed to add registration to google spreadsheet")
        }

        return {successMessage: `Success! You have successfully registered for our AILab!`}
    } catch {
        return {errorMessage: `Oops! There was a problem with your registration!`}
    }
}



export const addSubscription = async (subscriptionData: FormData) => {
        
        const email = subscriptionData.get("email")?.toString() || "";

        const validation = schema.safeParse({ email });

        if (!validation.success) {
            const errorMsg = validation.error.errors[0]?.message ?? "Invalid input";
            toast.error(errorMsg);
            return;
        }

    try {
        const res = await fetch(subscriptionScriptURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email
            })
        })

        if (!res.ok) {
            throw new Error("Failed to add subscription to google spreadsheet")
        }

        return {successMessage: `Success! You have successfully subscribed for our AILab!`}
    } catch {
        return {errorMessage: `Oops! There was a problem with your subscription!`}
    }
}

