
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StoryCard from "@/components/StoryCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Filter, BookOpen, ThumbsUp, MessageSquare, Share2, Bookmark } from "lucide-react";

// Mock data for stories
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
  },
  {
    id: "7",
    title: "Memories of Tomorrow",
    excerpt: "A woman discovers she can see glimpses of her future, but each vision changes her present life forever.",
    author: "Mia Roberts",
    coverImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    likes: 220,
    comments: 42,
    views: 950,
    tags: ["Drama", "Supernatural", "Romance"]
  },
  {
    id: "8",
    title: "The Silent Cartographer",
    excerpt: "An ancient map holds secrets that could reshape understanding of human history, if deciphered in time.",
    author: "James Mercer",
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    likes: 168,
    comments: 35,
    views: 803,
    tags: ["Adventure", "Historical", "Mystery"]
  },
  {
    id: "9",
    title: "The Code of Shadows",
    excerpt: "A software engineer uncovers strange patterns in the code that seem to predict real-world events.",
    author: "Alex Zhang",
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    likes: 205,
    comments: 47,
    views: 921,
    tags: ["Thriller", "Tech", "Mystery"]
  }
];

// Story detail component (shown when a specific story is selected)
const StoryDetail = ({ id }: { id: string }) => {
  const story = MOCK_STORIES.find(s => s.id === id);
  
  if (!story) {
    return <div className="text-center py-12">Story not found</div>;
  }
  
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="aspect-[16/9] overflow-hidden rounded-lg mb-8">
        <img 
          src={story.coverImage} 
          alt={story.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <h1 className="font-serif text-4xl font-bold mb-2">{story.title}</h1>
      
      <div className="flex items-center gap-4 text-muted-foreground mb-6">
        <span>By {story.author}</span>
        <span>•</span>
        <span>5 min read</span>
      </div>
      
      <div className="flex items-center gap-3 mb-8">
        <Button variant="outline" size="sm">
          <ThumbsUp className="mr-2 h-4 w-4" /> {story.likes}
        </Button>
        <Button variant="outline" size="sm">
          <MessageSquare className="mr-2 h-4 w-4" /> {story.comments}
        </Button>
        <Button variant="outline" size="sm">
          <Share2 className="mr-2 h-4 w-4" /> Share
        </Button>
        <Button variant="outline" size="sm">
          <Bookmark className="mr-2 h-4 w-4" /> Save
        </Button>
      </div>
      
      <div className="prose max-w-none story-content">
        <p>
          The morning sun filtered through the dense canopy, casting dappled shadows across the forest floor. {story.excerpt}
        </p>
        
        <p>
          For years, locals had whispered about the strange occurrences near the old oak grove, but Anna had dismissed them as nothing more than small-town superstitions. Now, standing before the moss-covered entrance to what appeared to be an ancient structure, she wasn't so certain.
        </p>
        
        <div className="my-8 rounded-lg overflow-hidden">
          <img 
            src={story.coverImage} 
            alt="Story artwork" 
            className="w-full"
          />
          <p className="text-sm text-center text-muted-foreground mt-2">
            AI-generated artwork: "The entrance to the ancient oracle's chamber"
          </p>
        </div>
        
        <p>
          The symbols carved into the weathered stone seemed to shift under her gaze, rearranging themselves like living things. Anna had studied ancient languages her entire career, yet these markings defied categorization. They weren't Sumerian, Egyptian, or any other established script from humanity's early civilizations.
        </p>
        
        <p>
          "They're pre-linguistic," she whispered, tracing her fingers along the intricate patterns. "But that's impossible."
        </p>
        
        <p>
          A cool breeze emerged from the chamber, carrying with it the scent of earth and something else—something ancient and undefinable. Anna hesitated at the threshold, her flashlight beam disappearing into the darkness beyond.
        </p>
        
        <h2>The Chamber of Whispers</h2>
        
        <p>
          The decision to enter wasn't made consciously. Later, Anna would recall feeling as though something had called to her, not with words but with a sensation—a pull that resonated with something deep within her genetic memory.
        </p>
        
        <p>
          The chamber was larger than the entrance suggested, a perfect dome carved from a single piece of unknown stone. In the center, a pedestal rose from the ground, topped with what appeared to be a crystalline sphere.
        </p>
        
        <p>
          As Anna approached, the sphere began to glow with an inner light, casting rainbow patterns across the walls. The symbols etched into the chamber's surface seemed to respond, pulsing in rhythm with the light.
        </p>
        
        <p>
          "What are you?" she whispered, reaching toward the sphere.
        </p>
      </div>
      
      <div className="border-t border-border my-12 pt-8">
        <h3 className="font-serif text-2xl font-semibold mb-6">Comments</h3>
        
        <div className="space-y-6">
          <div className="border border-border p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-tale-purple/20 rounded-full flex items-center justify-center text-tale-purple font-medium">
                JD
              </div>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">2 days ago</p>
              </div>
            </div>
            <p>This story has me completely hooked! The descriptions of the ancient chamber are so vivid I feel like I'm there. Can't wait for the next chapter!</p>
          </div>
          
          <div className="border border-border p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-tale-purple/20 rounded-full flex items-center justify-center text-tale-purple font-medium">
                AR
              </div>
              <div>
                <p className="font-medium">Alice Richards</p>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </div>
            </div>
            <p>The AI artwork really enhances the story! I love how it visualizes that mysterious entrance exactly as I imagined it while reading.</p>
          </div>
        </div>
        
        <div className="mt-6">
          <label htmlFor="comment" className="block mb-2 font-medium">
            Leave a comment
          </label>
          <Textarea id="comment" placeholder="Share your thoughts..." className="mb-2" />
          <Button className="bg-tale-purple hover:bg-tale-deep-purple">Post Comment</Button>
        </div>
      </div>
    </div>
  );
};

// Main Read page component
const Read = () => {
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");
  
  // Filter stories based on search query and selected tab
  const filteredStories = MOCK_STORIES.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         story.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedTab === "all") return matchesSearch;
    return matchesSearch && story.tags.some(tag => tag.toLowerCase() === selectedTab.toLowerCase());
  });
  
  if (id) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-8 bg-background">
          <StoryDetail id={id} />
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-serif font-bold flex items-center">
              <BookOpen className="mr-3 h-6 w-6 text-tale-purple" /> Explore Stories
            </h1>
            
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search stories..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <Tabs defaultValue="all" value={selectedTab} onValueChange={setSelectedTab}>
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="fantasy">Fantasy</TabsTrigger>
                <TabsTrigger value="sci-fi">Sci-Fi</TabsTrigger>
                <TabsTrigger value="mystery">Mystery</TabsTrigger>
                <TabsTrigger value="horror">Horror</TabsTrigger>
              </TabsList>
              
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
            </div>
            
            <TabsContent value="all" className="mt-0">
              {filteredStories.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredStories.map(story => (
                    <StoryCard key={story.id} {...story} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-muted-foreground">No stories found matching your search.</p>
                </div>
              )}
            </TabsContent>
            
            {["fantasy", "sci-fi", "mystery", "horror"].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredStories.map(story => (
                    <StoryCard key={story.id} {...story} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Read;
