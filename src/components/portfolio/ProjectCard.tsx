import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  liveUrl, 
  githubUrl, 
  featured = false 
}: ProjectCardProps) => {
  return (
    <div className={`group relative bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 hover-lift ${
      featured ? 'md:col-span-2 md:row-span-2' : ''
    }`}>
      {/* Project Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action buttons overlay */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          {liveUrl && (
            <Button 
              size="sm" 
              variant="secondary"
              className="shadow-glass"
              onClick={() => window.open(liveUrl, '_blank')}
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          )}
          {githubUrl && (
            <Button 
              size="sm" 
              variant="secondary"
              className="shadow-glass"
              onClick={() => window.open(githubUrl, '_blank')}
            >
              <Github className="h-4 w-4" />
            </Button>
          )}
        </div>

        {featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium shadow-glass">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex gap-3">
          {liveUrl && (
            <Button 
              variant="default" 
              size="sm"
              onClick={() => window.open(liveUrl, '_blank')}
              className="flex-1"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open(githubUrl, '_blank')}
              className="flex-1"
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;