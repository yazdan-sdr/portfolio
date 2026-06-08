"use client";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
{
    /* shad comps*/
}
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
{
    /* shad comps*/
}
const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.email("Enter a valid email"),
    subject: z.string().min(1, "Subject must be included"),
    message: z.string().min(2, "Message must be at least 2 characters"),
});

type FormValue = z.infer<typeof contactSchema>;
export function ContactForm() {
    const form = useForm<FormValue>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            lastName: "",
            subject: "",
            email: "",
            message: "",
        },
    });
    async function onSubmit(data: FormValue) {
        await toast.promise(
            fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            }).then((res) => {
                if (!res.ok) throw new Error("Failed to send");
                return res;
            }),
            {
                position: "top-center",
                loading: "Sending...",
                success: "Message sent!",
                error: "Something went wrong",
            },
        );
        form.reset();
    }
    return (
        <Card className="w-full max-w-lg mx-auto">
            <CardHeader>
                <CardTitle className="font-bold">Contact:</CardTitle>
                <CardDescription>
                    I Would be Happy to Hear From You!
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="name"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={field.name}>
                                        Name:
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        aria-invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="lastName"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={field.name}>
                                        Last Name:
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        aria-invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={field.name}>
                                        Email
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        type="email"
                                        aria-invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="subject"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={field.name}>
                                        Subject
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        aria-invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="message"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={field.name}>
                                        Message
                                    </FieldLabel>
                                    <Textarea
                                        {...field}
                                        id={field.name}
                                        aria-invalid={fieldState.invalid}
                                        className="min-h-30"
                                    />

                                    {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
                <Button
                    type="button"
                    variant="destructive"
                    onClick={() => form.reset()}>
                    Reset
                </Button>
                <Button
                    type="submit"
                    form="contact-form"
                    disabled={form.formState.isSubmitting}
                    variant="outline">
                    {form.formState.isSubmitting
                        ? "Sending..."
                        : "Send message"}
                </Button>
            </CardFooter>
        </Card>
    );
}
