import Hero from "@/components/portfolio/Hero";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import Analytics from "@/components/portfolio/Analytics";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Analytics />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
