import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { ExternalLink, Github, Droplets, Sprout, TrafficCone, Truck, Bot, Sparkles, Zap, Code2, Edit, Trash2, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Project {
  id: number;
  title: string;
  icon: any;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const { toast } = useToast();

  const iconOptions = [
    { name: 'Sprout', component: Sprout },
    { name: 'Droplets', component: Droplets },
    { name: 'TrafficCone', component: TrafficCone },
    { name: 'Truck', component: Truck },
    { name: 'Bot', component: Bot },
    { name: 'Code2', component: Code2 },
    { name: 'Zap', component: Zap }
  ];

  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "Smart Irrigation System Using AI",
      icon: Sprout,
      description: "AI-powered irrigation system with Firebase integration and Telegram notifications for optimal crop watering.",
      longDescription: "Developed an intelligent irrigation system that uses AI algorithms to analyze soil moisture, weather data, and crop requirements. The system automatically controls water distribution and sends real-time updates via Telegram bot. Firebase backend ensures reliable data storage and synchronization.",
      tech: ["Python", "AI/ML", "Firebase", "Telegram API", "IoT Sensors"],
      image: "/api/placeholder/400/250",
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "IoT Water Level Indicator",
      icon: Droplets,
      description: "Smart water level monitoring system with OLED display and Blynk cloud integration for remote monitoring.",
      longDescription: "Created a comprehensive water level monitoring solution using ultrasonic sensors, OLED displays, and cloud connectivity. Users can monitor water levels remotely through the Blynk mobile app and receive alerts when levels are critically low or high.",
      tech: ["ESP32", "Blynk", "OLED", "Ultrasonic Sensors", "IoT"],
      image: "/api/placeholder/400/250",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Smart Traffic Light System",
      icon: TrafficCone,
      description: "Intelligent traffic management system using Wokwi simulation and ThingSpeak for traffic flow optimization.",
      longDescription: "Designed and simulated a smart traffic light system that adapts to real-time traffic conditions. The system uses sensors to detect vehicle density and adjusts light timing accordingly, reducing wait times and improving traffic flow efficiency.",
      tech: ["Wokwi", "ThingSpeak", "Arduino", "Traffic Simulation", "IoT"],
      image: "/api/placeholder/400/250",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Heavy Vehicle Monitoring",
      icon: Truck,
      description: "Real-time heavy vehicle tracking and monitoring system with ESP32, Blynk integration, and alert mechanisms.",
      longDescription: "Developed a comprehensive monitoring system for heavy vehicles including GPS tracking, speed monitoring, and maintenance alerts. The system provides real-time dashboards for fleet managers and automatic notifications for unusual activities.",
      tech: ["ESP32", "Blynk", "GPS", "Sensors", "Fleet Management"],
      image: "/api/placeholder/400/250",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "AI Conversation Bot",
      icon: Bot,
      description: "Intelligent chatbot built with Python featuring natural language processing and context-aware responses.",
      longDescription: "Created an advanced conversational AI bot using Python and natural language processing libraries. The bot can understand context, maintain conversation flow, and provide intelligent responses across various topics.",
      tech: ["Python", "NLP", "Machine Learning", "Chatbot", "AI"],
      image: "/api/placeholder/400/250",
      demoUrl: "#",
      githubUrl: "#"
    }
  ]);

  const [projectForm, setProjectForm] = useState({
    title: '',
    description: '',
    longDescription: '',
    tech: '',
    demoUrl: '',
    githubUrl: '',
    featured: false,
    iconName: 'Code2'
  });

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setProjectForm({
      title: project.title,
      description: project.description,
      longDescription: project.longDescription,
      tech: project.tech.join(', '),
      demoUrl: project.demoUrl,
      githubUrl: project.githubUrl,
      featured: project.featured,
      iconName: iconOptions.find(icon => icon.component === project.icon)?.name || 'Code2'
    });
    setIsEditModalOpen(true);
  };

  const handleDeleteProject = (id: number) => {
    setProjects(prev => prev.filter(project => project.id !== id));
    toast({
      title: "Project Deleted",
      description: "The project has been successfully removed.",
    });
  };

  const handleSaveProject = () => {
    if (!projectForm.title.trim() || !projectForm.description.trim()) {
      toast({
        title: "Error",
        description: "Title and description are required.",
        variant: "destructive",
      });
      return;
    }

    const selectedIcon = iconOptions.find(icon => icon.name === projectForm.iconName)?.component || Code2;
    
    const projectData = {
      title: projectForm.title.trim(),
      description: projectForm.description.trim(),
      longDescription: projectForm.longDescription.trim(),
      tech: projectForm.tech.split(',').map(t => t.trim()).filter(t => t),
      demoUrl: projectForm.demoUrl.trim(),
      githubUrl: projectForm.githubUrl.trim(),
      featured: projectForm.featured,
      icon: selectedIcon,
      image: "/api/placeholder/400/250"
    };

    if (editingProject) {
      setProjects(prev => prev.map(project => 
        project.id === editingProject.id 
          ? { ...project, ...projectData }
          : project
      ));
      toast({
        title: "Project Updated",
        description: "The project has been successfully updated.",
      });
    } else {
      const newProject = {
        ...projectData,
        id: Math.max(...projects.map(p => p.id)) + 1
      };
      setProjects(prev => [...prev, newProject]);
      toast({
        title: "Project Added",
        description: "The new project has been successfully added.",
      });
    }

    setIsEditModalOpen(false);
    setIsAddModalOpen(false);
    setEditingProject(null);
    setProjectForm({
      title: '',
      description: '',
      longDescription: '',
      tech: '',
      demoUrl: '',
      githubUrl: '',
      featured: false,
      iconName: 'Code2'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 relative overflow-hidden">
      <Navigation />
      
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-200/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-teal-200/30 rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-emerald-200/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-green-300/20 rotate-12 animate-pulse delay-500"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-200/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="pt-24 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced hero section */}
          <div className="text-center mb-16">
            <div className="flex justify-center items-center space-x-3 mb-6">
              <Sparkles className="h-8 w-8 text-green-600 animate-pulse" />
              <span className="text-green-600 font-semibold text-lg tracking-wide uppercase">Portfolio</span>
              <Sparkles className="h-8 w-8 text-green-600 animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 relative">
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Projects
              </span>
              <span className="text-gray-900"> Portfolio</span>
              
              {/* Decorative underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
            </h1>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed">
                Innovative solutions spanning IoT, AI, and smart systems development
              </p>
              
              {/* Feature highlights */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Code2 className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 font-medium">Full-Stack Development</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Zap className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700 font-medium">IoT Solutions</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Bot className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700 font-medium">AI Integration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Add New Project Button */}
          <div className="text-center mb-8">
            <Button
              onClick={() => setIsAddModalOpen(true)}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Plus className="mr-2 h-5 w-5" />
              Add New Project
            </Button>
          </div>

          {/* Enhanced project grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => {
              const IconComponent = project.icon;
              return (
                <Card 
                  key={project.id} 
                  className={`group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 ${
                    project.featured ? 'lg:col-span-2 xl:col-span-1 ring-2 ring-green-200' : ''
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <CardHeader className="relative">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300">
                        <IconComponent className="h-8 w-8 text-green-600" />
                      </div>
                      <div className="flex items-center space-x-2">
                        {project.featured && (
                          <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg">
                            ⭐ Featured
                          </Badge>
                        )}
                        <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEditProject(project);
                            }}
                            className="h-8 w-8 p-0"
                          >
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteProject(project.id);
                            }}
                            className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-4 flex items-center justify-center group-hover:from-green-50 group-hover:to-emerald-50 transition-all duration-300 border border-gray-200">
                      <IconComponent className="h-16 w-16 text-gray-400 group-hover:text-green-500 transition-colors duration-300" />
                    </div>
                    <p className="text-gray-700 mb-4 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-green-50 text-green-700 hover:bg-green-100 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="text-xs border-green-200 text-green-600">
                          +{project.tech.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline" className="border-green-200 text-green-700 hover:bg-green-50 transition-all duration-300">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Project Modal */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
              <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
                <CardHeader className="border-b border-gray-100">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl text-gray-900 flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg">
                        {React.createElement(selectedProject.icon, {
                          className: "h-6 w-6 text-green-600"
                        })}
                      </div>
                      <span>{selectedProject.title}</span>
                    </CardTitle>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                    >
                      ✕
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="aspect-video bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl mb-6 flex items-center justify-center border border-green-100">
                    {React.createElement(selectedProject.icon, {
                      className: "h-20 w-20 text-green-500"
                    })}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {selectedProject.longDescription}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-green-100 text-green-800 px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50 transition-all duration-300">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Project Modal */}
      <Dialog open={isEditModalOpen || isAddModalOpen} onOpenChange={(open) => {
        if (!open) {
          setIsEditModalOpen(false);
          setIsAddModalOpen(false);
          setEditingProject(null);
        }
      }}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingProject ? 'Edit Project' : 'Add New Project'}</DialogTitle>
            <DialogDescription>
              {editingProject ? 'Update project details' : 'Add a new project to your portfolio'}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="project-title" className="text-right">Title</Label>
              <Input
                id="project-title"
                value={projectForm.title}
                onChange={(e) => setProjectForm(prev => ({ ...prev, title: e.target.value }))}
                className="col-span-3"
                placeholder="Project title"
              />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="project-description" className="text-right mt-2">Description</Label>
              <Textarea
                id="project-description"
                value={projectForm.description}
                onChange={(e) => setProjectForm(prev => ({ ...prev, description: e.target.value }))}
                className="col-span-3"
                placeholder="Short description"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="project-long-description" className="text-right mt-2">Long Description</Label>
              <Textarea
                id="project-long-description"
                value={projectForm.longDescription}
                onChange={(e) => setProjectForm(prev => ({ ...prev, longDescription: e.target.value }))}
                className="col-span-3"
                placeholder="Detailed description"
                rows={4}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="project-tech" className="text-right">Technologies</Label>
              <Input
                id="project-tech"
                value={projectForm.tech}
                onChange={(e) => setProjectForm(prev => ({ ...prev, tech: e.target.value }))}
                className="col-span-3"
                placeholder="React, Node.js, MongoDB (comma-separated)"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="project-demo" className="text-right">Demo URL</Label>
              <Input
                id="project-demo"
                value={projectForm.demoUrl}
                onChange={(e) => setProjectForm(prev => ({ ...prev, demoUrl: e.target.value }))}
                className="col-span-3"
                placeholder="https://demo.example.com"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="project-github" className="text-right">GitHub URL</Label>
              <Input
                id="project-github"
                value={projectForm.githubUrl}
                onChange={(e) => setProjectForm(prev => ({ ...prev, githubUrl: e.target.value }))}
                className="col-span-3"
                placeholder="https://github.com/username/repo"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="project-featured" className="text-right">Featured</Label>
              <div className="col-span-3">
                <Switch
                  id="project-featured"
                  checked={projectForm.featured}
                  onCheckedChange={(checked) => setProjectForm(prev => ({ ...prev, featured: checked }))}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setIsEditModalOpen(false);
              setIsAddModalOpen(false);
            }}>
              Cancel
            </Button>
            <Button onClick={handleSaveProject}>
              {editingProject ? 'Update Project' : 'Add Project'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
