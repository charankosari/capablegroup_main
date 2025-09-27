import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Mail, Eye, Database, Lock, Users } from "lucide-react";

export default function Privacy() {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, phone number, company information, and project details."
        },
        {
          subtitle: "Usage Information", 
          text: "We automatically collect information about how you use our website and services, including your IP address, browser type, device information, pages visited, and time spent on our site."
        },
        {
          subtitle: "Cookies and Tracking",
          text: "We use cookies and similar technologies to enhance your experience, analyze usage patterns, and improve our services. You can control cookie settings through your browser preferences."
        }
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide, maintain, and improve our services, process transactions, and communicate with you about your projects and account."
        },
        {
          subtitle: "Communication",
          text: "We may use your contact information to send you project updates, service announcements, and marketing communications. You can opt out of marketing emails at any time."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze usage data to understand how our services are used, identify areas for improvement, and develop new features and services."
        }
      ]
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with trusted third-party service providers who assist us in operating our business, such as hosting providers, payment processors, and analytics services."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law, legal process, or to protect the rights, property, or safety of Capable Labs, our users, or others."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction."
        }
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
        },
        {
          subtitle: "Data Encryption",
          text: "All data transmitted between your device and our servers is encrypted using industry-standard SSL/TLS protocols. Sensitive data is encrypted at rest."
        },
        {
          subtitle: "Access Controls",
          text: "We limit access to personal information to employees and contractors who need it to perform their job functions, and require all personnel to maintain confidentiality."
        }
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Shield className="h-16 w-16 text-primary" />
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Your privacy is important to us. This policy explains how we collect, use, 
            and protect your personal information when you use our services.
          </p>
          <p className="text-muted-foreground">
            <strong>Last updated:</strong> March 15, 2024
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <Card key={index} data-testid={`privacy-section-${index}`}>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="text-primary h-5 w-5" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {section.content.map((item, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-lg mb-3">{item.subtitle}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                      {idx < section.content.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Access and Correction</h4>
                <p className="text-muted-foreground">
                  You have the right to access, update, or correct your personal information. 
                  You can do this by logging into your account or contacting us directly.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold text-lg mb-3">Data Portability</h4>
                <p className="text-muted-foreground">
                  You can request a copy of your personal information in a structured, 
                  machine-readable format. We will provide this within 30 days of your request.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold text-lg mb-3">Deletion</h4>
                <p className="text-muted-foreground">
                  You can request that we delete your personal information. We will honor this 
                  request unless we have a legitimate business or legal reason to retain the information.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold text-lg mb-3">Marketing Communications</h4>
                <p className="text-muted-foreground">
                  You can opt out of marketing emails at any time by clicking the unsubscribe 
                  link in our emails or by contacting us directly.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center">
            <CardContent className="p-8">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="font-heading font-bold text-2xl mb-4">Questions About Privacy?</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about this Privacy Policy or our data practices, 
                please don't hesitate to contact us.
              </p>
              
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> privacy@capablelabs.dev</p>
                <p><strong>Address:</strong> Capable Labs, 123 Market Street, San Francisco, CA 94105</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Changes to Policy */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our 
                practices or for other operational, legal, or regulatory reasons. We will notify 
                you of any material changes by posting the updated policy on our website and 
                updating the "Last updated" date. We encourage you to review this policy 
                periodically to stay informed about how we are protecting your information.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
