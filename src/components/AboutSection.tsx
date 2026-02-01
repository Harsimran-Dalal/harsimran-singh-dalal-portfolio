import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary mb-2">01. About</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">About Me</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm an adaptable Electronics and Computer Engineering student with hands-on 
              experience in <span className="text-foreground font-medium">AI/ML, embedded systems, 
              and real-time data processing</span>. 
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently, I'm focused on <span className="text-foreground font-medium">Explainable AI 
              (XAI)</span> and its applications in sustainable agriculture.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond academics, I actively contribute to <span className="text-foreground font-medium">
              open-source projects</span> and participate in hackathons. I'm passionate about 
              interdisciplinary innovation that creates real-world impact.
            </p>

            {/* Interest Tags */}
            
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-card p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">B.E. Electronics & Computer Engineering</h4>
                  <p className="text-muted-foreground">Thapar Institute of Engineering and Technology</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} className="text-primary" />
                  <span>Patiala, Punjab</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} className="text-primary" />
                  <span>2023 – 2027</span>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">CGPA</span>
                  <div className="text-right">
                    <span className="text-2xl font-bold gradient-text">8.32</span>
                    <span className="text-sm text-muted-foreground ml-2">(3.33/4.0)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border space-y-2">
                <p className="text-sm font-medium">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {["Data Structures", "AI/ML", "Computer & Communication Networks", "DBMS", "OS"].map((course) => (
                    <span key={course} className="text-xs px-2 py-1 bg-secondary rounded text-secondary-foreground">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
