import { StatisticsCounter } from "@/components/statistics-counter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Zap,
  Award,
  MapPin,
  Mail,
  Linkedin,
  Github,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "We focus on delivering measurable outcomes that drive real business growth and success.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Your success is our success. We work as an extension of your team to achieve your goals.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "We stay ahead of technology trends to deliver cutting-edge solutions that future-proof your business.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in code quality, design, and project delivery.",
    },
  ];

  const teamTestimonials = [
    {
      quote:
        "Leading a team of passionate developers to build solutions that make a real difference in our clients' businesses.",
      name: "Alex Johnson",
      designation: "Founder & Lead Developer",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },

    {
      quote:
        "Ensuring our infrastructure is rock-solid, secure, and scales seamlessly as our clients grow their businesses.",
      name: "Michael Torres",
      designation: "DevOps Engineer",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      quote:
        "Bridging the gap between business goals and technical implementation to deliver products that truly matter.",
      name: "Emily Rodriguez",
      designation: "Product Manager",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },

    {
      quote:
        "Leveraging AI and machine learning to create intelligent solutions that automate complex business processes.",
      name: "Lisa Thompson",
      designation: "AI/ML Engineer",
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-in">
                We're passionate about building the{" "}
                <span className="text-primary">future</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed animate-fade-in-delay-1">
                Founded by experienced developers and designers, Capable Labs
                brings together expertise in modern technologies with a deep
                understanding of business needs.
              </p>
              <p className="text-muted-foreground mb-8 animate-fade-in-delay-2">
                Our team has shipped products for startups and Fortune 500
                companies, always focusing on quality, performance, and user
                experience.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="hover-lift smooth-transition"
                  data-testid="about-hero-cta"
                >
                  Work With Us
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Team collaboration in modern office"
                className="rounded-2xl shadow-2xl w-full h-auto hover:scale-105 smooth-transition"
                data-testid="about-hero-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <StatisticsCounter />

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 animate-fade-in">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-delay-1">
              The principles that guide everything we do and shape how we work
              with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="h-full glass-card hover-lift smooth-transition"
                  data-testid={`about-value-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="text-primary h-6 w-6" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 animate-fade-in">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-delay-1">
              The talented individuals behind every successful project at
              Capable Labs.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatedTestimonials testimonials={teamTestimonials} />
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-bold text-2xl mb-6 animate-fade-in">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground animate-fade-in-delay-1">
                <p>
                  Capable Labs was founded in 2019 with a simple mission: to
                  help businesses leverage technology to solve real problems and
                  drive meaningful growth.
                </p>
                <p>
                  What started as a small team of passionate developers has
                  grown into a full-service digital agency, but we've never lost
                  sight of our core values: quality, innovation, and client
                  success.
                </p>
                <p>
                  Today, we work with companies of all sizes, from early-stage
                  startups to established enterprises, helping them build the
                  digital products that power their success.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl mb-6 animate-fade-in">
                Get In Touch
              </h2>
              <div className="space-y-4 animate-fade-in-delay-1">
                <div className="flex items-center">
                  <Mail className="text-primary h-5 w-5 mr-3" />
                  <span>hello@capablelabs.dev</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-primary h-5 w-5 mr-3" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              <div className="mt-8 animate-fade-in-delay-2">
                <h3 className="font-semibold mb-4">We're Hiring!</h3>
                <p className="text-muted-foreground mb-4">
                  Join our team of talented developers and designers. We're
                  always looking for passionate individuals who want to build
                  amazing products.
                </p>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="hover-lift smooth-transition"
                    data-testid="about-careers-cta"
                  >
                    View Open Positions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 animate-fade-in">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in-delay-1">
            Let's discuss your project and see how we can help bring your vision
            to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Link href="/contact">
              <Button
                size="lg"
                className="hover-lift smooth-transition"
                data-testid="about-cta-contact"
              >
                Start a Project
              </Button>
            </Link>
            <Link href="/work">
              <Button
                variant="outline"
                size="lg"
                className="hover-lift smooth-transition"
                data-testid="about-cta-work"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
