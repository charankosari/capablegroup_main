import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, Scale, Shield, AlertTriangle, Mail, Gavel } from "lucide-react";

export default function Terms() {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        {
          text: "By accessing and using the Capable Labs website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
        },
        {
          text: "These Terms of Service constitute the entire agreement between you and Capable Labs and govern your use of our services, superseding any prior agreements between you and Capable Labs."
        }
      ]
    },
    {
      icon: Shield,
      title: "Services Description",
      content: [
        {
          text: "Capable Labs provides web development, mobile app development, AI solutions, and automation services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time."
        },
        {
          text: "All projects are subject to a separate Statement of Work (SOW) that will detail specific deliverables, timelines, and costs. The SOW will be incorporated by reference into these Terms of Service."
        }
      ]
    },
    {
      icon: Scale,
      title: "Payment Terms",
      content: [
        {
          subtitle: "Project Payments",
          text: "Unless otherwise specified in the SOW, payments are typically structured as 50% deposit upon project commencement and 50% upon completion. For larger projects, milestone-based payments may be arranged."
        },
        {
          subtitle: "Late Payments",
          text: "Invoices are due within 30 days of issuance. Late payments may incur a 1.5% monthly service charge. We reserve the right to suspend work on overdue accounts."
        },
        {
          subtitle: "Refunds",
          text: "Deposits are non-refundable once work has commenced. Refunds for completed work will be considered on a case-by-case basis."
        }
      ]
    },
    {
      icon: Gavel,
      title: "Intellectual Property",
      content: [
        {
          subtitle: "Client-Owned Content",
          text: "You retain ownership of all content, data, and materials you provide to us. You grant us a license to use this content solely for the purpose of providing our services."
        },
        {
          subtitle: "Deliverables",
          text: "Upon full payment, you will own the final deliverables created specifically for your project. This includes custom code, designs, and content created by Capable Labs."
        },
        {
          subtitle: "Our Property",
          text: "We retain ownership of our methodologies, templates, tools, and any pre-existing intellectual property. We reserve the right to use general knowledge and skills gained from your project."
        }
      ]
    }
  ];

  const additionalTerms = [
    {
      title: "Project Scope and Changes",
      content: "The scope of work will be clearly defined in the SOW. Any changes to the scope must be agreed upon in writing and may result in additional costs and timeline adjustments. We will provide estimates for scope changes before proceeding."
    },
    {
      title: "Timeline and Delays",
      content: "Project timelines are estimates based on the agreed scope and client responsiveness. Delays caused by client feedback, content provision, or scope changes may extend the project timeline. We will communicate any anticipated delays promptly."
    },
    {
      title: "Client Responsibilities",
      content: "Clients are responsible for providing necessary content, feedback, and approvals in a timely manner. Failure to provide required materials may result in project delays or additional costs."
    },
    {
      title: "Confidentiality",
      content: "We will maintain the confidentiality of your proprietary information and will not disclose it to third parties without your consent, except as required by law or necessary to provide our services."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <FileText className="h-16 w-16 text-primary" />
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Terms of <span className="text-primary">Service</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            These terms and conditions govern your use of our services and outline 
            the rights and responsibilities of both parties.
          </p>
          <p className="text-muted-foreground">
            <strong>Last updated:</strong> March 15, 2024
          </p>
        </div>
      </section>

      {/* Main Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <Card key={index} data-testid={`terms-section-${index}`}>
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
                      {'subtitle' in item && item.subtitle && (
                        <h4 className="font-semibold text-lg mb-3">{item.subtitle}</h4>
                      )}
                      <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                      {idx < section.content.length - 1 && 'subtitle' in item && item.subtitle && <Separator className="mt-6" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl mb-8 text-center">Additional Terms</h2>
          <div className="space-y-6">
            {additionalTerms.map((term, index) => (
              <Card key={index} data-testid={`additional-term-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">{term.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{term.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-yellow-200 dark:border-yellow-800">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-yellow-800 dark:text-yellow-200">
                <AlertTriangle className="h-6 w-6 mr-3" />
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Capable Labs be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including without limitation, loss of profits, 
                data, use, goodwill, or other intangible losses, resulting from your use of our services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our total liability to you for any damages arising from or related to these terms 
                or our services shall not exceed the amount you have paid us in the twelve (12) 
                months preceding the claim.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Governing Law and Disputes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the 
                laws of the State of California, without regard to its conflict of law provisions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Any disputes arising from these terms or our services shall be resolved through 
                binding arbitration in San Francisco, California, in accordance with the rules 
                of the American Arbitration Association.
              </p>
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
              <h2 className="font-heading font-bold text-2xl mb-4">Questions About These Terms?</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about these Terms of Service, please contact us. 
                We're here to clarify any concerns you may have.
              </p>
              
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> legal@capablelabs.dev</p>
                <p><strong>Address:</strong> Capable Labs, 123 Market Street, San Francisco, CA 94105</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Changes to Terms */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Changes to These Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. We will notify 
                users of any material changes by posting the updated terms on our website and 
                updating the "Last updated" date. Your continued use of our services after any 
                changes constitutes acceptance of the new terms.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
