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
import socialMediaImage from "@/assets/social media.png";
import { ThreeBackground } from "@/components/ui/three-background";

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
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 relative">
      <ThreeBackground />
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
          <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/95 to-background/98"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 gradient-primary text-white px-4 py-2 text-sm">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                Join 250,000+ Students Worldwide
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
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
              className="mt-12 max-w-3xl mx-auto"
            >
              <div className="bg-white/95 backdrop-blur-lg border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="w-6 h-6 text-primary mb-2 mx-auto" />
                      <div className="text-2xl font-bold mb-1 text-gray-800">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scrolling Courses Ticker */}
      <section className="py-12 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-pink-600/85 to-purple-600/90"></div>
        </div>
        <div className="container mx-auto px-4 text-center mb-6 relative z-10">
          <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">🎯 These are the courses waiting for you!!! 🚀</h3>
        </div>
        <div className="relative z-10">
          <div className="flex animate-scroll whitespace-nowrap">
            {[
              "Microsoft Azure Fundamentals",
              "Amazon AWS Cloud Practitioner", 
              "Cisco Cybersecurity Essentials",
              "Data Analytics with AI",
              "Google Cloud Platform",
              "Python for Data Science",
              "Machine Learning Basics",
              "Digital Marketing Mastery",
              "React & Node.js Development",
              "Kubernetes Administration",
              "Ethical Hacking & Penetration Testing",
              "Blockchain Development",
              "UI/UX Design Principles",
              "DevOps with Docker",
              "Artificial Intelligence Fundamentals",
              "Project Management (PMP)",
              "Salesforce Administration",
              "Power BI Analytics",
              "Java Spring Boot",
              "iOS App Development",
              "Android Development with Kotlin",
              "Tableau Data Visualization",
              "MongoDB Database Design",
              "GraphQL API Development",
              "Flutter Cross-Platform",
              "Vue.js Frontend Framework",
              "Angular Enterprise Applications",
              "PostgreSQL Database Management",
              "Redis Caching Solutions",
              "Microservices Architecture",
              "Terraform Infrastructure",
              "Jenkins CI/CD Pipeline",
              "Elasticsearch & Kibana",
              "Apache Kafka Streaming",
              "TensorFlow Deep Learning",
              "PyTorch Neural Networks",
              "Computer Vision with OpenCV",
              "Natural Language Processing",
              "Robotic Process Automation",
              "Quantum Computing Basics",
              "Augmented Reality Development",
              "Virtual Reality Programming",
              "Game Development with Unity",
              "3D Modeling with Blender",
              "Adobe Creative Suite Mastery",
              "Video Editing with Premiere Pro",
              "Photoshop Advanced Techniques",
              "Illustrator Vector Graphics"
            ].map((course, index) => (
              <span key={index} className="inline-block text-white text-lg font-semibold mx-8 px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                {course}
              </span>
            ))}
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
                          <span className="text-2xl font-bold text-primary">{`₹${course.price.toLocaleString('en-IN')}`}</span>
                          <span className="text-sm text-muted-foreground line-through ml-2">
                            {`₹${course.originalPrice.toLocaleString('en-IN')}`}
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

      {/* Creative Portfolio Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <Badge className="mb-6 gradient-primary text-white px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                Student Showcase
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Creative Projects by Our Students
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                See the amazing work created by our students in design, digital art, and creative media courses. From concept to completion, witness the transformation of ideas into professional portfolios.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600">Portfolio Success</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <img
                  src={socialMediaImage}
                  alt="Creative student portfolio showcase"
                  className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Live Projects</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Creative Portfolio Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <Badge className="mb-6 gradient-primary text-white px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                Student Showcase
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Creative Projects by Our Students
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                See the amazing work created by our students in design, digital art, and creative media courses. From concept to completion, witness the transformation of ideas into professional portfolios.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600">Portfolio Success</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <img
                  src={socialMediaImage}
                  alt="Creative student portfolio showcase"
                  className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Live Projects</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
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
                <Card className="p-6 text-center group hover:shadow-elevated transition-all duration-300 border-2 hover:border-primary h-full bg-white">
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

          <div className="max-w-6xl mx-auto">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 }
              }}
              className="!pb-8"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/85 to-blue-900/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
              Ready to Start Learning?
            </h2>
            <p className="text-base text-gray-200 mb-5">
              Join millions of learners worldwide and transform your career today
            </p>
            <Button asChild className="gradient-primary shadow-glow px-6 py-3">
              <Link to="/register">
                Get Started for Free
                <ChevronRight className="w-4 h-4 ml-2" />
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
