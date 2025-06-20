
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Lock, Unlock, LogOut, Shield } from "lucide-react";
import { useEditModeContext } from "@/contexts/EditModeContext";
import { useToast } from "@/hooks/use-toast";

const EditModeToggle = () => {
  const { isEditMode, isAuthenticated, authenticate, logout, toggleEditMode } = useEditModeContext();
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const handleAuthenticate = () => {
    if (authenticate(password)) {
      setIsAuthDialogOpen(false);
      setPassword('');
      toast({
        title: "Authentication Successful",
        description: "You can now enable edit mode to modify content.",
      });
    } else {
      toast({
        title: "Authentication Failed",
        description: "Incorrect password. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged Out",
      description: "Edit mode has been disabled and you've been logged out.",
    });
  };

  if (!isAuthenticated) {
    return (
      <>
        <Button
          onClick={() => setIsAuthDialogOpen(true)}
          variant="outline"
          size="sm"
          className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm hover:bg-white/80 border-gray-300"
        >
          <Shield className="h-4 w-4 mr-2" />
          Admin Login
        </Button>

        <Dialog open={isAuthDialogOpen} onOpenChange={setIsAuthDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Admin Authentication</DialogTitle>
              <DialogDescription>
                Enter the admin password to access edit mode.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="col-span-3"
                  onKeyPress={(e) => e.key === 'Enter' && handleAuthenticate()}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAuthDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAuthenticate}>
                Login
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-gray-200">
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
      <Button
        onClick={handleLogout}
        variant="outline"
        size="sm"
        className="h-8 px-3"
      >
        <LogOut className="h-3 w-3 mr-1" />
        Logout
      </Button>
    </div>
  );
};

export default EditModeToggle;
