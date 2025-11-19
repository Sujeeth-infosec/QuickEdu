import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Star,
  Users,
  Clock,
  BookOpen,
  PlayCircle,
  CheckCircle2,
  Download,
  Award,
  Smartphone,
  Infinity,
} from "lucide-react";
import courses from "@/data/courses.json";
import instructors from "@/data/instructors.json";
import courseWebDev from "@/assets/course-web-dev.jpg";
import courseDataScience from "@/assets/course-data-science.jpg";
import courseMarketing from "@/assets/course-marketing.jpg";
import courseDesign from "@/assets/course-design.jpg";
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";
import { isAuthenticated } from "@/lib/auth";
import { toast } from "sonner";

const courseImages: Record<string, string> = {
  "course-web-dev.jpg": courseWebDev,
  "course-data-science.jpg": courseDataScience,
  "course-marketing.jpg": courseMarketing,
  "course-design.jpg": courseDesign,
};

const instructorImages: Record<string, string> = {
  "instructor-1.jpg": instructor1,
  "instructor-2.jpg": instructor2,
};

const CourseDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <Button asChild>
            <Link to="/courses">Back to Courses</Link>
          </Button>
        </div>
      </div>
    );
  }

  const instructor = instructors.find((i) => i.id === course.instructorId);

  const handleEnroll = () => {
    if (!isAuthenticated()) {
      toast.error("Please login to enroll in this course");
      navigate("/login");
      return;
    }
    navigate("/checkout", { state: { course } });
  };

  const features = [
    { icon: Infinity, label: "Lifetime Access" },
    { icon: Smartphone, label: "Mobile Friendly" },
    { icon: Download, label: "Downloadable Resources" },
    { icon: Award, label: "Certificate of Completion" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="gradient-accent text-white">{course.level}</Badge>
                  <Badge variant="outline">{course.category}</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl text-muted-foreground mb-6">{course.description}</p>

                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    <span className="font-semibold">{course.rating}</span>
                    <span className="text-muted-foreground">
                      ({course.reviews.toLocaleString()} reviews)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span>{course.lectures} lectures</span>
                  </div>
                </div>

                {instructor && (
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={instructorImages[instructor.image]} alt={instructor.name} />
                      <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm text-muted-foreground">Instructor</div>
                      <Link to="/instructors" className="font-semibold hover:text-primary transition-smooth">
                        {instructor.name}
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Right Card - Sticky Enrollment */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="sticky top-24"
              >
                <Card className="overflow-hidden shadow-elevated border-2">
                  <div className="relative">
                    <img
                      src={courseImages[course.image]}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group cursor-pointer">
                      <PlayCircle className="w-16 h-16 text-white group-hover:scale-110 transition-smooth" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-6">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-4xl font-bold text-primary">${course.price}</span>
                        <span className="text-xl text-muted-foreground line-through">
                          ${course.originalPrice}
                        </span>
                      </div>
                      <Badge className="gradient-accent text-white">
                        {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                      </Badge>
                    </div>

                    <Button
                      onClick={handleEnroll}
                      className="w-full gradient-primary shadow-glow mb-4 text-lg py-6"
                      size="lg"
                    >
                      Enroll Now
                    </Button>

                    <div className="space-y-3 text-sm">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-muted-foreground">
                          <feature.icon className="w-5 h-5 text-primary" />
                          <span>{feature.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              {/* What You'll Learn */}
              <div>
                <h2 className="text-3xl font-bold mb-6">What You'll Learn</h2>
                <Card className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Course Curriculum */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Course Curriculum</h2>
                <Card className="p-6">
                  <div className="mb-4 text-muted-foreground">
                    {course.lectures} lectures • {course.duration} total length
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {course.curriculum.map((section, index) => (
                      <AccordionItem key={index} value={`section-${index}`}>
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center justify-between w-full pr-4">
                            <span className="font-semibold">{section.section}</span>
                            <span className="text-sm text-muted-foreground">
                              {section.lectures} lectures • {section.duration}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pl-4">
                            {[...Array(Math.min(5, section.lectures))].map((_, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm py-2">
                                <PlayCircle className="w-4 h-4 text-muted-foreground" />
                                <span>Lecture {i + 1}: Introduction to {section.section}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Card>
              </div>

              {/* Instructor Info */}
              {instructor && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">Your Instructor</h2>
                  <Card className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={instructorImages[instructor.image]} alt={instructor.name} />
                        <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1">{instructor.name}</h3>
                        <p className="text-muted-foreground mb-3">{instructor.title}</p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                            <span>{instructor.rating} Rating</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{instructor.students.toLocaleString()} Students</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{instructor.courses} Courses</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{instructor.bio}</p>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetails;
