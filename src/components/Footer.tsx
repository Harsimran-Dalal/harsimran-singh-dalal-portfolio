import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Designed & Built by{" "}
            <span className="text-foreground font-medium">Harsimran Singh Dalal</span>
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Harsimran-Dalal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/harsimran-singh-dalal-614a39286/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:harsimransinghdalal@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} • All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
