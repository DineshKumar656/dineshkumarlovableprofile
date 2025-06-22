
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface MissionEditDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  editingMission: string;
  onMissionChange: (mission: string) => void;
  onSave: () => void;
}

const MissionEditDialog = ({ 
  isOpen, 
  onOpenChange, 
  editingMission, 
  onMissionChange, 
  onSave 
}: MissionEditDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Mission Statement</DialogTitle>
          <DialogDescription>
            Update your personal mission statement.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="mission-text" className="text-right mt-2">Mission</Label>
            <Textarea
              id="mission-text"
              value={editingMission}
              onChange={(e) => onMissionChange(e.target.value)}
              className="col-span-3"
              rows={5}
              placeholder="Enter your mission statement..."
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={onSave}>
            Save Mission
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MissionEditDialog;
