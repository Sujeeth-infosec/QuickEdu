import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Eye, 
  Heart, 
  Award,
  Users,
  Globe,
  TrendingUp,
  Sparkles
} from "lucide-react";

const About = () => {
  const stats = [
    { value: "250K+", label: "Active Students" },
    { value: "1,200+", label: "Courses" },
    { value: "150+", label: "Instructors" },
    { value: "195+", label: "Countries" },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest quality in every course we offer.",
    },
    {
      icon: Heart,
      title: "Accessibility",
      description: "Education should be accessible to everyone, everywhere.",
    },
    {
      icon: Globe,
      title: "Community",
      description: "Building a global community of passionate learners.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Continuously improving our platform and learning experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge className="mb-6 gradient-accent text-white px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              About EduMaster
            </Badge>
            <h1 className="text-5xl font-bold mb-4">
              Empowering Learners Worldwide
            </h1>
            <p className="text-xl text-muted-foreground">
              We're on a mission to make quality education accessible to everyone, everywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 border-2 hover:border-primary transition-smooth">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-glow">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To democratize education by providing high-quality, affordable online courses that empower individuals to acquire new skills, advance their careers, and achieve their goals. We believe that everyone deserves access to world-class education, regardless of their background or location.
              </p>
            </Card>

            <Card className="p-8 border-2 hover:border-primary transition-smooth">
              <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6 shadow-glow">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's most trusted online learning platform, where millions of learners connect with expert instructors to build the skills they need to thrive in an ever-changing world. We envision a future where learning knows no boundaries.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center h-full hover:shadow-elevated transition-all duration-300 border-2 hover:border-primary">
                  <div className="w-14 h-14 mx-auto mb-4 gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Story</h2>
            </div>
            <Card className="p-8">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020, EduMaster was born from a simple idea: that quality education should be accessible to everyone, everywhere. What started as a small team of passionate educators has grown into a global platform serving over 250,000 students across 195 countries.
                </p>
                <p>
                  Our platform brings together expert instructors from around the world who are passionate about sharing their knowledge and helping students succeed. Each course is carefully crafted to provide practical, hands-on learning experiences that prepare students for real-world challenges.
                </p>
                <p>
                  Today, we're proud to offer over 1,200 courses across multiple disciplines, from web development and data science to digital marketing and design. Our community continues to grow every day, and we remain committed to our mission of making education accessible, affordable, and effective.
                </p>
                <p>
                  As we look to the future, we're excited to continue innovating and expanding our course offerings, always keeping our students' success at the heart of everything we do.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
