
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Cpu, Brain, Settings, PresentationChart, Database } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Data Visualization with BI Tools",
      description: "Transform raw data into compelling visual stories using Power BI, Tableau, and advanced Excel features.",
      features: [
        "Interactive dashboards and reports",
        "Real-time data monitoring",
        "Custom KPI tracking",
        "Automated reporting systems"
      ],
      color: "blue"
    },
    {
      icon: Cpu,
      title: "IoT & Sensor-Based Development",
      description: "Design and develop intelligent IoT solutions with real-time monitoring and cloud integration.",
      features: [
        "ESP32/NodeMCU programming",
        "Sensor integration and calibration",
        "Cloud connectivity (Firebase, Blynk)",
        "Mobile app integration"
      ],
      color: "green"
    },
    {
      icon: Brain,
      title: "AI Integration for Smart Systems",
      description: "Implement AI and machine learning algorithms to create intelligent decision-making systems.",
      features: [
        "Predictive analytics implementation",
        "AI model development and training",
        "Natural language processing",
        "Computer vision applications"
      ],
      color: "purple"
    },
    {
      icon: Settings,
      title: "Tech-Enabled Automation",
      description: "Build automated systems that streamline processes and improve operational efficiency.",
      features: [
        "Process automation solutions",
        "API development and integration",
        "Workflow optimization",
        "System monitoring and alerts"
      ],
      color: "orange"
    },
    {
      icon: PresentationChart,
      title: "AI-Enhanced Presentations",
      description: "Create impactful presentations and reports enhanced with AI-generated insights and visuals.",
      features: [
        "Data-driven storytelling",
        "Interactive presentation elements",
        "AI-powered content optimization",
        "Professional design and layout"
      ],
      color: "pink"
    },
    {
      icon: Database,
      title: "Database Design & Analytics",
      description: "Design efficient databases and implement analytics solutions for data-driven decision making.",
      features: [
        "Database architecture and design",
        "SQL query optimization",
        "Data pipeline development",
        "Performance analytics"
      ],
      color: "indigo"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      orange: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
      pink: "from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700",
      indigo: "from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What I Can Offer Across Domains
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions spanning data analytics, IoT development, and AI integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border-0 bg-white/80 backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${getColorClasses(service.color)} text-white mb-4 w-fit`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-gray-700 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getColorClasses(service.color)} mr-3 mt-2 flex-shrink-0`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full bg-gradient-to-r ${getColorClasses(service.color)} text-white border-0 transition-all duration-300`}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Let's collaborate to bring your ideas to life with cutting-edge technology solutions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg">
                    Start a Project
                  </Button>
                  <Button variant="outline" className="px-8 py-3 text-lg">
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
