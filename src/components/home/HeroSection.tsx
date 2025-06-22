
import { Sparkles, Code, Zap } from "lucide-react";
import MissionCard from "./MissionCard";
import ActionButtons from "./ActionButtons";
import SocialLinks from "./SocialLinks";

interface HeroSectionProps {
  isVisible: boolean;
  missionText: string;
  hasResume: boolean;
  onEditMissionClick: () => void;
  onDownloadResume: () => void;
  onRemoveResume: () => void;
}

const HeroSection = ({ 
  isVisible, 
  missionText, 
  hasResume, 
  onEditMissionClick, 
  onDownloadResume, 
  onRemoveResume 
}: HeroSectionProps) => {
  return (
    <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
      <div className="space-y-6">
        {/* Animated greeting */}
        <div className="flex items-center space-x-2 text-white/90">
          <Sparkles className="h-6 w-6 animate-pulse text-blue-400" />
          <span className="text-lg font-medium tracking-wide">Welcome to my digital space</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Hello, I'm
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 relative">
            DINESH KUMAR S
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transform scale-x-0 animate-[scale-x-100_1s_ease-out_1s_forwards]"></div>
          </span>
        </h1>
        
        <div className="flex items-start space-x-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2 text-blue-300">
              <Code className="h-5 w-5" />
              <span className="text-lg font-medium">Tech Enthusiast</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-300">
              <Zap className="h-5 w-5" />
              <span className="text-lg font-medium">Innovation Driver</span>
            </div>
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
          A tech enthusiast bridging Electronics, AI, and Data Science to build smart, impactful solutions.
        </p>
      </div>

      <MissionCard 
        missionText={missionText} 
        onEditClick={onEditMissionClick} 
      />

      <ActionButtons 
        hasResume={hasResume}
        onDownloadResume={onDownloadResume}
        onRemoveResume={onRemoveResume}
      />

      <SocialLinks />
    </div>
  );
};

export default HeroSection;
