
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageSquare, Eye, Sparkles } from "lucide-react";

interface StoryCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  coverImage: string;
  likes: number;
  comments: number;
  views: number;
  tags: string[];
}

const StoryCard = ({ 
  id, 
  title, 
  excerpt, 
  author, 
  coverImage, 
  likes, 
  comments, 
  views,
  tags 
}: StoryCardProps) => {
  return (
    <Link to={`/read/${id}`} className="group">
      <Card className="overflow-hidden h-full border border-border/50 transition-all duration-300 hover:shadow-lg hover:shadow-tale-purple/20 hover:border-tale-purple/30 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <img
            src={coverImage}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tale-midnight/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-3 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-center justify-center">
                <span className="text-white text-sm font-medium bg-tale-purple/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5" /> Read Story
                </span>
              </div>
            </div>
          </div>
        </div>
        <CardContent className="p-5">
          <div className="space-y-2">
            <h3 className="font-serif text-xl font-semibold leading-tight text-foreground group-hover:text-tale-purple transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {excerpt}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-tale-light-purple text-tale-deep-purple dark:bg-tale-purple/20 dark:text-tale-light-purple">
                {tag}
              </Badge>
            ))}
            {tags.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 2}
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-5 pt-0 flex items-center justify-between text-sm text-muted-foreground">
          <div className="text-sm font-medium">By {author}</div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 group-hover:text-rose-500 transition-colors">
              <Heart className="w-3.5 h-3.5" /> {likes}
            </span>
            <span className="flex items-center gap-1.5 group-hover:text-sky-500 transition-colors">
              <MessageSquare className="w-3.5 h-3.5" /> {comments}
            </span>
            <span className="flex items-center gap-1.5 group-hover:text-amber-500 transition-colors">
              <Eye className="w-3.5 h-3.5" /> {views}
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default StoryCard;
