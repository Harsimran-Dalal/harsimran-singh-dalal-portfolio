import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Student Research Intern – Smart Agriculture",
    company: "TIET-UQ Centre of Excellence in Data Science & AI",
    location: "Thapar University",
    period: "June 2025 – Present",
    points: [
      "Contributing to \"A VR Educational Platform for Sustainable Agriculture using Explainable AI\"",
      "Developing an XAI-powered decision support system and immersive VR training modules for small-scale farmers",
      "Working on real-time sensor and image data processing, soil health monitoring, and 3D crop modeling using photogrammetry",
    ],
    isCurrent: true,
  },
  {
    title: "Summer ELC Intern",
    company: "Experiential Learning Centre",
    location: "Thapar University",
    period: "June 2025 – July 2025",
    points: [
      "Worked on \"XAI-Driven Rover with Robotic Arm for Smart Pest and Disease Detection\"",
      "Built an Explainable AI-enabled rover with a robotic arm for real-time pest and crop disease detection using computer vision",
      "Focused on sustainable agricultural practices by reducing pesticide usage through intelligent disease targeting",
    ],
    isCurrent: false,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary mb-2">02. Experience</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Where I've Worked</h3>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary glow-effect md:-translate-x-1/2 translate-y-2" />

              {/* Content */}
              <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className={`glass-card p-6 ${index % 2 === 0 ? "md:ml-auto" : ""} max-w-xl`}>
                  <div className="flex items-center gap-2 mb-2">
                    {exp.isCurrent && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                      <Briefcase className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 font-mono">
                    {exp.period}
                  </p>

                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1.5 shrink-0">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
