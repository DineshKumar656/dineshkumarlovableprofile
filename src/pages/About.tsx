
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Sparkles, Target, Heart, Zap } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 relative overflow-hidden">
      <Navigation />
      
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Interactive gradient orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-white/20 to-blue-200/20 rounded-full blur-3xl animate-pulse transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.3}px)`,
            top: '-15%',
            right: '-15%'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-l from-white/15 to-indigo-200/15 rounded-full blur-3xl animate-pulse delay-1000 transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * 0.4}px)`,
            top: '50%',
            left: '-20%'
          }}
        />
        <div 
          className="absolute w-72 h-72 bg-gradient-to-br from-purple-200/20 to-white/10 rounded-full blur-3xl animate-pulse delay-2000 transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * -0.2}px)`,
            bottom: '5%',
            right: '15%'
          }}
        />
      </div>
      
      <div className="pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced hero section */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="flex justify-center items-center space-x-3 mb-6">
              <Heart className="h-8 w-8 text-white animate-pulse" />
              <span className="text-white/90 font-semibold text-lg tracking-wide uppercase">Personal Story</span>
              <Heart className="h-8 w-8 text-white animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 relative">
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">
                About
              </span>
              <span className="text-white"> Me</span>
              
              {/* Decorative underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full"></div>
            </h1>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed">
                Passionate about bridging the gap between hardware and software to create intelligent solutions
              </p>
              
              {/* Feature highlights */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Target className="h-5 w-5 text-white" />
                  <span className="text-white font-medium">Goal-Oriented</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Zap className="h-5 w-5 text-white" />
                  <span className="text-white font-medium">Innovation-Driven</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <Sparkles className="h-5 w-5 text-white" />
                  <span className="text-white font-medium">Creative Problem Solver</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8">
            {/* Education Card */}
            <Card className={`shadow-xl border-0 bg-white/90 backdrop-blur-sm transform transition-all duration-1000 delay-300 hover:scale-105 hover:shadow-2xl ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mr-4">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    B.E in Electronics and Communication Engineering
                  </h3>
                  <p className="text-gray-700 mb-2 font-medium">
                    P.T. Lee Chengalvaraya Naicker College of Engineering & Technology
                  </p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>2022 - 2026</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Currently pursuing my final year with a focus on IoT systems, embedded programming, 
                    and AI integration in hardware applications.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Bio Card */}
            <Card className={`shadow-xl border-0 bg-white/90 backdrop-blur-sm transform transition-all duration-1000 delay-500 hover:scale-105 hover:shadow-2xl ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mr-3">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  My Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  As a final-year Electronics and Communication Engineering student, I've developed a unique 
                  perspective that combines hardware expertise with modern software development. My passion 
                  lies in creating smart systems that can monitor, analyze, and respond to real-world conditions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Through various projects involving IoT sensors, AI analytics, and data visualization, 
                  I've gained hands-on experience in building end-to-end solutions. From developing smart 
                  irrigation systems to creating AI-powered conversation bots, I enjoy tackling challenges 
                  that require both technical depth and creative problem-solving.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My goal is to become a cross-domain professional who can seamlessly integrate electronics, 
                  artificial intelligence, and data science to build impactful solutions that make a difference 
                  in people's lives.
                </p>
              </CardContent>
            </Card>

            {/* Goals & Aspirations */}
            <Card className={`shadow-xl border-0 bg-white/90 backdrop-blur-sm transform transition-all duration-1000 delay-700 hover:scale-105 hover:shadow-2xl ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg mr-3">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  Goals & Aspirations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4 bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
                    <h4 className="text-lg font-semibold text-green-700 flex items-center">
                      <Zap className="h-5 w-5 mr-2" />
                      Short-term Goals
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                        Master advanced AI/ML frameworks
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                        Develop industry-ready IoT solutions
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                        Contribute to open-source projects
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                        Build a strong professional network
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
                    <h4 className="text-lg font-semibold text-blue-700 flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      Long-term Vision
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                        Lead innovative tech solutions
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                        Bridge academia and industry
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                        Mentor emerging engineers
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                        Create sustainable smart systems
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
