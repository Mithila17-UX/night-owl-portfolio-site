import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone, Star, DollarSign } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [{
    name: "JavaScript",
    level: 95
  }, {
    name: "TypeScript",
    level: 90
  }, {
    name: "React",
    level: 92
  }, {
    name: "Node.js",
    level: 88
  }, {
    name: "Python",
    level: 85
  }, {
    name: "PostgreSQL",
    level: 80
  }];
  const projects = [{
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    demo: "#",
    icon: <Globe className="w-6 h-6" />
  }, {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["TypeScript", "React", "Firebase", "Tailwind"],
    github: "#",
    demo: "#",
    icon: <Smartphone className="w-6 h-6" />
  }, {
    title: "Data Analytics Dashboard",
    description: "Interactive dashboard for data visualization and analytics with real-time charts, filters, and export functionality.",
    technologies: ["Python", "Django", "D3.js", "PostgreSQL"],
    github: "#",
    demo: "#",
    icon: <Database className="w-6 h-6" />
  }];
  const services = [
    {
      title: "Software Application",
      description: "Custom desktop and web applications built with modern technologies",
      startingPrice: "RS.20,000/-",
      negotiable: true,
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Website",
      description: "Responsive websites and web applications with modern design",
      startingPrice: "RS.10,000/-",
      negotiable: true,
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Mobile Application",
      description: "Cross-platform mobile apps for iOS and Android",
      startingPrice: "RS.25,000/-",
      negotiable: true,
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "UI/UX Design",
      description: "User interface and experience design for digital products",
      startingPrice: "Negotiable",
      negotiable: true,
      icon: <Star className="w-6 h-6" />
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-sky-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">Mithila Sanoj</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-sky-400 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-sky-400 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('services')} className="hover:text-sky-400 transition-colors">
                Hire Me
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-sky-400 transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-sky-500 to-cyan-600 mx-auto mb-6 flex items-center justify-center">
              <Code className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">Mithila Sanoj De Silva</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Full-Stack Developer crafting exceptional digital experiences with modern technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={() => scrollToSection('projects')} className="bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              View My Work
            </Button>
            <Button variant="outline" onClick={() => scrollToSection('services')} className="border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 px-8 py-3 rounded-full transition-all duration-300">
              Hire Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with 5+ years of experience creating scalable web applications. 
                I specialize in React, Node.js, and cloud technologies, with a focus on delivering clean, efficient code 
                and exceptional user experiences.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or mentoring fellow developers in the community.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "PostgreSQL", "MongoDB"].map(tech => (
                  <Badge key={tech} variant="secondary" className="bg-slate-800 text-sky-400 border-sky-400/20">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 text-sky-400">Skills & Expertise</h3>
              {skills.map(skill => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-sky-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-sky-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-lg">
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-slate-300 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <Badge key={tech} variant="outline" className="border-sky-400/30 text-sky-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Hire Me Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Hire Me
            </span>
          </h2>
          <p className="text-xl text-slate-300 text-center mb-12 max-w-3xl mx-auto">
            Looking for professional development services? I offer comprehensive solutions for your digital needs.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-slate-300 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-4">
                    <div className="text-2xl font-bold text-sky-400 flex items-center justify-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      {service.startingPrice}
                    </div>
                    {service.negotiable && (
                      <Badge variant="outline" className="border-cyan-400/30 text-cyan-400">
                        Negotiable
                      </Badge>
                    )}
                    <Button className="w-full bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white">
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button className="bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              <Mail className="w-5 h-5 mr-2" />
              Sanojdesilva24065@gmail.com
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-sky-400 rounded-full">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-sky-400 rounded-full">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">© 2025 Mithila Sanoj. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
