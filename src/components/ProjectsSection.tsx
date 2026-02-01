import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Folder } from "lucide-react";
const projects = [
  {
    title: "Guardiant",
    description:
      "AI-powered legal assistance platform focused on contract analysis, risk identification, and document intelligence. Built to enhance legal decision-making using modern AI techniques.",
    tech: ["Python", "Generative AI", "NLP", "React"],
    github: "https://github.com/Harsimran-Dalal/Guardiant",
    featured: true,
  },
  {
    title: "Legal Document Demystifier",
    description:
      "AI-powered web app to simplify complex legal documents using Generative AI. Deployed a responsive, user-friendly solution with modern frontend technologies.",
    tech: ["Python", "GenAI", "React", "Vercel"],
    github: "https://github.com/Harsimran-Dalal/google-gen-hack1",
    featured: true,
  },

  {
    title: "CI/CD with Jenkins on Google Kubernetes Engine",
    description:
      "Complete CI/CD pipeline on Google Cloud using Jenkins, Docker, and Kubernetes. Automated continuous delivery with rolling updates on GKE.",
    tech: ["Go", "Jenkins", "Docker", "Kubernetes", "GCP"],
    github: "https://github.com/Harsimran-Dalal/Continuous-Delivery-jenkins-gke",
    featured: true,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary mb-2">03. Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Things I've Built</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="glass-card p-6 group hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Folder className="text-primary" size={24} />
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h4>

              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono rounded-full
                              bg-primary/10 text-primary
                              border border-primary/20
                              hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Harsimran-Dalal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            View more on GitHub
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
