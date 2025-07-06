import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    contactTime: "",
    contactMethod: "",
    robot: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setForm((prev) => ({ ...prev, contactMethod: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.robot) {
      alert("Please confirm you're not a robot.");
      return;
    }
    alert("Form submitted!");
  };

  return (
    <Card className="max-w-xl mx-auto mt-12 p-6 shadow-md border rounded-lg mb-20">
      <CardContent>
        <h2 className="text-2xl font-bold text-center text-emerald-900">Get In Touch</h2>
        <p className="text-center text-muted-foreground mt-2">
          Simply fill out the brief fields below and Dr. Serena Blake will be in touch with you soon,
          usually within one business day. This form is safe, private, and completely free.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
          <div>
            <Label className="p-2" htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label className="p-2" htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label className="p-2" htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(555) 234–5678"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label className="p-2" htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="How can I help you?"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label className="p-2" htmlFor="contactTime">Preferred Contact Time</Label>
            <Input
              id="contactTime"
              name="contactTime"
              placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
              value={form.contactTime}
              onChange={handleChange}
            />
            <p className="text-xs text-muted-foreground mt-1">
              Let us know when you&apos;re typically available for a call or consultation.
            </p>
          </div>

          <div>
            <Label className="p-2">Preferred Contact Method</Label>
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select preferred method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Phone">Phone</SelectItem>
                <SelectItem value="Email">Email</SelectItem>
                <SelectItem value="Text">Text</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2 border p-3 rounded-md">
            <Checkbox
              id="robot"
              checked={form.robot}
              onCheckedChange={(checked) =>
                setForm((prev) => ({ ...prev, robot: Boolean(checked) }))
              }
            />
            <Label className="p-2" htmlFor="robot">I&apos;m not a robot</Label>
            <Image
                width={25}
                height={48}
              src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
              alt="captcha"
              className="ml-auto h-5"
            />
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>

        <p className="text-sm text-muted-foreground text-center mt-4">
           By clicking submit you consent to receive texts and emails from Dr. Serena Blake
        </p>
      </CardContent>
    </Card>
  );
};

export default Contact;
