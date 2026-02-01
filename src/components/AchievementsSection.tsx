import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Star, Medal, Users, ExternalLink } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Most Innovative Hack Award",
    subtitle: "HackSpire 1.0",
    description: "Won for Guardiant, a Web3 security protocol featuring real-time anomaly detection and automated wallet protection.",
  },
  {
    icon: Award,
    title: "Google Arcade Facilitator Champion",
    subtitle: "Cohort '2",
    description: "Ultimate Milestone achiever with 56 Skill Badges and 75 Arcade Points.",
  },
  {
    icon: Star,
    title: "Best Data Science Expert",
    subtitle: "TSS 2024",
    description: "Recognized for outstanding performance in 6-week ML & DL program.",
  },
  {
    icon: Medal,
    title: "GSSoC'24 Extended Contributor",
    subtitle: "6 Badges",
    description: "Successfully completed GSSoC'24 Extd. with impactful open-source contributions.",
  },
  {
    icon: Award,
    title: "Kaggle Contributor",
    subtitle: "4 Bronze Notebooks",
    description: "Certified contributor on Kaggle platform with published notebooks.",
  },
];

const communityInvolvement = [
  {
    role: "Overall Hackathon Coordinator",
    subtitle: "Innovation Challenge 2026 – SabkaAI: AI for Inclusion",
    organization: "Official Pre-Summit Event of the AI Impact Summit 2026",
    period: "",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7419079130102669312/",
    websiteLink: "https://innovation.thapar.edu/",
  },
  {
    role: "Member",
    organization: "OWASP TIET",
    period: "Oct 2024 – May 2025",
  },
  {
    role: "Member",
    organization: "ISTE Thapar Chapter",
    period: "Aug 2024 – May 2025",
  },
  {
    role: "GSSoC Contributor",
    organization: "GirlScript Summer of Code",
    period: "2024",
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary mb-2">05. Achievements</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Recognition & Awards</h3>
        </motion.div>

        {/* Achievements Grid - First 3 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {achievements.slice(0, 3).map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{achievement.title}</h4>
                    <p className="text-sm text-primary font-medium mb-2">{achievement.subtitle}</p>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements Grid - Last 2 centered */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
          {achievements.slice(3).map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{achievement.title}</h4>
                    <p className="text-sm text-primary font-medium mb-2">{achievement.subtitle}</p>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Community Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Users className="text-primary" size={24} />
            Open Source & Community
          </h3>

          {/* First row - 3 items */}
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {communityInvolvement.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.organization}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="glass-card p-4 text-center"
              >
                <p className="font-medium text-primary mb-1">{item.role}</p>
                {item.subtitle && (
                  <p className="text-xs text-primary/80 mb-1">{item.subtitle}</p>
                )}
                <p className="text-sm font-medium mb-1">{item.organization}</p>
                <p className="text-xs text-muted-foreground mb-2">{item.period}</p>
                {item.link && (
                  <div className="flex justify-center gap-2">
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                    >
                      LinkedIn <ExternalLink size={10} />
                    </a>
                    {item.websiteLink && (
                      <a 
                        href={item.websiteLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                      >
                        Website <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Second row - last item centered */}
          <div className="flex justify-center">
            {communityInvolvement.slice(3).map((item, index) => (
              <motion.div
                key={item.organization}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                className="glass-card p-4 text-center w-full max-w-xs"
              >
                <p className="font-medium text-primary mb-1">{item.role}</p>
                <p className="text-sm font-medium mb-1">{item.organization}</p>
                <p className="text-xs text-muted-foreground">{item.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
