import { Link } from "react-router-dom";
import { BookOpen, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import QuickEduLogo from "@/assets/Quickedulogo-01.png";

export const Footer = () => {
  const footerLinks = {
    platform: [
      { label: "Courses", to: "/courses" },
      { label: "Instructors", to: "/instructors" },
      { label: "About Us", to: "/about" },
    ],
    support: [
      { label: "Terms of Service", to: "/terms" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Contact Us", to: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src={QuickEduLogo} 
                alt="QuickEdu Logo" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="text-2xl font-bold text-gradient">QuickEdu</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              At QuickEdu, where ambition meets achievement Hyderabad's emerging learning destination, shaping futures through quality training and career-focused guidance.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary transition-smooth flex items-center justify-center group"
                >
                  <social.icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-smooth" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Platform</h4>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Easy To Reach</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+919392328940" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  +91 9392328940
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@quickedu.org.in" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  info@quickedu.org.in
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  PLOT NO - 39/C, H. NO - 301, SR TOWERS, HMT HILLS, ADDAGUTTA, TIRUMALAGIRI, KUKATPALLY, Medchal - Malkajgiri, HYDERABAD, TELANGANA - 500072, INDIA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} QuickEdu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
