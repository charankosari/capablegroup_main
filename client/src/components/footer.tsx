import { Link } from "wouter";
import {
  Code,
  Twitter,
  Linkedin,
  Github,
  Dribbble,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Logo from "../assets/logo.png";
export function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      // Simulate newsletter subscription for static site
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Newsletter Section */}
      <section className="py-12 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-xl md:text-2xl mb-3">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Get the latest insights on technology trends and industry news.
          </p>

          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
          >
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 text-sm"
              data-testid="newsletter-email-input"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              size="sm"
              data-testid="newsletter-submit"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-3">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info & Contact */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={Logo} alt="INFT Solutions" className="h-8" />
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Premier provider of Application services, IT staffing and
                emerging technology solutions.
              </p>

              {/* Compact Contact Info */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start">
                  <MapPin className="h-3 w-3 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span>
                      5th Floor, P & S Kickstart, Shanta Sriram Building PSR
                      Towers, Beside DLF Building, Gachibowli Hyderabad,
                      Telangana 500032
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-3 w-3 mr-2 flex-shrink-0" />
                  <a
                    href="mailto:info@capablegroups.com"
                    className="hover:text-foreground transition-colors"
                  >
                    Info@capablegroups.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-3 w-3 mr-2 flex-shrink-0" />
                  <a
                    href="tel:+16785617610"
                    className="hover:text-foreground transition-colors"
                  >
                    9493971983
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-3 text-sm">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/services">
                    <a className="hover:text-foreground transition-colors">
                      Business Transformation
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a className="hover:text-foreground transition-colors">
                      Digital Transformation
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a className="hover:text-foreground transition-colors">
                      AI Solutions
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a className="hover:text-foreground transition-colors">
                      IT Staffing
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company & Social */}
            <div>
              <h3 className="font-semibold mb-3 text-sm">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li>
                  <Link href="/about">
                    <a className="hover:text-foreground transition-colors">
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/careers">
                    <a className="hover:text-foreground transition-colors">
                      Careers
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="hover:text-foreground transition-colors">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>

              {/* Social Links */}
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" data-testid="social-facebook">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" data-testid="social-twitter">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  data-testid="social-linkedin"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/capable-groups/",
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2011 Capable Groups All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy">
                <a className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Privacy Policy
                </a>
              </Link>
              <Link href="/terms">
                <a className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Terms of Service
                </a>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
