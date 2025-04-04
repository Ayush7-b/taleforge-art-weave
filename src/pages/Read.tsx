import { useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, MessageCircle, ThumbsUp, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Textarea } from "@/components/ui/textarea";

const Read = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("story");
  const [comment, setComment] = useState("");

  // Mock data for a story
  const story = {
    id: id || "1",
    title: "The Crystal Cavern",
    author: "Alex Morgan",
    coverImage: "https://images.unsplash.com/photo-1518562180175-34a163b1a9a6",
    content: `
      <p>Deep within the Whispering Mountains, where mist clung to ancient stone and sunlight rarely touched the ground, there lay a secret known only to the most daring of explorers. The Crystal Cavern, they called it—a place of legend, of whispered tales shared around campfires by those who claimed their great-grandfather's cousin's friend had once glimpsed its splendor.</p>
      
      <p>Elara didn't believe in legends. As a geologist with three advanced degrees and a reputation for debunking mythical locations, she had come to the mountains with scientific equipment and a research grant, not wide-eyed wonder. Yet as she followed her instruments deeper into the labyrinthine caves, something pulled at her—something beyond scientific curiosity.</p>
      
      <p>"Just a bit further," she muttered to herself, ducking beneath a low-hanging stalactite. Her headlamp cast eerie shadows against the cave walls, and the steady drip of water marked time like a metronome.</p>
      
      <h2>The Discovery</h2>
      
      <p>When the passage suddenly widened, Elara's light seemed to disappear into nothingness. She stepped forward cautiously, then froze as her beam caught something that sparkled. Adjusting her light, she gasped.</p>
      
      <p>Before her stretched an immense cavern, its ceiling so high it vanished into darkness. But it wasn't the size that stole her breath—it was the crystals. Thousands upon thousands of them, in every color imaginable, growing from floor to ceiling like some alien forest. They pulsed with an inner light that seemed to respond to her presence, brightening as she stepped closer.</p>
      
      <p>"Impossible," she whispered, her scientific mind racing to explain what she was seeing. These weren't ordinary crystals—they were something else entirely.</p>
    `,
    publishedDate: "March 15, 2023",
    likes: 342,
    comments: [
      { id: 1, user: "BookLover22", text: "This story transported me to another world! Can't wait for the next chapter.", timestamp: "2 days ago" },
      { id: 2, user: "CriticalReader", text: "The description of the Crystal Cavern was so vivid. I could almost see the colors.", timestamp: "1 day ago" },
      { id: 3, user: "AdventureSeeker", text: "As someone who loves caving, this felt authentic yet magical. Well done!", timestamp: "12 hours ago" },
    ],
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1518562180175-34a163b1a9a6", caption: "The entrance to the cavern" },
      { id: 2, url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1", caption: "Crystal formations" },
      { id: 3, url: "https://images.unsplash.com/photo-1635048424329-5b66c3fb8c32", caption: "The heart of the cave" },
    ]
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      // In a real app, you would send this to an API
      console.log("Submitting comment:", comment);
      setComment("");
      // You would then refresh comments or add the new comment to the list
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Story Header */}
          <div className="relative h-[40vh] mb-8 rounded-xl overflow-hidden">
            <img 
              src={story.coverImage} 
              alt={story.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{story.title}</h1>
              <div className="flex items-center text-white/80">
                <span>By {story.author}</span>
                <span className="mx-2">•</span>
                <span>{story.publishedDate}</span>
              </div>
            </div>
          </div>
          
          {/* Tabs for Story/Images */}
          <Tabs defaultValue="story" className="mb-8" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="story" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Story
              </TabsTrigger>
              <TabsTrigger value="images" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Comments
              </TabsTrigger>
            </TabsList>
            
            {/* Story Content */}
            <TabsContent value="story" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <div 
                    className="story-content prose prose-slate dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: story.content }}
                  />
                  
                  <div className="flex items-center justify-between mt-8 pt-4 border-t">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="flex items-center gap-2">
                        <ThumbsUp className="h-4 w-4" />
                        {story.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="flex items-center gap-2" onClick={() => setActiveTab("images")}>
                        <MessageCircle className="h-4 w-4" />
                        {story.comments.length}
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="flex items-center gap-2">
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Comments Section */}
            <TabsContent value="images" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Comments ({story.comments.length})</h2>
                  
                  {/* Comment Form */}
                  <form onSubmit={handleCommentSubmit} className="mb-6">
                    <Textarea
                      placeholder="Share your thoughts on this story..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="mb-2"
                    />
                    <Button type="submit" disabled={!comment.trim()}>
                      Post Comment
                    </Button>
                  </form>
                  
                  {/* Comments List */}
                  <div className="space-y-4">
                    {story.comments.map((comment) => (
                      <div key={comment.id} className="p-4 bg-muted rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{comment.user}</span>
                          <span className="text-sm text-muted-foreground">{comment.timestamp}</span>
                        </div>
                        <p>{comment.text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          {/* Related Stories would go here */}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Read;
