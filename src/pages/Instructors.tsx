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
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-purple-900/90 to-blue-900/95"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Meet Our Expert Instructors</h1>
            <p className="text-xl text-gray-200 drop-shadow-md">
              Learn from industry professionals with years of real-world experience
            </p>
            <div className="flex items-center justify-center gap-8 mt-8 text-white/80">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-sm">500+ Expert Instructors</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span className="text-sm">1000+ Courses Taught</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">4.8 Average Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto -mx-4 px-4 py-4">
              <div className="flex gap-4 snap-x snap-mandatory">
                {instructors.map((instructor, index) => (
                  <motion.div
                    key={instructor.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="snap-start flex-shrink-0"
                  >
                    <Card className="w-64 min-h-[220px] overflow-hidden hover:shadow-elevated transition-transform duration-200 transform hover:-translate-y-1 border">
                      <div className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <Avatar className="w-12 h-12 border">
                            {instructor.image && instructorImages[instructor.image] ? (
                              <AvatarImage src={instructorImages[instructor.image]} alt={instructor.name} />
                            ) : (
                              <AvatarFallback className="text-sm font-semibold">{instructor.avatar || instructor.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</AvatarFallback>
                            )}
                          </Avatar>
                          <div>
                            <div className="font-semibold">{instructor.name}</div>
                            <div className="text-xs text-muted-foreground">{instructor.title}</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm mb-3">
                          <div className="flex items-center gap-1 text-xs">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="font-medium">{instructor.rating}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">{instructor.students.toLocaleString()} students</div>
                        </div>

                        <div className="text-xs text-muted-foreground mb-2 truncate">{instructor.bio}</div>

                        <div className="flex flex-wrap gap-1 mt-2">
                          {instructor.expertise.slice(0,3).map((skill, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Instructors;
