'use client';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { z } from "zod";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner";



export function GetEarlyAccessBtn({ label = "Early Access" }) {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: ''
    });


    const schema = z.object({
        firstName: z.string().min(3, { message: "Firstname must be at least 3 characters" }),
        lastName: z.string().min(3, { message: "Lastname must be at least 3 characters" }),
        email: z.string().email({ message: "Invalid email address" }),
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const validatedData = await schema.parse(formData);
            if (validatedData) {
                console.log(validatedData);
                toast.success("form subsmission successful")
            } else {
                toast.error('form validation error')
            }
            

        } catch(error) {
            console.error(error);
            if (error instanceof z.ZodError) {
                toast.error('validation error')
            } else {
                console.error('form submission error:', error);

                toast.error('An unexpected error occurred');
            }
        }
    };

    return (
        <>
            <Button variant="default" onClick={() => setIsOpen(true)}>
                {label}
            </Button>
            <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
                <AlertDialogTrigger asChild></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-2xl text-[#FF6984] text-center">
                        Join Our Early Access
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-center">
            Early access clients get exclusive pearls and benefits.  
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="flex flex-col items-center justify-center">
                    <form 
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center justify-center gap-4 my-4">
                        <div className="space-y-1">
                        <Label className="text-muted-foreground">Firstname</Label>
                        <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="min-w-[100px] my-4 dark:text-white"
                        required 
                        />
                        </div>
                        <div className="space-y-1">
                        <Label className="text-muted-foreground">Laststname</Label>
                        <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="min-w-[100px] my-4"
                        required 
                        />
                        </div>
                        <div className="space-y-1 w-full">
                            <Label className="text-muted-foreground">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="min-w-[100px] my-4"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full mt-4 bg-[#FF6984]">
                            Get Early Access
                        </Button>
                    </form>
                    <Button 
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                    className="mt-4">
                        Close
                    </Button>
                </div>
            </AlertDialogContent>
        </AlertDialog>
        </>
    );
}