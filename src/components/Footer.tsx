import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo/Name */}
            <div className="text-center md:text-left">
              <div className="text-xl font-bold text-gradient mb-1">Bobby Pettry</div>
              <p className="text-sm text-muted-foreground">
                Building the future with code
              </p>
            </div>
            
            {/* Social links */}
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/bobby-pettry-9b9ba03a5/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:bobbypettry99@proton.me", label: "Email" },
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
