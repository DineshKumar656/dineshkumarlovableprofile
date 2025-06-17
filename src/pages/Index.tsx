
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-400 to-pink-400">
      <Navigation />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-32 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            
            {/* Left Content */}
            <div className={`space-y-8 transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                  Hello, I'm
                  <br />
                  <span className="text-orange-600">DINESH KUMAR S</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
                  A tech enthusiast bridging Electronics, AI, and Data Science to build smart, impactful solutions.
                </p>
              </div>

              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Final-year ECE student passionate about smart systems, real-time IoT monitoring, and AI-based analytics. 
                    My goal is to become a cross-domain professional, using modern technology to solve real-world challenges.
                  </p>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
                <Link to="/projects">
                  <Button variant="outline" className="border-white text-gray-700 hover:bg-white px-8 py-3 text-lg">
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <div className="flex space-x-6">
                <a href="https://linkedin.com" className="text-white hover:text-orange-200 transition-colors">
                  <Linkedin className="h-8 w-8" />
                </a>
                <a href="https://github.com" className="text-white hover:text-orange-200 transition-colors">
                  <Github className="h-8 w-8" />
                </a>
                <a href="mailto:dineshkumar22106007@gmail.com" className="text-white hover:text-orange-200 transition-colors">
                  <Mail className="h-8 w-8" />
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image and Stats */}
            <div className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}>
              <div className="relative">
                {/* Profile Image Placeholder */}
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-white/20 to-white/10 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-72 h-72 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-lg font-medium">
                    Profile Photo
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <Card className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-600">UI/UX</div>
                      <div className="font-semibold text-gray-800">Designer</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="absolute bottom-8 -left-8 bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="text-sm text-gray-600">Great Project</div>
                    </div>
                    <div className="font-bold text-lg text-gray-800">10+ Done</div>
                    <div className="text-xs text-green-600">95% vs last 7 days</div>
                  </CardContent>
                </Card>

                <Card className="absolute bottom-16 -right-8 bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                  <CardContent className="p-3">
                    <div className="text-xs text-gray-600">Google</div>
                    <div className="text-sm font-semibold text-gray-800">Certified Professional</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="text-center mt-12">
            <div className="inline-block animate-bounce">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
