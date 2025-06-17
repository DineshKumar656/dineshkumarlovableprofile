
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Droplets, Sprout, TrafficCone, Truck, Bot } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Projects Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative solutions spanning IoT, AI, and smart systems development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => {
              const IconComponent = project.icon;
              return (
                <Card 
                  key={project.id} 
                  className={`group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-0 bg-white/80 backdrop-blur-sm ${
                    project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <IconComponent className="h-8 w-8 text-green-600" />
                      {project.featured && (
                        <Badge className="bg-green-600 text-white">Featured</Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-green-600 transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <IconComponent className="h-16 w-16 text-gray-400" />
                    </div>
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline">
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
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl text-gray-900">
                      {selectedProject.title}
                    </CardTitle>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setSelectedProject(null)}
                    >
                      ×
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-6 flex items-center justify-center">
                    {React.createElement(selectedProject.icon, {
                      className: "h-20 w-20 text-gray-400"
                    })}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline">
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
    </div>
  );
};

export default Projects;
