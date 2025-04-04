
import { useState } from "react";
import { Button } from "@/components/ui/button";
import StoryCard from "./StoryCard";

// Mock data for featured stories
const MOCK_STORIES = [
  {
    id: "1",
    title: "The Forgotten Oracle",
    excerpt: "Deep in the evergreen forest, a hidden chamber reveals ancient secrets about humanity's forgotten past.",
    author: "Elena Wright",
    coverImage: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    likes: 234,
    comments: 45,
    views: 1205,
    tags: ["Fantasy", "Mystery", "Adventure"]
  },
  {
    id: "2",
    title: "Beyond the Stellar Divide",
    excerpt: "When the interstellar alliance fractures, one diplomat's journey across enemy lines might save the cosmos.",
    author: "Marcus Chen",
    coverImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    likes: 187,
    comments: 32,
    views: 891,
    tags: ["Sci-Fi", "Space", "Politics"]
  },
  {
    id: "3",
    title: "Whispers of Autumn",
    excerpt: "In a small Vermont town, autumn brings more than just falling leaves—it awakens something ancient.",
    author: "Sarah Johnson",
    coverImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    likes: 312,
    comments: 67,
    views: 1547,
    tags: ["Horror", "Supernatural", "Small Town"]
  },
  {
    id: "4",
    title: "The Clockmaker's Daughter",
    excerpt: "Her father crafted time itself, but she discovered something he never intended anyone to find.",
    author: "Thomas Reed",
    coverImage: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    likes: 156,
    comments: 28,
    views: 723,
    tags: ["Historical", "Steampunk", "Mystery"]
  },
  {
    id: "5",
    title: "Canvas of Shadows",
    excerpt: "An artist discovers her paintings predict the future, but changing the images comes at a terrible price.",
    author: "Isabelle Noir",
    coverImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    likes: 275,
    comments: 51,
    views: 1098,
    tags: ["Thriller", "Supernatural", "Art"]
  },
  {
    id: "6",
    title: "The Last Algorithm",
    excerpt: "In a world where AI controls everything, one programmer discovers the fatal flaw in the system.",
    author: "Dev Patel",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    likes: 192,
    comments: 39,
    views: 876,
    tags: ["Cyberpunk", "Sci-Fi", "Dystopia"]
  }
];

const CATEGORIES = ["All", "Fantasy", "Sci-Fi", "Mystery", "Horror", "Romance", "Adventure"];

const FeaturedStories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredStories = selectedCategory === "All" 
    ? MOCK_STORIES 
    : MOCK_STORIES.filter(story => story.tags.includes(selectedCategory));

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Featured Stories</h2>
            <p className="text-muted-foreground">Discover popular tales crafted by our community</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(category => (
                <Button 
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-tale-purple hover:bg-tale-deep-purple" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map(story => (
            <StoryCard key={story.id} {...story} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-tale-purple text-tale-purple hover:bg-tale-light-purple">
            Explore More Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;
