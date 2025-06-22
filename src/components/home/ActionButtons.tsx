
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Trash2 } from "lucide-react";
import { useEditModeContext } from "@/contexts/EditModeContext";

interface ActionButtonsProps {
  hasResume: boolean;
  onDownloadResume: () => void;
  onRemoveResume: () => void;
}

const ActionButtons = ({ hasResume, onDownloadResume, onRemoveResume }: ActionButtonsProps) => {
  const { isEditMode, isAuthenticated } = useEditModeContext();

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex items-center gap-2">
        <Button 
          onClick={onDownloadResume}
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Download className="mr-2 h-5 w-5" />
          {hasResume ? 'Download Resume' : 'No Resume Available'}
        </Button>
        {isEditMode && isAuthenticated && hasResume && (
          <Button
            onClick={onRemoveResume}
            variant="outline"
            size="sm"
            className="border-red-300 text-red-200 hover:bg-red-900/20 px-3 py-4"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Link to="/projects">
        <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          View Projects
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </div>
  );
};

export default ActionButtons;
