
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-tale-light-purple/30 to-background pt-16 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Your Stories, <span className="text-tale-purple">Visually Enhanced</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Write captivating stories and bring them to life with AI-generated artwork.
            Turn your imagination into visual masterpieces.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/create">
              <Button className="bg-tale-purple hover:bg-tale-deep-purple text-white w-full sm:w-auto">
                Start Creating
              </Button>
            </Link>
            <Link to="/read">
              <Button variant="outline" className="border-tale-purple text-tale-purple hover:bg-tale-light-purple w-full sm:w-auto">
                Explore Stories
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="aspect-[3/4] bg-gradient-to-br from-tale-purple to-tale-midnight rounded-lg overflow-hidden shadow-lg transform rotate-[-5deg] opacity-90">
            <img 
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
              alt="Story artwork" 
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>
          <div className="aspect-[3/4] bg-gradient-to-br from-tale-midnight to-tale-deep-purple rounded-lg overflow-hidden shadow-xl translate-y-4">
            <img 
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
              alt="Story artwork" 
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>
          <div className="aspect-[3/4] bg-gradient-to-br from-tale-deep-purple to-tale-soft-blue rounded-lg overflow-hidden shadow-lg transform rotate-[5deg] opacity-90">
            <img 
              src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb" 
              alt="Story artwork" 
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
