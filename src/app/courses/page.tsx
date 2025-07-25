import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Clock, BarChart, DollarSign, MoveRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Courses',
  description: 'Explore our comprehensive IELTS training programs designed for your success.',
};


const courseData = {
  academic: {
    title: "IELTS Academic",
    description: "Designed for those who want to study in higher education or seek professional registration in an English-speaking environment.",
    features: [
      { icon: CheckCircle, text: "In-depth modules for all 4 sections" },
      { icon: Clock, text: "40+ hours of live classes" },
      { icon: BarChart, text: "Regular mock tests & feedback" },
      { icon: DollarSign, text: "Affordable pricing plans" },
    ],
    image: {
      src: "https://placehold.co/500x350.png",
      alt: "Students in an academic setting",
      aiHint: "university students"
    }
  },
  general: {
    title: "IELTS General Training",
    description: "For those who are going to English-speaking countries for secondary education, work experience, or training programs.",
    features: [
      { icon: CheckCircle, text: "Focus on workplace & social situations" },
      { icon: Clock, text: "30+ hours of practical sessions" },
      { icon: BarChart, text: "Real-life scenario practice" },
      { icon: DollarSign, text: "Flexible batch timings" },
    ],
    image: {
      src: "https://placehold.co/500x350.png",
      alt: "Professionals in a meeting",
      aiHint: "business meeting"
    }
  },
  spoken: {
    title: "Spoken English",
    description: "Build fluency and confidence for effective communication in everyday, academic, and professional settings.",
    features: [
      { icon: CheckCircle, text: "Interactive group discussions" },
      { icon: Clock, text: "25+ hours of speaking practice" },
      { icon: BarChart, text: "Pronunciation & accent training" },
      { icon: DollarSign, text: "Beginner to advanced levels" },
    ],
    image: {
      src: "https://placehold.co/500x350.png",
      alt: "People having a conversation",
      aiHint: "people talking"
    }
  }
};

const CourseCard = ({ course }) => (
  <Card className="w-full shadow-lg border-primary/20 overflow-hidden">
    <div className="grid md:grid-cols-2">
      <div className="p-6 flex flex-col">
        <CardHeader className="p-0 mb-4">
          <CardTitle className="text-2xl font-headline">{course.title}</CardTitle>
          <CardDescription>{course.description}</CardDescription>
        </CardHeader>
        <CardContent className="p-0 flex-grow">
          <ul className="space-y-4">
            {course.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <feature.icon className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{feature.text}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <Button asChild size="lg" className="w-full mt-8 shadow-md">
          <Link href="/contact">
            Register Now <MoveRight className="ml-2" />
          </Link>
        </Button>
      </div>
      <div className="relative h-64 md:h-full w-full">
        <Image
          src={course.image.src}
          alt={course.image.alt}
          layout="fill"
          objectFit="cover"
          data-ai-hint={course.image.aiHint}
        />
      </div>
    </div>
  </Card>
);


export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline">Our Training Programs</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose the right path to your IELTS success. We provide tailored programs to fit your specific goals.
        </p>
      </div>

      <Tabs defaultValue="academic" className="w-full max-w-5xl mx-auto mt-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="academic">IELTS Academic</TabsTrigger>
          <TabsTrigger value="general">IELTS General</TabsTrigger>
          <TabsTrigger value="spoken">Spoken English</TabsTrigger>
        </TabsList>
        <TabsContent value="academic" className="mt-8">
          <CourseCard course={courseData.academic} />
        </TabsContent>
        <TabsContent value="general" className="mt-8">
          <CourseCard course={courseData.general} />
        </TabsContent>
        <TabsContent value="spoken" className="mt-8">
          <CourseCard course={courseData.spoken} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
