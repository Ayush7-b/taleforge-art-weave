
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-tale-light-purple/30 to-background dark:from-tale-midnight/40 dark:to-background pt-20 pb-32 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-1/2 h-64 bg-purple-200 dark:bg-tale-deep-purple/20 rounded-full blur-3xl opacity-40 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-tale-soft-blue dark:bg-tale-purple/20 rounded-full blur-3xl opacity-30 transform translate-x-1/3 animate-pulse" style={{ animationDelay: "1s", animationDuration: "7s" }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 dark:bg-tale-midnight/40 rounded-full blur-3xl opacity-30 transform translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDelay: "2s", animationDuration: "8s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-3 bg-tale-purple/10 dark:bg-tale-purple/20 px-4 py-1.5 rounded-full text-tale-purple dark:text-tale-light-purple font-medium text-sm animate-fade-in">
            <Sparkles className="inline-block w-4 h-4 mr-1.5 align-text-bottom" /> Unleash your imagination
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Your Stories, <span className="text-tale-purple relative">
              Visually Enhanced
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-tale-purple/30 rounded-full"></span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Write captivating stories and bring them to life with AI-generated artwork.
            Turn your imagination into visual masterpieces.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/create">
              <Button className="bg-tale-purple hover:bg-tale-deep-purple text-white w-full sm:w-auto group shadow-lg shadow-tale-purple/20 hover:shadow-tale-purple/40 transition-all duration-300">
                <Sparkles className="mr-2 h-4 w-4 group-hover:animate-pulse" /> 
                Start Creating
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Button>
            </Link>
            <Link to="/read">
              <Button variant="outline" className="border-tale-purple text-tale-purple hover:bg-tale-light-purple dark:border-tale-light-purple dark:text-tale-light-purple dark:hover:bg-tale-purple/20 w-full sm:w-auto shadow-lg hover:shadow-tale-purple/20 transition-all duration-300">
                Explore Stories
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-4xl mx-auto relative perspective">
          <div className="aspect-[3/4] bg-gradient-to-br from-tale-purple to-tale-midnight rounded-lg overflow-hidden shadow-xl transform rotate-[-5deg] opacity-90 hover:rotate-[-3deg] hover:scale-105 hover:shadow-2xl hover:shadow-tale-purple/20 transition-all duration-500">
            <img 
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
              alt="Story artwork" 
              className="w-full h-full object-cover mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tale-midnight/80 to-transparent flex items-end p-4">
              <h3 className="text-white font-serif text-lg">Fantasy Realms</h3>
            </div>
          </div>
          <div className="aspect-[3/4] bg-gradient-to-br from-tale-midnight to-tale-deep-purple rounded-lg overflow-hidden shadow-xl translate-y-4 hover:translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-tale-deep-purple/20 transition-all duration-500">
            <img 
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
              alt="Story artwork" 
              className="w-full h-full object-cover mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tale-midnight/80 to-transparent flex items-end p-4">
              <h3 className="text-white font-serif text-lg">Cosmic Journeys</h3>
            </div>
          </div>
          <div className="aspect-[3/4] bg-gradient-to-br from-tale-deep-purple to-tale-soft-blue rounded-lg overflow-hidden shadow-xl transform rotate-[5deg] opacity-90 hover:rotate-[3deg] hover:scale-105 hover:shadow-2xl hover:shadow-tale-deep-purple/20 transition-all duration-500">
            <img 
              src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb" 
              alt="Story artwork" 
              className="w-full h-full object-cover mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tale-midnight/80 to-transparent flex items-end p-4">
              <h3 className="text-white font-serif text-lg">Ancient Tales</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute top-1/2 left-10 w-6 h-6 rounded-full bg-tale-gold opacity-60 animate-pulse"></div>
      <div className="absolute top-1/4 right-10 w-4 h-4 rounded-full bg-tale-purple opacity-40 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
    </div>
  );
};

export default Hero;
