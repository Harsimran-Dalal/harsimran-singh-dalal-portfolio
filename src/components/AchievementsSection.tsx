import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Star, Medal, Users, ExternalLink } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Most Innovative Hack Award",
    subtitle: "HackSpire 1.0",
    description:
      "Won for Guardiant, a Web3 security protocol featuring real-time anomaly detection and automated wallet protection.",
    links: [
      {
        label: "Devfolio Project",
        url: "https://devfolio.co/projects/guardiant-69ac",
      },
      {
        label: "LinkedIn Post",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7324314475547832320/",
      },
    ],
  },
  {
    icon: Award,
    title: "Google Arcade Facilitator Champion",
    subtitle: "Cohort '2",
    description:
      "Ultimate Milestone achiever with 56 Skill Badges and 75 Arcade Points.",
    links: [
      {
        label: "Credly Badges",
        url: "https://www.credly.com/users/harsimran-singh-dalal.16898a71/badges#credly",
      },
    ],
  },
  {
    icon: Star,
    title: "Best Data Science Expert",
    subtitle: "TSS 2024",
    description:
      "Recognized for good performance in 6-week ML & DL program.",
    links: [
      {
        label: "LinkedIn Post",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7220394375929851904/",
      },
      {
        label: "Program Website",
        url: "https://www.thaparsummerschool.com/",
      },
    ],
  },
  {
    icon: Medal,
    title: "GSSoC'24 Extended Contributor",
    subtitle: "6 Badges",
    description:
      "Successfully completed GSSoC'24 Extd. with impactful open-source contributions.",
    links: [
      {
        label: "LinkedIn Post",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7261825157004996608/",
      },
    ],
  },
  {
    icon: Award,
    title: "Kaggle Contributor",
    subtitle: "4 Bronze Notebooks",
    description:
      "Certified contributor on Kaggle platform with published notebooks.",
    links: [
      {
        label: "Kaggle Profile",
        url: "https://www.kaggle.com/harsimransinghdalal",
      },
    ],
  },
];

const communityInvolvement = [
  {
    role: "Overall Hackathon Coordinator",
    subtitle: "Innovation Challenge 2026 – SabkaAI: AI for Inclusion",
    organization:
      "Official Pre-Summit Event of the AI Impact Summit 2026",
    period: "",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7419079130102669312/",
    websiteLink: "https://innovation.thapar.edu/",
    featured: true,
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
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary mb-2">
            05. Achievements
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Recognition & Awards
          </h3>
        </motion.div>

        {/* Achievements Grid */}
{/* Row 1 – 3 cards */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 max-w-6xl mx-auto">
  {achievements.slice(0, 3).map((achievement, index) => {
    const Icon = achievement.icon;
    return (
      <motion.div
        key={achievement.title}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: 0.1 + index * 0.1,
        }}
        className="glass-card p-6 hover:border-primary/50 transition-all duration-300"
      >
        <div className="flex items-start gap-4 mb-3">
          <div className="p-3 rounded-lg bg-primary/10 shrink-0">
            <Icon className="text-primary" size={24} />
          </div>
          <div>
            <h4 className="font-semibold mb-1">{achievement.title}</h4>
            <p className="text-sm text-primary font-medium">
              {achievement.subtitle}
            </p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          {achievement.description}
        </p>

        <div className="flex flex-wrap gap-3 text-xs">
          {achievement.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              {link.label}
              <ExternalLink size={12} />
            </a>
          ))}
        </div>
      </motion.div>
    );
  })}
</div>

{/* Row 2 – 2 cards centered */}
<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
  {achievements.slice(3).map((achievement, index) => {
    const Icon = achievement.icon;
    return (
      <motion.div
        key={achievement.title}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: 0.4 + index * 0.1,
        }}
        className="glass-card p-6 hover:border-primary/50 transition-all duration-300"
      >
        <div className="flex items-start gap-4 mb-3">
          <div className="p-3 rounded-lg bg-primary/10 shrink-0">
            <Icon className="text-primary" size={24} />
          </div>
          <div>
            <h4 className="font-semibold mb-1">{achievement.title}</h4>
            <p className="text-sm text-primary font-medium">
              {achievement.subtitle}
            </p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          {achievement.description}
        </p>

        <div className="flex flex-wrap gap-3 text-xs">
          {achievement.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              {link.label}
              <ExternalLink size={12} />
            </a>
          ))}
        </div>
      </motion.div>
    );
  })}
</div>

        {/* Open Source & Community (unchanged from previous version) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Users className="text-primary" size={24} />
            Open Source & Community
          </h3>

          <div className="space-y-10">
            {communityInvolvement
              .filter((item) => item.featured)
              .map((item) => (
                <div
                  key={item.role}
                  className="glass-card p-8 border border-primary/30"
                >
                  <p className="text-sm font-mono text-primary mb-2">
                    Leadership & Impact
                  </p>
                  <h4 className="text-2xl font-bold mb-2">
                    {item.role}
                  </h4>
                  <p className="text-primary mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {item.organization}
                  </p>

                  <div className="flex gap-4 text-sm">
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        LinkedIn <ExternalLink size={14} />
                      </a>
                    )}
                    {item.websiteLink && (
                      <a
                        href={item.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        Website <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              ))}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityInvolvement
                .filter((item) => !item.featured)
                .map((item, index) => (
                  <motion.div
                    key={item.organization}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.8 + index * 0.1,
                    }}
                    className="glass-card p-6 hover:border-primary/40 transition"
                  >
                    <p className="text-xs font-mono text-primary mb-2">
                      {item.role}
                    </p>
                    <h4 className="font-semibold mb-1">
                      {item.organization}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.period}
                    </p>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
