import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Users, BookOpen, GraduationCap } from "lucide-react";
import instructors from "@/data/instructors.json";
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";

const instructorImages: Record<string, string> = {
  "instructor-1.jpg": instructor1,
  "instructor-2.jpg": instructor2,
};

const Instructors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-5xl font-bold mb-4">Meet Our Expert Instructors</h1>
            <p className="text-xl text-muted-foreground">
              Learn from industry professionals with years of real-world experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden hover:shadow-elevated transition-all duration-300 border-2 hover:border-primary">
                  <div className="p-8">
                    <div className="flex flex-col items-center text-center mb-6">
                      <Avatar className="w-32 h-32 mb-4 border-4 border-primary shadow-glow">
                        <AvatarImage src={instructorImages[instructor.image]} alt={instructor.name} />
                        <AvatarFallback className="text-3xl gradient-primary text-primary-foreground">
                          {instructor.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-2xl font-bold mb-2">{instructor.name}</h3>
                      <p className="text-muted-foreground mb-4">{instructor.title}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                      <div>
                        <div className="flex items-center justify-center gap-1 text-sm mb-1">
                          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                          <span className="font-bold">{instructor.rating}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Rating</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center gap-1 text-sm mb-1">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="font-bold">{instructor.students.toLocaleString()}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Students</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center gap-1 text-sm mb-1">
                          <BookOpen className="w-4 h-4 text-primary" />
                          <span className="font-bold">{instructor.courses}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Courses</div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{instructor.bio}</p>

                    <div>
                      <div className="text-sm font-semibold mb-2">Expertise</div>
                      <div className="flex flex-wrap gap-2">
                        {instructor.expertise.map((skill, i) => (
                          <Badge key={i} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Instructors;
