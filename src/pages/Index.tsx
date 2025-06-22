
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";
import { useEditModeContext } from "@/contexts/EditModeContext";
import { useFileStorage } from "@/hooks/useFileStorage";
import { usePersistentStorage } from "@/hooks/usePersistentStorage";
import AnimatedBackground from "@/components/home/AnimatedBackground";
import HeroSection from "@/components/home/HeroSection";
import ProfileImage from "@/components/home/ProfileImage";
import FloatingStats from "@/components/home/FloatingStats";
import ScrollIndicator from "@/components/home/ScrollIndicator";
import ResumeDialog from "@/components/home/ResumeDialog";
import MissionEditDialog from "@/components/home/MissionEditDialog";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isResumeDialogOpen, setIsResumeDialogOpen] = useState(false);
  const [isMissionEditOpen, setIsMissionEditOpen] = useState(false);
  const [editingMission, setEditingMission] = useState("");
  const { toast } = useToast();
  const { isEditMode, isAuthenticated } = useEditModeContext();
  const { saveFile: saveResume, getLatestFile: getLatestResume, deleteFile: deleteResume } = useFileStorage('portfolio_resume');
  
  const defaultMission = "Final-year ECE student passionate about smart systems, real-time IoT monitoring, and AI-based analytics. My goal is to become a cross-domain professional, using modern technology to solve real-world challenges.";
  const [missionText, setMissionText] = usePersistentStorage('portfolio_mission', defaultMission);

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

  const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        await saveResume(file);
        setIsResumeDialogOpen(false);
        toast({
          title: "Resume Uploaded",
          description: "Your resume has been uploaded and saved successfully!",
        });
      } catch (error) {
        console.error('Resume upload error:', error);
        toast({
          title: "Upload Failed",
          description: "Failed to upload resume. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  const handleRemoveResume = () => {
    if (!isEditMode || !isAuthenticated) {
      toast({
        title: "Access Denied",
        description: "Please login as admin and enable edit mode to remove resume.",
        variant: "destructive",
      });
      return;
    }

    const latestResume = getLatestResume();
    if (latestResume) {
      deleteResume(latestResume.name);
      toast({
        title: "Resume Removed",
        description: "Your resume has been successfully removed.",
      });
    }
  };

  const handleDownloadResume = () => {
    const latestResume = getLatestResume();
    if (latestResume) {
      const link = document.createElement('a');
      link.href = latestResume.data;
      link.download = latestResume.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Resume Downloaded",
        description: `Downloaded ${latestResume.name}`,
      });
    } else {
      if (isEditMode && isAuthenticated) {
        setIsResumeDialogOpen(true);
      } else {
        toast({
          title: "No Resume Available",
          description: "No resume has been uploaded yet.",
          variant: "destructive",
        });
      }
    }
  };

  const handleSaveMission = () => {
    setMissionText(editingMission);
    setIsMissionEditOpen(false);
    toast({
      title: "Mission Updated",
      description: "Your mission statement has been updated successfully!",
    });
  };

  const handleEditMissionClick = () => {
    setEditingMission(missionText);
    setIsMissionEditOpen(true);
  };

  const latestResume = getLatestResume();

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
              hasResume={!!latestResume}
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

      {/* Resume Upload Dialog - Only show in edit mode */}
      {isEditMode && isAuthenticated && (
        <ResumeDialog 
          isOpen={isResumeDialogOpen}
          onOpenChange={setIsResumeDialogOpen}
          onResumeUpload={handleResumeUpload}
        />
      )}

      {/* Mission Edit Dialog - Only show in edit mode */}
      {isEditMode && isAuthenticated && (
        <MissionEditDialog 
          isOpen={isMissionEditOpen}
          onOpenChange={setIsMissionEditOpen}
          editingMission={editingMission}
          onMissionChange={setEditingMission}
          onSave={handleSaveMission}
        />
      )}
    </div>
  );
};

export default Index;
