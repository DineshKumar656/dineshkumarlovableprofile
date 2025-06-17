
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cpu, Users } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("programming");

  const skillCategories = {
    programming: {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "C++", level: 80 },
        { name: "MATLAB", level: 75 },
      ]
    },
    tools: {
      title: "Tools & Platforms",
      icon: Database,
      skills: [
        { name: "Power BI", level: 88 },
        { name: "Tableau", level: 82 },
        { name: "Excel (AI)", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "Flask", level: 80 },
        { name: "Blynk", level: 85 },
        { name: "ThingSpeak", level: 83 },
      ]
    },
    iot: {
      title: "IoT/AI Frameworks",
      icon: Cpu,
      skills: [
        { name: "ESP32", level: 87 },
        { name: "NodeMCU", level: 85 },
        { name: "OpenWeatherMap API", level: 80 },
        { name: "Telegram Bot API", level: 82 },
      ]
    },
    soft: {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Team Management", level: 85 },
        { name: "Communication", level: 90 },
        { name: "Presentation", level: 88 },
        { name: "Problem Solving", level: 92 },
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Skills & Expertise
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit spanning programming, IoT, AI, and interpersonal skills
            </p>
          </div>

          {/* Category Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center px-6 py-3 rounded-full transition-all ${
                    activeCategory === key
                      ? 'bg-purple-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-purple-50 shadow-md'
                  }`}
                >
                  <IconComponent className="mr-2 h-5 w-5" />
                  {category.title}
                </button>
              );
            })}
          </div>

          {/* Skills Display */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-gray-900">
                {React.createElement(skillCategories[activeCategory].icon, {
                  className: "mr-3 h-8 w-8 text-purple-600"
                })}
                {skillCategories[activeCategory].title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <Badge variant="secondary">{skill.level}%</Badge>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Additional Skills Overview */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">4+</div>
                <div className="text-gray-700">Programming Languages</div>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-gray-700">Tools & Platforms</div>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-gray-700">Major Projects</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
