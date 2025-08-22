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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 z-10 relative">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-pulse-glow">
              Your Name
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Full Stack Developer & UI/UX Designer
          </p>
          
          <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            I create beautiful, functional digital experiences that solve real-world problems. 
            Passionate about clean code, intuitive design, and cutting-edge technology.
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
              variant="ghost" 
              size="lg"
              onClick={scrollToProjects}
              className="text-white border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;