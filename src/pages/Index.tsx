import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Download, ArrowRight, Github, Linkedin, Mail, Sparkles, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";
const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth * 100,
        y: e.clientY / window.innerHeight * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 relative overflow-hidden">
      <Navigation />
      
      {/* Enhanced animated background with mouse parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 2}s`
        }} />)}
        </div>
        
        {/* Interactive gradient orbs */}
        <div className="absolute w-96 h-96 bg-gradient-to-r from-white/20 to-yellow-200/20 rounded-full blur-3xl animate-pulse transition-transform duration-1000 ease-out" style={{
        transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.3}px)`,
        top: '-10%',
        right: '-10%'
      }} />
        <div className="absolute w-80 h-80 bg-gradient-to-l from-white/15 to-purple-200/15 rounded-full blur-3xl animate-pulse delay-1000 transition-transform duration-1000 ease-out" style={{
        transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * 0.4}px)`,
        top: '40%',
        left: '-15%'
      }} />
        <div className="absolute w-64 h-64 bg-gradient-to-br from-blue-200/20 to-white/10 rounded-full blur-3xl animate-pulse delay-2000 transition-transform duration-1000 ease-out" style={{
        transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * -0.2}px)`,
        bottom: '10%',
        right: '20%'
      }} />
      </div>

      <div className="relative z-10 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            
            {/* Enhanced Left Content */}
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
              <div className="space-y-6">
                {/* Animated greeting */}
                <div className="flex items-center space-x-2 text-white/90">
                  <Sparkles className="h-6 w-6 animate-pulse" />
                  <span className="text-lg font-medium tracking-wide">Welcome to my digital space</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                  Hello, I'm
                  <br />
                  <span className="text-orange-600 relative">
                    DINESH KUMAR S
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full transform scale-x-0 animate-[scale-x-100_1s_ease-out_1s_forwards]"></div>
                  </span>
                </h1>
                
                <div className="flex items-start space-x-4">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2 text-white/80">
                      <Code className="h-5 w-5" />
                      <span className="text-lg">Tech Enthusiast</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/80">
                      <Zap className="h-5 w-5" />
                      <span className="text-lg">Innovation Driver</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
                  A tech enthusiast bridging Electronics, AI, and Data Science to build smart, impactful solutions.
                </p>
              </div>

              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-1 h-16 bg-gradient-to-b from-orange-400 to-red-400 rounded-full"></div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">My Mission</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Final-year ECE student passionate about smart systems, real-time IoT monitoring, and AI-based analytics. 
                        My goal is to become a cross-domain professional, using modern technology to solve real-world challenges.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
                <Link to="/projects">
                  <Button variant="outline" className="border-2 border-white/80 text-gray-700 hover:bg-white/90 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <div className="flex space-x-8">
                <a href="https://linkedin.com" className="text-white hover:text-orange-200 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                  <Linkedin className="h-8 w-8" />
                </a>
                <a href="https://github.com" className="text-white hover:text-orange-200 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                  <Github className="h-8 w-8" />
                </a>
                <a href="mailto:dineshkumar22106007@gmail.com" className="text-white hover:text-orange-200 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                  <Mail className="h-8 w-8" />
                </a>
              </div>
            </div>

            {/* Enhanced Right Content - Profile Image and Stats */}
            <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
              <div className="relative">
                {/* Enhanced Profile Image with tech-themed background */}
                <div className="w-80 h-80 mx-auto relative">
                  {/* Tech-themed background with code patterns */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-full opacity-90">
                    {/* Code pattern overlay */}
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-green-400/10 via-blue-400/10 to-purple-400/10 flex items-center justify-center text-green-400/30 text-xs font-mono overflow-hidden">
                      <div className="absolute inset-0 flex flex-col justify-around text-[8px] leading-3 px-4 py-4 opacity-60">
                        <div>{'const developer = {'}</div>
                        <div>{'  name: "Dinesh",'}</div>
                        <div>{'  skills: ["React",'}</div>
                        <div>{'    "TypeScript",'}</div>
                        <div>{'    "AI/ML", "IoT"],'}</div>
                        <div>{'  passion: "Innovation"'}</div>
                        <div>{'};'}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Glowing border container */}
                  <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-white/5 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center relative overflow-hidden group">
                    {/* Animated glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full animate-pulse"></div>
                    
                    {/* Profile photo with better positioning */}
                    <Avatar className="w-72 h-72 relative z-10 transition-all duration-300 group-hover:scale-105">
                      <AvatarImage src="https://i.postimg.cc/xdjSLxvZ/IMG-20240924-WA0068.jpg" alt="Dinesh Kumar S" className="object-cover object-center rounded-full" style={{
                      objectPosition: '50% 20%'
                    }} />
                      <AvatarFallback className="bg-gradient-to-br from-gray-200 to-gray-300 text-gray-600 text-lg font-medium">
                        DK
                      </AvatarFallback>
                    </Avatar>
                    
                    {/* Rotating tech icons around the border */}
                    <div className="absolute inset-0 animate-spin" style={{
                    animationDuration: '20s'
                  }}>
                      <Code className="absolute top-4 left-1/2 transform -translate-x-1/2 h-4 w-4 text-orange-400" />
                      <Zap className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-yellow-400" />
                      <Sparkles className="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-4 w-4 text-pink-400" />
                    </div>
                  </div>
                  
                  {/* Outer rotating border effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 animate-spin opacity-60" style={{
                  animationDuration: '8s'
                }}></div>
                </div>

                {/* Enhanced Floating Stats Cards */}
                <Card className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-sm text-orange-600 font-medium">UI/UX</div>
                      <div className="font-bold text-gray-800 text-lg">Designer</div>
                      <div className="w-8 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mx-auto mt-2"></div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="absolute bottom-8 -left-10 bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="text-sm text-gray-600 font-medium">Great Projects</div>
                    </div>
                    <div className="font-bold text-2xl text-gray-800 mt-1">10+ Done</div>
                    <div className="text-xs text-green-600 font-medium">95% success rate</div>
                  </CardContent>
                </Card>

                <Card className="absolute bottom-20 -right-10 bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">G</span>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600">Google</div>
                        <div className="text-sm font-semibold text-gray-800">Certified Pro</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Enhanced scroll indicator */}
          <div className="text-center mt-16">
            <div className="inline-block animate-bounce">
              <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center relative">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
              </div>
              <p className="text-white/70 text-sm mt-2 font-medium">Scroll to explore</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Index;