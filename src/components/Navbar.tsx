import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { label: "Buy", path: "/" },
    { label: "Refinance", path: "/" },
    { label: "HELOC", path: "/" },
    { label: "Rates", path: "/mortgage-calculator" },
    { label: "About", path: "/about-us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">Better</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              Call
            </Button>
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">
                  {user.email}
                </span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button variant="ghost" size="sm" className="gap-2">
                  <User className="h-4 w-4" />
                  Sign In
                </Button>
              </Link>
            )}
              <Link to="/start">
                <Button size="sm" className="bg-primary hover:bg-primary-hover">
                  Get Started
                </Button>
              </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="px-2 py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="ghost" size="sm" className="justify-start gap-2">
                  <Phone className="h-4 w-4" />
                  Call
                </Button>
                {user ? (
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground px-2">
                      {user.email}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="justify-start"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" size="sm" className="justify-start gap-2">
                      <User className="h-4 w-4" />
                      Sign In
                    </Button>
                  </Link>
                )}
                <Link to="/start">
                  <Button size="sm" className="bg-primary hover:bg-primary-hover">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};