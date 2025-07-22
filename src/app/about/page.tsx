import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Award, Target, TrendingUp, Building } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the mission, instructors, and success stories at Lizon Education.',
};


const instructors = [
  {
    name: "Lizon Chowdhury",
    title: "Founder & Head Instructor",
    qualification: "MA in English, TESOL Certified",
    avatar: "LC",
    imageUrl: "https://placehold.co/200x200.png",
    aiHint: "male portrait"
  },
  {
    name: "Fatima Khan",
    title: "Senior IELTS Trainer",
    qualification: "Cambridge CELTA, 8+ Years Experience",
    avatar: "FK",
    imageUrl: "https://placehold.co/200x200.png",
    aiHint: "female portrait"
  },
  {
    name: "Arif Hassan",
    title: "Speaking & Listening Specialist",
    qualification: "IELTS 8.5 Band Scorer",
    avatar: "AH",
    imageUrl: "https://placehold.co/200x200.png",
    aiHint: "male portrait professional"
  }
];

const stats = [
  { icon: Award, value: "95%", label: "Student Success Rate" },
  { icon: TrendingUp, value: "5000+", label: "Students Trained" },
  { icon: Target, value: "7.5+", label: "Average Target Score Achieved" },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold font-headline">About Lizon Education</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We are dedicated to providing top-tier IELTS coaching that empowers students to achieve their academic and life goals.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 font-headline">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                Our mission is to demystify the IELTS exam and provide students with the skills, strategies, and confidence needed to excel. We believe in a personalized approach, understanding that each student's journey is unique. Through expert guidance and a supportive learning environment, we turn aspirations into achievements.
              </p>
              <p className="text-muted-foreground">
                Founded on the principles of excellence and integrity, Lizon Education has grown from a small classroom to a leading IELTS center in the region, committed to helping you unlock a world of opportunities.
              </p>
            </div>
            <div className="relative h-60 w-full rounded-lg shadow-xl overflow-hidden">
              <Image
                src="/you_fly.png"
                alt="Lizon Education classroom"
                layout="fill"
                objectFit="fill"
                data-ai-hint="modern classroom"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Success in Numbers</h2>
            <p className="mt-4 text-muted-foreground">
              We are proud of our students' achievements.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center p-6 shadow-md">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-4xl font-bold">{stat.value}</p>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet Our Instructors</h2>
            <p className="mt-4 text-muted-foreground">
              Learn from the best. Our experienced trainers are dedicated to your success.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {instructors.map((instructor) => (
              <Card key={instructor.name} className="text-center shadow-lg hover:shadow-primary/20 transition-shadow">
                <CardContent className="pt-6">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src={instructor.imageUrl} alt={instructor.name} data-ai-hint={instructor.aiHint} />
                    <AvatarFallback>{instructor.avatar}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">{instructor.name}</h3>
                  <p className="text-primary">{instructor.title}</p>
                  <p className="text-sm text-muted-foreground mt-2">{instructor.qualification}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 w-full rounded-lg shadow-xl overflow-hidden">
              <Image
                src="/free_consultation.jpg"
                alt="Lizon Education facility"
                layout="fill"
                objectFit="cover"
                data-ai-hint="modern library"
              />
            </div>
            <div>
              <Building className="h-10 w-10 text-primary mb-4" />
              <h2 className="text-3xl font-bold mb-4 font-headline">Our Facility</h2>
              <p className="text-muted-foreground mb-4">
                We provide a state-of-the-art learning environment equipped with the latest technology and resources. Our classrooms are designed for interactive sessions, and our library offers a quiet space for focused study.
              </p>
               <p className="text-muted-foreground">
                With a comfortable student lounge and access to a rich collection of IELTS materials, we ensure you have everything you need to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
