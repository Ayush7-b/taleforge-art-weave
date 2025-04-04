
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ImagePlus, Sparkles, Loader2, X } from "lucide-react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [generating, setGenerating] = useState(false);
  const [artPrompt, setArtPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");

  const handleGenerateImage = () => {
    if (!artPrompt.trim()) return;
    
    setGenerating(true);
    
    // Simulate AI image generation with a timeout
    setTimeout(() => {
      // In a real app, this would be an API call to an AI image generator
      const mockImages = [
        "https://images.unsplash.com/photo-1500673922987-e212871fec22",
        "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
      ];
      
      setGeneratedImage(mockImages[Math.floor(Math.random() * mockImages.length)]);
      setGenerating(false);
    }, 2000);
  };

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim()) && tags.length < 5) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif font-bold mb-2">Create Your Story</h1>
          <p className="text-muted-foreground mb-8">
            Write your story and enhance it with AI-generated artwork
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="title">Story Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter your story title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="content">Story Content</Label>
                  <Textarea
                    id="content"
                    placeholder="Begin writing your story..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="min-h-[300px] mt-1"
                  />
                </div>
                
                <div>
                  <Label>Tags (up to 5)</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-tale-light-purple text-tale-deep-purple flex items-center gap-1">
                        {tag}
                        <button onClick={() => removeTag(tag)} className="ml-1 hover:text-red-500">
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add a tag"
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      onKeyDown={handleKeyDown}
                      disabled={tags.length >= 5}
                    />
                    <Button 
                      onClick={addTag} 
                      variant="outline"
                      disabled={tags.length >= 5 || !currentTag.trim()}
                    >
                      Add
                    </Button>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fantasy">Fantasy</SelectItem>
                      <SelectItem value="scifi">Science Fiction</SelectItem>
                      <SelectItem value="mystery">Mystery</SelectItem>
                      <SelectItem value="romance">Romance</SelectItem>
                      <SelectItem value="horror">Horror</SelectItem>
                      <SelectItem value="adventure">Adventure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex justify-end gap-3">
                  <Button variant="outline">Save Draft</Button>
                  <Button className="bg-tale-purple hover:bg-tale-deep-purple">
                    Publish Story
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-4 flex items-center">
                    <Sparkles className="mr-2 h-5 w-5 text-tale-gold" /> 
                    AI Art Generator
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="art-prompt">Image Description</Label>
                      <Textarea
                        id="art-prompt"
                        placeholder="Describe the scene or character you want to visualize..."
                        value={artPrompt}
                        onChange={(e) => setArtPrompt(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label>Style</Label>
                      <Select defaultValue="digital-art">
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="digital-art">Digital Art</SelectItem>
                          <SelectItem value="fantasy">Fantasy</SelectItem>
                          <SelectItem value="realistic">Realistic</SelectItem>
                          <SelectItem value="anime">Anime</SelectItem>
                          <SelectItem value="watercolor">Watercolor</SelectItem>
                          <SelectItem value="oil-painting">Oil Painting</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button 
                      onClick={handleGenerateImage} 
                      className="w-full bg-tale-purple hover:bg-tale-deep-purple"
                      disabled={!artPrompt.trim() || generating}
                    >
                      {generating ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-4 w-4" /> Generate Image
                        </>
                      )}
                    </Button>
                    
                    {generatedImage && (
                      <div className="mt-4">
                        <div className="aspect-[4/3] relative overflow-hidden rounded-md border border-border">
                          <img 
                            src={generatedImage} 
                            alt="Generated artwork" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex gap-2 mt-2">
                          <Button variant="outline" size="sm" className="flex-1">Regenerate</Button>
                          <Button size="sm" className="flex-1">Use Image</Button>
                        </div>
                      </div>
                    )}
                    
                    {!generatedImage && (
                      <div className="aspect-[4/3] bg-secondary/50 rounded-md border border-dashed border-muted-foreground/50 flex items-center justify-center mt-4">
                        <div className="text-center p-4">
                          <ImagePlus className="mx-auto h-10 w-10 text-muted-foreground/50 mb-2" />
                          <p className="text-sm text-muted-foreground">
                            Your generated image will appear here
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Create;
