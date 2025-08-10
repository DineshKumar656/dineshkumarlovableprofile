
import React from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Lock, Unlock } from "lucide-react";
import { useEditModeContext } from "@/contexts/EditModeContext";

const EditModeToggle = () => {
  const { isEditMode, toggleEditMode } = useEditModeContext();

  // Simple Edit Mode toggle - no authentication required
  return (
    <div className="fixed bottom-6 left-6 z-[9999] flex items-center space-x-3 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-2xl border-2 border-gray-200">
      <div className="flex items-center space-x-2">
        {isEditMode ? (
          <Unlock className="h-4 w-4 text-green-600" />
        ) : (
          <Lock className="h-4 w-4 text-gray-600" />
        )}
        <Label htmlFor="edit-mode" className="text-sm font-medium">
          Edit Mode
        </Label>
        <Switch
          id="edit-mode"
          checked={isEditMode}
          onCheckedChange={toggleEditMode}
        />
      </div>
    </div>
  );
};

export default EditModeToggle;
