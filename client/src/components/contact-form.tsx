import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { CloudUpload } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  services: z.array(z.string()).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: "",
      message: "",
      services: [],
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission for static site
    try {
      // In a real static site, you might want to:
      // 1. Send to a third-party service like Formspree, Netlify Forms, etc.
      // 2. Use a serverless function
      // 3. Send via email service
      
      // For now, we'll just show a success message
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      form.reset();
      setSelectedFile(null);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const services = [
    { id: "website", label: "Website" },
    { id: "mobile", label: "Mobile App" },
    { id: "ai", label: "AI Agent" },
    { id: "automation", label: "Automation" },
  ];

  return (
    <Card className="glass-card">
      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        data-testid="input-name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        data-testid="input-company"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        {...field} 
                        data-testid="input-email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget Range</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-budget">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                        <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                        <SelectItem value="50k+">$50,000+</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="services"
              render={() => (
                <FormItem>
                  <FormLabel>Services Needed</FormLabel>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {services.map((service) => (
                      <FormField
                        key={service.id}
                        control={form.control}
                        name="services"
                        render={({ field }) => {
                          return (
                            <FormItem key={service.id} className="flex flex-row items-start space-x-2 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(service.id)}
                                  onCheckedChange={(checked) => {
                                    const currentServices = field.value || [];
                                    return checked
                                      ? field.onChange([...currentServices, service.id])
                                      : field.onChange(
                                          currentServices?.filter(
                                            (value) => value !== service.id
                                          )
                                        );
                                  }}
                                  data-testid={`checkbox-service-${service.id}`}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {service.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Details *</FormLabel>
                  <FormControl>
                    <Textarea 
                      {...field}
                      rows={5}
                      placeholder="Tell us about your project, goals, and timeline..."
                      data-testid="textarea-message"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <Label className="text-sm font-medium mb-2 block">
                Attach Files (Optional)
              </Label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <CloudUpload className="text-muted-foreground h-8 w-8 mx-auto mb-2" />
                <p className="text-muted-foreground mb-2">
                  {selectedFile ? selectedFile.name : "Drop files here or click to upload"}
                </p>
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                  multiple
                  data-testid="file-upload"
                />
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => document.getElementById('file-upload')?.click()}
                  data-testid="file-upload-button"
                >
                  Choose Files
                </Button>
              </div>
            </div>

            {/* Honeypot field for spam protection */}
            <input
              type="text"
              name="honeypot"
              style={{ display: "none" }}
              tabIndex={-1}
              onChange={() => {}}
            />

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                type="submit" 
                className="flex-1"
                disabled={isSubmitting}
                data-testid="submit-contact-form"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              <Button 
                type="button" 
                variant="outline"
                data-testid="schedule-call-button"
              >
                Schedule Call
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
