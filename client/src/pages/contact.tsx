import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
} from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a message and we'll respond within 24 hours",
      value: "hello@capablegroups.dev",
      action: "mailto:hello@capablegroups.dev",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team during business hours",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Meet us at our office in the heart of San Francisco",
      value: "San Francisco, CA",
      action: "",
    },
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity, but most projects are completed within 2-12 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you work with clients remotely?",
      answer:
        "Yes! We work with clients worldwide. Our team is experienced in remote collaboration and we use modern tools to ensure seamless communication.",
    },
    {
      question: "What's your payment structure?",
      answer:
        "We typically require a 50% deposit to begin work, with the remainder due upon completion. For larger projects, we can arrange milestone-based payments.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Absolutely! All projects include 30 days of free support. We also offer ongoing maintenance plans starting at $500/month for continued support and updates.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Let's Build Something <span className="text-primary">Amazing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to start your project? Get in touch and let's discuss how we
            can help you succeed. We respond to all inquiries within 24 hours.
          </p>
          <div className="flex justify-center">
            <MessageCircle className="h-12 w-12 text-primary animate-bounce-gentle" />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20" data-testid="contact-form-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Get Started Today
            </h2>
            <p className="text-xl text-muted-foreground">
              Tell us about your project and we'll get back to you with a
              detailed proposal.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Other Ways to Reach Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the method that works best for you. We're here to help!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center hover:scale-105 transition-transform duration-300"
                data-testid={`contact-method-${index}`}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <method.icon className="text-primary h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  {method.action ? (
                    <a
                      href={method.action}
                      className="text-primary font-semibold hover:underline"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-primary font-semibold">{method.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours & Availability */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
                We're Here When You Need Us
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our team is available to support you throughout your project and
                beyond. We believe in building lasting partnerships with our
                clients.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Clock className="text-primary h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM PST
                    </p>
                    <p className="text-muted-foreground">
                      Saturday: 10:00 AM - 2:00 PM PST
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageCircle className="text-primary h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Response Time</h3>
                    <p className="text-muted-foreground">
                      We respond to all inquiries within 24 hours
                    </p>
                    <p className="text-muted-foreground">
                      Urgent requests handled within 4 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="text-primary h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Schedule a Call</h3>
                    <p className="text-muted-foreground mb-2">
                      Prefer to talk? Schedule a free 30-minute consultation
                      call.
                    </p>
                    <Button variant="outline" data-testid="schedule-call-cta">
                      Book a Call
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
                alt="Modern office workspace"
                className="rounded-2xl shadow-2xl w-full h-auto"
                data-testid="contact-office-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about working with us.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} data-testid={`contact-faq-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see your question answered?
            </p>
            <Button variant="outline" data-testid="contact-more-questions">
              Ask Us Anything
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
