
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about bridging the gap between hardware and software to create intelligent solutions
            </p>
          </div>

          <div className="grid gap-8">
            {/* Education Card */}
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900">
                  <GraduationCap className="mr-3 h-8 w-8 text-indigo-600" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    B.E in Electronics and Communication Engineering
                  </h3>
                  <p className="text-gray-700 mb-2">
                    P.T. Lee Chengalvaraya Naicker College of Engineering & Technology
                  </p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>2022 - 2026</span>
                  </div>
                  <p className="text-gray-700">
                    Currently pursuing my final year with a focus on IoT systems, embedded programming, 
                    and AI integration in hardware applications.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Bio Card */}
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">My Journey</CardTitle>
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
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Goals & Aspirations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-indigo-600">Short-term Goals</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Master advanced AI/ML frameworks</li>
                      <li>• Develop industry-ready IoT solutions</li>
                      <li>• Contribute to open-source projects</li>
                      <li>• Build a strong professional network</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-indigo-600">Long-term Vision</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Lead innovative tech solutions</li>
                      <li>• Bridge academia and industry</li>
                      <li>• Mentor emerging engineers</li>
                      <li>• Create sustainable smart systems</li>
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
