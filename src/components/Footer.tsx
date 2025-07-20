import { Link } from 'react-router-dom';
import { CheckSquare, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-r from-secondary/60 to-primary/40 border-t-2 border-primary/30 rounded-t-2xl shadow-strong mt-8 mx-2">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <CheckSquare className="h-10 w-10 text-accent drop-shadow-lg" />
              <span className="text-2xl font-extrabold text-foreground tracking-tight font-sans">TaskFlow</span>
            </div>
            <p className="text-muted-foreground font-sans text-base">
              Organize your life, boost your productivity, and achieve your goals with our intuitive to-do app.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="glass"
                  size="icon"
                  asChild
                  className="hover:text-accent rounded-xl shadow-md"
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-6 w-6" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-foreground font-sans">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-accent font-sans transition-smooth px-2 py-1 rounded-lg hover:bg-accent/10"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-foreground font-sans">Contact Info</h3>
            <div className="space-y-2 text-muted-foreground font-sans text-base">
              <p>hello@taskflow.com</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Productivity St.<br />Efficiency City, EC 12345</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-foreground font-sans">Stay Updated</h3>
            <p className="text-muted-foreground font-sans text-base">
              Subscribe to our newsletter for productivity tips and updates.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border-2 border-primary rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-sans text-base shadow-md"
              />
              <Button variant="hero" className="w-full rounded-xl font-sans text-base py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-8 border-t-2 border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm font-sans">
              © 2024 TaskFlow. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-accent text-sm font-sans transition-smooth px-2 py-1 rounded-lg hover:bg-accent/10">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent text-sm font-sans transition-smooth px-2 py-1 rounded-lg hover:bg-accent/10">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;