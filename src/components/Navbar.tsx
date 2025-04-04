
import { Link } from "react-router-dom";
import { Book, Feather, Moon, Sun, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { Toggle } from "@/components/ui/toggle";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-tale-purple to-tale-deep-purple flex items-center justify-center text-white font-bold">
            T
          </div>
          <span className="text-2xl font-serif font-bold text-tale-purple group-hover:text-tale-deep-purple transition-colors">TaleForge</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-foreground/80 hover:text-tale-purple transition-colors relative group py-1">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tale-purple group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/read" className="text-foreground/80 hover:text-tale-purple transition-colors relative group py-1">
            Explore Stories
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tale-purple group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/create" className="text-foreground/80 hover:text-tale-purple transition-colors relative group py-1">
            Create
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tale-purple group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Toggle
            aria-label="Toggle dark mode"
            pressed={theme === "dark"}
            onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="mr-2 bg-muted/50 data-[state=on]:bg-tale-deep-purple/20 hover:bg-muted"
          >
            {theme === "dark" ? 
              <Sun className="h-4 w-4 text-amber-300" /> : 
              <Moon className="h-4 w-4 text-tale-deep-purple" />
            }
          </Toggle>
          
          <Link to="/create">
            <Button variant="outline" size="icon" className="rounded-full border-border hover:border-tale-purple hover:text-tale-purple hover:shadow-sm transition-all">
              <Feather className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/read">
            <Button variant="outline" size="icon" className="rounded-full border-border hover:border-tale-purple hover:text-tale-purple hover:shadow-sm transition-all">
              <Book className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/profile">
            <Button variant="outline" size="icon" className="rounded-full border-border hover:border-tale-purple hover:text-tale-purple hover:shadow-sm transition-all">
              <User className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
