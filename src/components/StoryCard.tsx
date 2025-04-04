
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageSquare, Eye } from "lucide-react";

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
      <Card className="overflow-hidden h-full border border-border/50 transition-all duration-300 hover:shadow-md hover:shadow-tale-purple/10 hover:border-tale-purple/30">
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <img
            src={coverImage}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <div className="space-y-2">
            <h3 className="font-serif text-xl font-semibold leading-tight text-foreground group-hover:text-tale-purple transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {excerpt}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-tale-light-purple text-tale-deep-purple">
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
        <CardFooter className="p-4 pt-0 flex items-center justify-between text-sm text-muted-foreground">
          <div className="text-sm font-medium">By {author}</div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5" /> {likes}
            </span>
            <span className="flex items-center gap-1">
              <MessageSquare className="w-3.5 h-3.5" /> {comments}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" /> {views}
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default StoryCard;
