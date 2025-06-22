
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Code, Zap, Sparkles } from "lucide-react";

const ProfileImage = () => {
  return (
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
        
        {/* Profile photo with improved positioning for face visibility */}
        <Avatar className="w-72 h-72 relative z-10 transition-all duration-300 group-hover:scale-105">
          <AvatarImage 
            src="https://i.postimg.cc/WbKTj6y3/SD-name-Logo.jpg" 
            alt="Dinesh Kumar S" 
            className="object-cover rounded-full scale-110 translate-y-[-10px]"
            style={{
              objectPosition: '50% 35%',
              objectFit: 'cover'
            }} 
          />
          <AvatarFallback className="bg-gradient-to-br from-gray-200 to-gray-300 text-gray-600 text-lg font-medium">
            DK
          </AvatarFallback>
        </Avatar>
        
        {/* Rotating tech icons around the border */}
        <div className="absolute inset-0 animate-spin" style={{
          animationDuration: '20s'
        }}>
          <Code className="absolute top-4 left-1/2 transform -translate-x-1/2 h-4 w-4 text-blue-400" />
          <Zap className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-yellow-400" />
          <Sparkles className="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-4 w-4 text-purple-400" />
        </div>
      </div>
      
      {/* Outer rotating border effect */}
      <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 animate-spin opacity-60" style={{
        animationDuration: '8s'
      }}></div>
    </div>
  );
};

export default ProfileImage;
