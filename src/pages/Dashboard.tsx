import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Clock, 
  Award, 
  TrendingUp,
  Play,
  CheckCircle2
} from "lucide-react";
import { getCurrentUser } from "@/lib/auth";
import { getUserPurchases } from "@/lib/paymentGateway";
import courses from "@/data/courses.json";
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

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(getCurrentUser());
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      navigate("/login");
      return;
    }
    setUser(currentUser);

    // Get user purchases
    const purchases = getUserPurchases(currentUser.id);
    const purchased = purchases.map((p: any) => {
      const course = courses.find(c => c.id === p.courseId);
      return {
        ...course,
        purchaseDate: p.purchaseDate,
        progress: Math.floor(Math.random() * 100), // Mock progress
      };
    });
    setEnrolledCourses(purchased);
  }, [navigate]);

  if (!user) return null;

  const stats = [
    { icon: BookOpen, label: "Enrolled Courses", value: enrolledCourses.length },
    { icon: Clock, label: "Hours Learned", value: enrolledCourses.length * 12 },
    { icon: CheckCircle2, label: "Completed", value: Math.floor(enrolledCourses.length * 0.3) },
    { icon: Award, label: "Certificates", value: Math.floor(enrolledCourses.length * 0.3) },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold mb-2">Welcome back, {user.name}! 👋</h1>
            <p className="text-xl text-muted-foreground">Continue your learning journey</p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-elevated transition-smooth">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                      <stat.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Enrolled Courses */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">My Courses</h2>
              <Button asChild variant="outline">
                <Link to="/courses">Browse More Courses</Link>
              </Button>
            </div>

            {enrolledCourses.length === 0 ? (
              <Card className="p-12 text-center">
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-2xl font-bold mb-2">No courses yet</h3>
                <p className="text-muted-foreground mb-6">
                  Start learning by enrolling in a course
                </p>
                <Button asChild className="gradient-primary shadow-glow">
                  <Link to="/courses">Explore Courses</Link>
                </Button>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolledCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-elevated transition-all duration-300 border-2 hover:border-primary">
                      <div className="relative">
                        <img
                          src={courseImages[course.image]}
                          alt={course.title}
                          className="w-full h-40 object-cover"
                        />
                        <Badge className="absolute top-3 right-3 bg-card text-foreground">
                          {course.progress}% Complete
                        </Badge>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold mb-2 line-clamp-2">{course.title}</h3>
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-semibold">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        <Button className="w-full gradient-primary">
                          <Play className="w-4 h-4 mr-2" />
                          Continue Learning
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Learning Path */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Recommended for You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courses.slice(0, 3).map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/courses/${course.slug}`}>
                    <Card className="overflow-hidden hover:shadow-elevated transition-all duration-300 border-2 hover:border-primary group">
                      <img
                        src={courseImages[course.image]}
                        alt={course.title}
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="p-5">
                        <Badge className="mb-2" variant="secondary">{course.category}</Badge>
                        <h3 className="font-bold mb-2 group-hover:text-primary transition-smooth line-clamp-2">
                          {course.title}
                        </h3>
                        <div className="text-2xl font-bold text-primary">{`₹${course.price.toLocaleString('en-IN')}`}</div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
