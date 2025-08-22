import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadResume = () => {
    // Track download event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'resume_download', {
        event_category: 'engagement',
        event_label: 'resume_pdf'
      });
    }
    
    // For now, show a toast - you can replace with actual resume file
    alert("Resume download will be implemented with your actual resume file!");
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden particle-bg">
      {/* Background gradient with neon overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Animated neon orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full animate-float blur-xl neon-glow" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full animate-float blur-2xl" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-20 w-24 h-24 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full animate-float blur-lg" style={{ animationDelay: '2s' }} />
      
      {/* Additional particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-accent rounded-full animate-ping opacity-40" />
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/50 rounded-full animate-bounce opacity-50" />

      <div className="container mx-auto px-6 z-10 relative">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="neon-text neon-pulse">
              Your Name
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary mb-8 leading-relaxed font-medium">
            Full Stack Developer & UI/UX Designer
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I create beautiful, functional digital experiences that solve real-world problems. 
            Passionate about <span className="text-primary font-semibold">clean code</span>, <span className="text-accent font-semibold">intuitive design</span>, and cutting-edge technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="lg"
              onClick={handleDownloadResume}
              className="group shadow-glass hover:shadow-hover transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            
            <Button 
              variant="neon" 
              size="lg"
              onClick={scrollToProjects}
              className="group transition-all duration-300 hover-neon"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce group-hover:animate-pulse" />
            </Button>
          </div>

          {/* Scroll indicator with neon effect */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center neon-border">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse neon-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;