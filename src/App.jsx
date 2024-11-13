import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Menu,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ProjectCard } from "@/components/project-card";
import { SkillCard } from "@/components/skill-card";
import {
  personalInfo,
  education,
  experience,
  projects,
  skills,
} from "@/data/portfolio-data";

function NavLinks() {
  return (
    <>
      <a href="#education" className="hover:text-primary transition-colors">
        Education
      </a>
      <a href="#experience" className="hover:text-primary transition-colors">
        Experience
      </a>
      <a href="#projects" className="hover:text-primary transition-colors">
        Projects
      </a>
      <a href="#skills" className="hover:text-primary transition-colors">
        Skills
      </a>
      <a href="#contact" className="hover:text-primary transition-colors">
        Contact
      </a>
    </>
  );
}

function App() {
  const [isVisible, setIsVisible] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      const sections = document.querySelectorAll(".animate-section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;
        setIsVisible((prev) => ({ ...prev, [section.id]: isVisible }));
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-xl font-bold gradient-text">
              MK
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <NavLinks />
              <ThemeToggle />
            </div>
            <div className="md:hidden flex items-center">
              <ThemeToggle />
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-2">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-4 mt-8">
                    <NavLinks />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-16">
        <div className="text-center animate-float">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            {personalInfo.name}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            {personalInfo.title}
          </p>
          <div className="flex justify-center space-x-4 mb-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              asChild
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              asChild
            >
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              asChild
            >
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <Button className="rounded-full" size="lg" asChild>
            <a href="/resume.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className={`py-20 px-4 animate-section ${
          isVisible.education
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } transition-all duration-1000`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="glass p-6 rounded-xl hover-card">
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-muted-foreground mt-2">{edu.school}</p>
                <div className="flex items-center gap-2 mt-4 text-sm">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">
                    GPA: {edu.gpa}
                  </span>
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {edu.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-20 px-4 animate-section ${
          isVisible.experience
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } transition-all duration-1000`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="glass p-6 rounded-xl hover-card">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-muted-foreground">
                  {exp.company} | {exp.location}
                </p>
                <p className="text-muted-foreground mb-4">{exp.date}</p>
                <ul className="list-disc list-inside text-muted-foreground">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 px-4 animate-section ${
          isVisible.projects
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } transition-all duration-1000`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            Projects
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["all", "fullstack", "backend", "system"].map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="capitalize rounded-full"
              >
                {category === "all" ? "All Projects" : category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 px-4 animate-section ${
          isVisible.skills
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } transition-all duration-1000`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 px-4 animate-section ${
          isVisible.contact
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } transition-all duration-1000`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to collaborate or discuss opportunities?
          </p>
          <div className="flex flex-col items-center space-y-4">
            <Button size="lg" className="rounded-full" asChild>
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
            </Button>
            <div className="flex space-x-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
