import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MoveRight, Star, BookOpenCheck } from 'lucide-react';
import StudyTipsGenerator from '@/components/StudyTipsGenerator';

const courses = [
  {
    title: 'IELTS Academic',
    description: 'Comprehensive preparation for higher education or professional registration.',
    badge: 'Popular',
  },
  {
    title: 'IELTS General',
    description: 'For those going to English-speaking countries for work or immigration.',
    badge: 'New',
  },
  {
    title: 'Spoken English',
    description: 'Improve your fluency and confidence in everyday English conversations.',
  },
];

const testimonials = [
  {
    name: 'Jannatul Ferdous',
    avatar: 'JF',
    text: "Lizon Education transformed my approach to IELTS. The personalized feedback was invaluable. I achieved my target score!",
    rating: 5,
  },
  {
    name: 'Rahim Ahmed',
    avatar: 'RA',
    text: "The instructors are fantastic and the resources are top-notch. Highly recommended for anyone serious about their IELTS score.",
    rating: 5,
  },
  {
    name: 'Sadia Islam',
    avatar: 'SI',
    text: "A great learning environment. The mock tests were particularly helpful in building my confidence for the exam day.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gray-900/50">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Students learning in a classroom"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 -z-10 opacity-30"
          data-ai-hint="students learning"
        />
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-headline">
              Master IELTS with Lizon Education
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-300">
              Your gateway to achieving your desired score and unlocking global opportunities.
            </p>
            <Button asChild size="lg" className="mt-8 shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/courses">
                Explore Courses <MoveRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="courses" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Courses</h2>
            <p className="mt-4 text-muted-foreground">
              We offer a range of courses tailored to your specific needs.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.title} className="flex flex-col shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{course.title}</CardTitle>
                    {course.badge && <Badge variant="secondary" className="bg-accent text-accent-foreground">{course.badge}</Badge>}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{course.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/courses">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Students Say</h2>
            <p className="mt-4 text-muted-foreground">
              Real stories from students who achieved their dreams with us.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col justify-between shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <div className="flex">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-accent-foreground fill-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground italic">"{testimonial.text}"</blockquote>
                </CardContent>
                <CardFooter />
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section id="ai-tips" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <StudyTipsGenerator />
        </div>
      </section>

      <section id="enroll" className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">Ready to Start Your Journey?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Join Lizon Education today and take the first step towards achieving your academic and professional goals.
          </p>
          <Button asChild size="lg" className="mt-8 shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact">
              Enroll Now <MoveRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
