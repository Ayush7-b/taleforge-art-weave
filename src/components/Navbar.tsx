
import { Link } from "react-router-dom";
import { Book, Feather, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold text-tale-purple">TaleForge</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-tale-purple transition-colors">
            Home
          </Link>
          <Link to="/read" className="text-foreground/80 hover:text-tale-purple transition-colors">
            Explore Stories
          </Link>
          <Link to="/create" className="text-foreground/80 hover:text-tale-purple transition-colors">
            Create
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/create">
            <Button variant="outline" size="icon" className="rounded-full">
              <Feather className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/read">
            <Button variant="outline" size="icon" className="rounded-full">
              <Book className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/profile">
            <Button variant="outline" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
