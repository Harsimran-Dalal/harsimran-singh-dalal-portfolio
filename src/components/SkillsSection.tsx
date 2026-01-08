import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Cloud, Cpu, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["C", "C++", "Python", "Go", "R", "SQL", "MATLAB", "HTML/CSS"],
  },
  {
    title: "AI / Machine Learning",
    icon: Brain,
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "SHAP", "LIME", "OpenCV", "Pandas", "NumPy"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Google Cloud (GCP)", "CI/CD", "Docker", "Kubernetes", "Jenkins", "Git/GitHub"],
  },
  {
    title: "Embedded & IoT",
    icon: Cpu,
    skills: ["ESP32", "Arduino", "Sensor Integration", "IoT Monitoring", "Keil uVision"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["VS Code", "Jupyter", "Google Colab", "Postman", "Tableau", "Unity", "Canva"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary mb-2">04. Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Technical Expertise</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <h4 className="font-semibold">{category.title}</h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
