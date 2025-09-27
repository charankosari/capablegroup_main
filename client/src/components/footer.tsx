import { Link } from "wouter";
import { Code, Twitter, Linkedin, Github, Dribbble } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      return await apiRequest('POST', '/api/newsletter', { email });
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate(email);
    }
  };

  return (
    <>
      {/* Newsletter Section */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Get the latest insights on development trends, project updates, and industry news.
          </p>
          
          <form 
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <Input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              className="flex-1"
              data-testid="newsletter-email-input"
            />
            <Button 
              type="submit"
              disabled={newsletterMutation.isPending}
              data-testid="newsletter-submit"
            >
              {newsletterMutation.isPending ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-card border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Code className="text-primary-foreground h-4 w-4" />
                </div>
                <span className="font-heading font-bold text-xl">Capable Labs</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                We build exceptional digital products that drive results. 
                From concept to deployment, we deliver premium development solutions.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" data-testid="social-twitter">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" data-testid="social-linkedin">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" data-testid="social-github">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" data-testid="social-dribbble">
                  <Dribbble className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link href="/services">
                    <a className="hover:text-foreground transition-colors">
                      Website Development
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a className="hover:text-foreground transition-colors">
                      Mobile Apps
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a className="hover:text-foreground transition-colors">
                      AI Agents
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a className="hover:text-foreground transition-colors">
                      Automations
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link href="/about">
                    <a className="hover:text-foreground transition-colors">About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/work">
                    <a className="hover:text-foreground transition-colors">Portfolio</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a className="hover:text-foreground transition-colors">Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="hover:text-foreground transition-colors">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Capable Labs. All rights reserved.
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
