
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";
import { useEditModeContext } from "@/contexts/EditModeContext";
import AnimatedBackground from "@/components/home/AnimatedBackground";
import HeroSection from "@/components/home/HeroSection";
import ProfileImage from "@/components/home/ProfileImage";
import FloatingStats from "@/components/home/FloatingStats";
import ScrollIndicator from "@/components/home/ScrollIndicator";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { toast } = useToast();
  const { isEditMode } = useEditModeContext();
  
  const missionText = "Final-year ECE student passionate about smart systems, real-time IoT monitoring, and AI-based analytics. My goal is to become a cross-domain professional, using modern technology to solve real-world challenges.";

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

  const handleDownloadResume = () => {
    toast({
      title: "No Resume Available",
      description: "Resume functionality has been removed.",
      variant: "destructive",
    });
  };

  const handleRemoveResume = () => {
    // No longer needed
  };

  const handleEditMissionClick = () => {
    toast({
      title: "Mission Edit Disabled",
      description: "Mission editing has been simplified.",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      <Navigation />
      
      <AnimatedBackground mousePosition={mousePosition} />

      <div className="relative z-10 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            
            <HeroSection 
              isVisible={isVisible}
              missionText={missionText}
              hasResume={false}
              onEditMissionClick={handleEditMissionClick}
              onDownloadResume={handleDownloadResume}
              onRemoveResume={handleRemoveResume}
            />

            <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
              <div className="relative">
                <ProfileImage />
                <FloatingStats />
              </div>
            </div>
          </div>

          <ScrollIndicator />
        </div>
      </div>

    </div>
  );
};

export default Index;
