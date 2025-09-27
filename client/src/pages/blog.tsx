import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { useState } from "react";
import { Search, Calendar, Clock, ArrowRight, User } from "lucide-react";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "development", label: "Development" },
    { id: "design", label: "Design" },
    { id: "ai", label: "AI & Automation" },
    { id: "business", label: "Business" },
    { id: "tutorials", label: "Tutorials" }
  ];

  const featuredPost = {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Discover the latest trends shaping the web development landscape, from AI integration to new JavaScript frameworks and beyond.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    author: "Alex Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "development",
    tags: ["Web Development", "JavaScript", "AI", "Trends"]
  };

  const posts = [
    {
      id: 2,
      title: "Building Scalable React Applications: Best Practices",
      excerpt: "Learn how to structure and build React applications that scale with your business needs.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      author: "Sarah Chen",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "development",
      tags: ["React", "JavaScript", "Architecture"]
    },
    {
      id: 3,
      title: "Designing for Accessibility: A Complete Guide",
      excerpt: "Comprehensive guide to creating inclusive digital experiences that work for everyone.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      author: "Sarah Chen",
      date: "March 10, 2024",
      readTime: "10 min read",
      category: "design",
      tags: ["Accessibility", "UX Design", "Inclusive Design"]
    },
    {
      id: 4,
      title: "AI-Powered Customer Support: Implementation Guide",
      excerpt: "How to integrate AI chatbots and automation to enhance your customer support experience.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2006&q=80",
      author: "Michael Torres",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "ai",
      tags: ["AI", "Automation", "Customer Support", "Chatbots"]
    },
    {
      id: 5,
      title: "From Startup to Scale: Technology Decisions That Matter",
      excerpt: "Strategic technology choices that can make or break your startup's growth journey.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      author: "Alex Johnson",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "business",
      tags: ["Startup", "Technology Strategy", "Business Growth"]
    },
    {
      id: 6,
      title: "Building Your First API with Node.js and Express",
      excerpt: "Step-by-step tutorial for creating a RESTful API from scratch using modern JavaScript.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      author: "Michael Torres",
      date: "March 3, 2024",
      readTime: "12 min read",
      category: "tutorials",
      tags: ["Node.js", "API", "Backend", "Tutorial"]
    },
    {
      id: 7,
      title: "The Psychology of Color in Digital Design",
      excerpt: "Understanding how color choices impact user behavior and conversion rates in digital products.",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      author: "Sarah Chen",
      date: "March 1, 2024",
      readTime: "5 min read",
      category: "design",
      tags: ["Design Psychology", "Color Theory", "UX"]
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Insights & <span className="text-primary">Ideas</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Stay updated with the latest trends in development, design, and technology. 
            Learn from our experience building digital products that scale.
          </p>
          
          {/* Search and Filters */}
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="blog-search"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  data-testid={`blog-filter-${category.id}`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-heading font-bold text-2xl mb-2">Featured Article</h2>
            <p className="text-muted-foreground">Don't miss our latest insights</p>
          </div>
          
          <Card className="glass-card overflow-hidden hover:scale-[1.02] transition-transform duration-300" data-testid="featured-post">
            <div className="grid lg:grid-cols-2">
              <div className="relative lg:min-h-[400px]">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-8 lg:p-12">
                <div className="flex gap-2 mb-4">
                  {featuredPost.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
                  {featuredPost.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground mr-4">{featuredPost.date}</span>
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <Button data-testid="featured-post-read-more">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-heading font-bold text-3xl mb-2">Recent Articles</h2>
            <p className="text-muted-foreground">
              {searchTerm || selectedCategory !== "all" 
                ? `Showing ${filteredPosts.length} articles`
                : "Latest insights from our team"
              }
            </p>
          </div>
          
          {filteredPosts.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search terms or filters
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  data-testid="blog-clear-filters"
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Card key={post.id} className="overflow-hidden hover:scale-105 transition-transform duration-300" data-testid={`blog-post-${post.id}`}>
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <h3 className="font-heading font-semibold text-lg mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="p-0 h-auto" data-testid={`blog-post-read-${post.id}`}>
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Stay in the Loop
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get notified when we publish new articles. No spam, just valuable insights 
            delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1"
              data-testid="blog-newsletter-email"
            />
            <Button data-testid="blog-newsletter-submit">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Join 1,000+ developers who get our weekly newsletter
          </p>
        </div>
      </section>
    </div>
  );
}
