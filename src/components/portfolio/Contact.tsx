import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourusername",
      color: "hover:text-gray-900"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section className="py-20 bg-secondary/10 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 particle-bg opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="neon-text">Connect</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Whether you want to collaborate or just say hello, I'd love to hear from you!
          </p>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="group">
                  <a 
                    href={item.href}
                    className="flex flex-col items-center p-6 card-gradient rounded-xl shadow-soft hover:shadow-neon transition-all duration-300 hover-neon group"
                  >
                    <div className="bg-primary/10 border border-primary/30 p-4 rounded-full mb-4 group-hover:bg-primary/20 group-hover:neon-glow transition-all duration-300">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.label}</h3>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      {item.value}
                    </p>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <Button
                  key={index}
                  variant="neon"
                  size="icon"
                  className={`h-12 w-12 rounded-full hover:scale-110 transition-all duration-300 hover-neon ${link.color}`}
                  onClick={() => window.open(link.href, '_blank')}
                >
                  <IconComponent className="h-5 w-5" />
                </Button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="card-gradient p-8 rounded-xl shadow-soft neon-border">
            <h3 className="text-2xl font-bold mb-4">Ready to start a project?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your ideas and bring them to life together.
            </p>
            <Button 
              variant="hero"
              size="lg"
              onClick={() => window.open('mailto:your.email@example.com?subject=Project Inquiry', '_blank')}
              className="hover-neon"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;