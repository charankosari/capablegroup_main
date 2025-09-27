import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "./theme-provider";
import { Code, Menu, Moon, Sun } from "lucide-react";
import Logo from "../assets/logo.png";
export function Navbar() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Fees", href: "/fees" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-border backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" data-testid="logo-link">
            <div className="flex items-center space-x-2 hover-lift smooth-transition">
              
              <img src={Logo} alt="Capable Labs" className=" h-10" />
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <Link key={item.name} href={item.href}>
                <span 
                  className={`text-muted-foreground hover:text-foreground smooth-transition cursor-pointer relative group ${
                    location === item.href ? 'text-foreground font-medium' : ''
                  }`}
                  data-testid={`nav-link-${item.name.toLowerCase()}`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary smooth-transition group-hover:w-full"></span>
                </span>
              </Link>
            ))}
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="theme-toggle"
              className="hover-lift smooth-transition"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Link href="/contact">
              <Button data-testid="cta-get-quote" className="hover-lift smooth-transition">
                Get Quote
              </Button>
            </Link>
          </div>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" data-testid="mobile-menu-toggle">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <span 
                      className="text-muted-foreground hover:text-foreground transition-colors block py-2 cursor-pointer"
                      onClick={() => setIsOpen(false)}
                      data-testid={`mobile-nav-link-${item.name.toLowerCase()}`}
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
                <div className="pt-4 border-t border-border">
                  <Link href="/contact">
                    <Button className="w-full" onClick={() => setIsOpen(false)}>
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
