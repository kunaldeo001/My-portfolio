
"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { SectionWrapper, SectionHeading, SectionDescription } from "./section";
import { contactData, portfolioData } from "@/lib/portfolio-data";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Mail } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const subject = encodeURIComponent(`Contact Form Submission from ${values.name}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`
    );
    const mailtoLink = `mailto:${portfolioData.email}?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;

    toast({
      title: "Opening Email Client",
      description: "Please complete sending the message in your email application.",
    });
    
    // We don't reset the form, in case the mailto link fails, user can copy the message.
  }

  return (
    <SectionWrapper id="contact" className="bg-card/80 backdrop-blur-sm">
      <div className="text-center">
        <SectionHeading>{contactData.title}</SectionHeading>
        <SectionDescription className="mt-4">{contactData.description}</SectionDescription>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full bg-transparent">
            <CardHeader>
                <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
                <p>
                    Fill up the form and I will get back to you within 24 hours. Or get in touch using the details below.
                </p>
                <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href={`mailto:${portfolioData.email}`} className="hover:text-primary">{portfolioData.email}</a>
                </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{contactData.form.name}</FormLabel>
                    <FormControl>
                      <Input placeholder="Amit Kumar" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{contactData.form.email}</FormLabel>
                    <FormControl>
                      <Input placeholder="amit.kumar@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{contactData.form.message}</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message here..." className="min-h-[120px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full">
                {contactData.form.submit}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
