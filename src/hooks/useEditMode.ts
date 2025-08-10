
import { useState } from 'react';

export const useEditMode = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode(prev => !prev);
  };

  return {
    isEditMode,
    isAuthenticated: true, // Always authenticated for backward compatibility
    authenticate: () => true, // Always return true
    logout: () => setIsEditMode(false), // Just disable edit mode
    toggleEditMode
  };
};
