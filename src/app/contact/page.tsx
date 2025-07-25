import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Lizon Education for inquiries and enrollment.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline">
          Get In Touch
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We're here to help! Whether you have a question about our courses or
          want to enroll, feel free to reach out.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you shortly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              action="https://formspree.io/f/your_form_id_placeholder"
              method="POST"
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full shadow-md">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground">
                    51/102 South Basabo, Kazi Office Road <br /> (Beside
                    'Morning Bell' school & Brac Office), Buddha Mandir,
                    Dhaka-1214
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a
                    href="tel:+8801611-611139"
                    className="text-muted-foreground hover:text-primary"
                  >
                    01611-611139
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href="mailto:lizonedu@gmail.com"
                    className="text-muted-foreground hover:text-primary"
                  >
                    lizonedu@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2376292757317!2d90.4314316!3d23.738904100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c17bcbf925fb%3A0x508998d6129cc820!2sLizOn%20Education!5e0!3m2!1sen!2sbd!4v1753185919411!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LizOn Education Location"
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
