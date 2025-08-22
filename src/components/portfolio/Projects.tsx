import { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Sample projects - replace with your actual projects
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "Socket.io", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "D3.js", "OpenWeather API", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project"
    },
    {
      title: "Social Media Dashboard",
      description: "An analytics dashboard for social media management with real-time metrics, post scheduling, and engagement tracking.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Python", "Django", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project"
    },
    {
      title: "AI Chat Application",
      description: "An intelligent chat application powered by AI with natural language processing and conversation memory.",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "OpenAI API", "Prisma", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with smooth animations, dark mode, and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of my recent work showcasing different technologies, design approaches, 
            and problem-solving skills. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16 scroll-reveal">
          <p className="text-muted-foreground mb-6">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          <button 
            onClick={() => window.open('https://github.com/yourusername', '_blank')}
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-soft hover:shadow-hover"
          >
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;