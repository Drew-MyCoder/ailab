"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { addRegistration } from "@/lib/actions";

export function GetEarlyAccessBtn({ label = "Join Early Access" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const res = await addRegistration(formData);
    if (res?.successMessage) {
      toast.success("Successfully joined early access!");
      setFormData({ firstName: "", lastName: "", email: "" });
      setIsOpen(false);
    } else {
      toast.error("Submission failed. Please try again.");
    }
    setIsSubmitting(false);
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
              className="flex flex-col items-center justify-center gap-4 my-4 w-full"
            >
              <div className="space-y-1 w-full">
                <Label className="text-muted-foreground">First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="min-w-[100px] w-full my-4 dark:text-white"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-1 w-full">
                <Label className="text-muted-foreground">Last Name</Label>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="min-w-[100px] my-4"
                  required
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
              </div>
              <Button
                type="submit"
                className="w-full mt-4 bg-[#FF6984]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get Early Access"}
              </Button>
            </form>
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="mt-4"
              disabled={isSubmitting}
            >
              Close
            </Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
