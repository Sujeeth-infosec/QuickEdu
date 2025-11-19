import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  Play, 
  BookOpen, 
  Users, 
  Award, 
  TrendingUp,
  Star,
  ChevronRight,
  CheckCircle2,
  Globe,
  Clock,
  Sparkles
} from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import courses from "@/data/courses.json";
import testimonials from "@/data/testimonials.json";
import heroImage from "@/assets/hero-bg.jpg";
import courseWebDev from "@/assets/course-web-dev.jpg";
import courseDataScience from "@/assets/course-data-science.jpg";
import courseMarketing from "@/assets/course-marketing.jpg";
import courseDesign from "@/assets/course-design.jpg";

const courseImages: Record<string, string> = {
  "course-web-dev.jpg": courseWebDev,
  "course-data-science.jpg": courseDataScience,
  "course-marketing.jpg": courseMarketing,
  "course-design.jpg": courseDesign,
};

const Index = () => {
  const stats = [
    { icon: Users, label: "Active Students", value: "250,000+" },
    { icon: BookOpen, label: "Total Courses", value: "1,200+" },
    { icon: Award, label: "Expert Instructors", value: "150+" },
    { icon: Globe, label: "Countries", value: "195+" },
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Learn at Your Pace",
      description: "Access courses anytime, anywhere, and learn at your own schedule with lifetime access.",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience.",
    },
    {
      icon: Award,
      title: "Certification",
      description: "Earn recognized certificates to showcase your newly acquired skills.",
    },
    {
      icon: CheckCircle2,
      title: "Hands-on Projects",
      description: "Build real-world projects to solidify your learning and grow your portfolio.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/95"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 gradient-accent text-white px-4 py-2 text-sm">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                Join 250,000+ Students Worldwide
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Transform Your Future with
                <span className="text-gradient block mt-2">World-Class Education</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Master in-demand skills with expert-led courses. Build projects, earn certificates, and advance your career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gradient-primary shadow-glow text-lg px-8 py-6">
                  <Link to="/courses">
                    Explore Courses
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                  <Link to="/about">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-card"
                >
                  <stat.icon className="w-8 h-8 text-primary mb-3 mx-auto" />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Courses Slider */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 gradient-primary text-white px-4 py-2">
              Popular Courses
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Start Learning Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our most popular courses and start your learning journey
            </p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <Link to={`/courses/${course.slug}`}>
                  <Card className="group overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 shadow-card hover:shadow-elevated">
                    <div className="relative overflow-hidden">
                      <img
                        src={courseImages[course.image]}
                        alt={course.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-4 right-4 gradient-accent text-white">
                        {course.level}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{course.category}</Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {course.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                          <span className="font-semibold">{course.rating}</span>
                          <span>({course.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-primary">${course.price}</span>
                          <span className="text-sm text-muted-foreground line-through ml-2">
                            ${course.originalPrice}
                          </span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-smooth" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline" className="border-2">
              <Link to="/courses">
                View All Courses
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 gradient-primary text-white px-4 py-2">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Learn with Confidence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to succeed in your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center group hover:shadow-elevated transition-all duration-300 border-2 hover:border-primary h-full">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-smooth">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 gradient-accent text-white px-4 py-2">
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied learners who transformed their careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-elevated transition-all duration-300 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12 gradient-primary">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join millions of learners worldwide and transform your career today
            </p>
            <Button asChild size="lg" className="gradient-primary shadow-glow text-lg px-8 py-6">
              <Link to="/register">
                Get Started for Free
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
