
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { useEditModeContext } from "@/contexts/EditModeContext";
import { useToast } from "@/hooks/use-toast";

interface MissionCardProps {
  missionText: string;
  onEditClick: () => void;
}

const MissionCard = ({ missionText, onEditClick }: MissionCardProps) => {
  const { isEditMode, isAuthenticated } = useEditModeContext();
  const { toast } = useToast();

  const handleEditMission = () => {
    if (!isEditMode || !isAuthenticated) {
      toast({
        title: "Access Denied",
        description: "Please login as admin and enable edit mode to modify content.",
        variant: "destructive",
      });
      return;
    }
    onEditClick();
  };

  return (
    <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 relative group">
      {isEditMode && isAuthenticated && (
        <Button
          size="sm"
          variant="outline"
          onClick={handleEditMission}
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0 border-white/30 hover:bg-white/20"
        >
          <Edit className="h-3 w-3 text-white" />
        </Button>
      )}
      <CardContent className="p-8">
        <div className="flex items-start space-x-4">
          <div className="w-1 h-16 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
          <div>
            <h3 className="font-semibold text-white mb-2">My Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              {missionText}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MissionCard;
