
import Hero from "@/components/Hero";
import FeaturedStories from "@/components/FeaturedStories";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, PenTool, BookOpen, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <section className="py-16 bg-tale-light-purple/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">How TaleForge Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-tale-purple/10 text-tale-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <PenTool className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Write Your Story</h3>
                <p className="text-muted-foreground">
                  Create captivating narratives with our intuitive writing tools.
                  Format your story, add chapters, and craft your literary masterpiece.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-tale-purple/10 text-tale-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Generate AI Art</h3>
                <p className="text-muted-foreground">
                  Describe the perfect scene or character, and watch as AI brings your vision to life
                  with stunning, original artwork.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-tale-purple/10 text-tale-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Publish & Share</h3>
                <p className="text-muted-foreground">
                  Share your illustrated stories with our community. Receive feedback,
                  gain followers, and inspire others.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/create">
                <Button className="bg-tale-purple hover:bg-tale-deep-purple">Get Started Now</Button>
              </Link>
            </div>
          </div>
        </section>
        
        <FeaturedStories />
        
        <section className="py-16 bg-gradient-to-r from-tale-midnight to-tale-deep-purple text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Join Our Community of Storytellers
              </h2>
              <p className="text-lg mb-8 text-white/80">
                Connect with fellow writers, share feedback, and collaborate on new projects.
                TaleForge is more than a platform—it's a creative community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-tale-deep-purple hover:bg-tale-light-purple">
                  <Users className="mr-2 h-4 w-4" /> Join Community
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
