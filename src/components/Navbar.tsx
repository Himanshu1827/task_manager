import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, CheckSquare } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-primary to-secondary/80 backdrop-blur-lg border-b-2 border-primary/30 sticky top-0 z-50 shadow-strong rounded-b-2xl mx-2 mt-2">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform">
            <CheckSquare className="h-10 w-10 text-accent drop-shadow-lg" />
            <span className="text-2xl font-extrabold text-foreground tracking-tight font-sans">TaskFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-smooth px-3 py-2 rounded-xl font-medium text-base font-sans hover:bg-accent/20 hover:text-accent ${
                  isActive(link.path)
                    ? 'bg-accent/30 text-accent font-bold shadow-md'
                    : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="rounded-xl font-sans">Login</Button>
            <Button variant="hero" className="rounded-xl font-sans">Sign Up</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="glass"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="rounded-xl"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-r from-primary to-secondary/80 border-t-2 border-primary/30 shadow-strong rounded-b-2xl mt-2">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl font-sans text-base transition-smooth ${
                    isActive(link.path)
                      ? 'bg-accent/40 text-accent font-bold shadow-md'
                      : 'text-muted-foreground hover:bg-accent/20 hover:text-accent'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <Button variant="outline" className="rounded-xl font-sans justify-start">Login</Button>
                <Button variant="hero" className="rounded-xl font-sans justify-start">Sign Up</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;