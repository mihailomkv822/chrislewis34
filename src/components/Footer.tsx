import { Github, Linkedin, FileUser } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo/Name */}
            <div className="text-center md:text-left">
              <div className="text-xl font-bold text-gradient mb-1">AI Dev</div>
              <p className="text-sm text-muted-foreground">
                Building the future with AI
              </p>
            </div>
            
            {/* Social links */}
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/harrykein101", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/keanna-holley-54b965131", label: "LinkedIn" },
                { icon: FileUser, href: "https://jumpshare.com/share/eDyA2JSyldvr53iXou6h", label: "Resume" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
