import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertQuoteSchema, insertNewsletterSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { sendEmail, generateContactEmailHtml, generateQuoteEmailHtml } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Send email notification to team
      await sendEmail({
        to: "hello@capablelabs.dev",
        from: "noreply@capablelabs.dev",
        subject: `New Contact Form Submission from ${contact.name}`,
        text: `New contact form submission from ${contact.name} (${contact.email})`,
        html: generateContactEmailHtml(contact)
      });
      
      console.log("New contact form submission:", contact);
      
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      }
      
      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to send message. Please try again." 
      });
    }
  });

  // Quote submission
  app.post("/api/quotes", async (req, res) => {
    try {
      const validatedData = insertQuoteSchema.parse(req.body);
      const quote = await storage.createQuote(validatedData);
      
      // Send email notification to team
      await sendEmail({
        to: "quotes@capablelabs.dev",
        from: "noreply@capablelabs.dev",
        subject: `New Quote Request - ${quote.serviceType}`,
        text: `New quote request for ${quote.serviceType} service`,
        html: generateQuoteEmailHtml(quote)
      });
      
      console.log("New quote request:", quote);
      
      res.json({ 
        success: true, 
        message: "Quote saved successfully!",
        quoteId: quote.id 
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      }
      
      console.error("Quote submission error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to save quote. Please try again." 
      });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const subscriber = await storage.createNewsletterSubscriber(validatedData);
      
      // Send welcome email
      await sendEmail({
        to: subscriber.email,
        from: "newsletter@capablelabs.dev",
        subject: "Welcome to Capable Labs Newsletter!",
        text: "Thank you for subscribing to our newsletter. You'll receive the latest insights on development, design, and technology.",
        html: `
          <h2>Welcome to Capable Labs!</h2>
          <p>Thank you for subscribing to our newsletter.</p>
          <p>You'll receive the latest insights on development, design, and technology trends directly in your inbox.</p>
          <p>We respect your privacy and you can unsubscribe at any time.</p>
          <p>Best regards,<br>The Capable Labs Team</p>
        `
      });
      
      console.log("New newsletter subscriber:", subscriber);
      
      res.json({ 
        success: true, 
        message: "Successfully subscribed to newsletter!" 
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      }
      
      console.error("Newsletter subscription error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to subscribe. Please try again." 
      });
    }
  });

  // Get contacts (admin endpoint)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  // Get quotes (admin endpoint)
  app.get("/api/quotes", async (req, res) => {
    try {
      const quotes = await storage.getQuotes();
      res.json(quotes);
    } catch (error) {
      console.error("Get quotes error:", error);
      res.status(500).json({ error: "Failed to fetch quotes" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
