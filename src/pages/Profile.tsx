
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoryCard from "@/components/StoryCard";
import { Edit, Settings, User, BookOpen, Heart, BookMarked } from "lucide-react";

const Profile = () => {
  // Mock data for user's stories
  const userStories = [
    {
      id: "101",
      title: "The Silent Valley",
      excerpt: "A mountain expedition discovers a valley where sound doesn't travel, hiding secrets beyond imagination.",
      author: "Jane Author",
      coverImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      likes: 127,
      comments: 21,
      views: 623,
      tags: ["Adventure", "Mystery", "Nature"]
    },
    {
      id: "102",
      title: "Midnight Protocol",
      excerpt: "When the digital world starts affecting reality, one programmer must stop the cascade failure.",
      author: "Jane Author",
      coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      likes: 84,
      comments: 16,
      views: 412,
      tags: ["Cyberpunk", "Tech", "Thriller"]
    }
  ];

  // Mock data for saved stories
  const savedStories = [
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
      id: "5",
      title: "Canvas of Shadows",
      excerpt: "An artist discovers her paintings predict the future, but changing the images comes at a terrible price.",
      author: "Isabelle Noir",
      coverImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      likes: 275,
      comments: 51,
      views: 1098,
      tags: ["Thriller", "Supernatural", "Art"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* User Profile Sidebar */}
            <div className="md:sticky md:top-24 bg-white rounded-lg border border-border p-6 w-full md:w-72">
              <div className="flex flex-col items-center text-center mb-6">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-tale-purple text-white text-xl">JA</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-serif font-bold">Jane Author</h2>
                <p className="text-muted-foreground">Storyteller & AI Artist</p>
              </div>
              
              <div className="flex justify-center space-x-3 mb-6">
                <div className="text-center">
                  <p className="font-bold">2</p>
                  <p className="text-xs text-muted-foreground">Stories</p>
                </div>
                <Separator orientation="vertical" className="h-10" />
                <div className="text-center">
                  <p className="font-bold">211</p>
                  <p className="text-xs text-muted-foreground">Followers</p>
                </div>
                <Separator orientation="vertical" className="h-10" />
                <div className="text-center">
                  <p className="font-bold">59</p>
                  <p className="text-xs text-muted-foreground">Following</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" /> Edit Profile
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" /> Settings
                </Button>
              </div>
            </div>
            
            {/* Content Area */}
            <div className="flex-1">
              <Tabs defaultValue="my-stories">
                <TabsList className="mb-6">
                  <TabsTrigger value="my-stories" className="flex items-center">
                    <BookOpen className="mr-2 h-4 w-4" /> My Stories
                  </TabsTrigger>
                  <TabsTrigger value="saved" className="flex items-center">
                    <BookMarked className="mr-2 h-4 w-4" /> Saved
                  </TabsTrigger>
                  <TabsTrigger value="liked" className="flex items-center">
                    <Heart className="mr-2 h-4 w-4" /> Liked
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="my-stories">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold">My Stories</h3>
                    <Button className="bg-tale-purple hover:bg-tale-deep-purple">
                      <Edit className="mr-2 h-4 w-4" /> New Story
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {userStories.map(story => (
                      <StoryCard key={story.id} {...story} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="saved">
                  <h3 className="text-xl font-semibold mb-6">Saved Stories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {savedStories.map(story => (
                      <StoryCard key={story.id} {...story} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="liked">
                  <h3 className="text-xl font-semibold mb-6">Liked Stories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {savedStories.map(story => (
                      <StoryCard key={story.id} {...story} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
