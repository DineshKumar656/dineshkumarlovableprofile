
import React, { createContext, useContext } from 'react';
import { useEditMode } from '@/hooks/useEditMode';

interface EditModeContextType {
  isEditMode: boolean;
  isAuthenticated: boolean;
}

const EditModeContext = createContext<EditModeContextType | undefined>(undefined);

export const EditModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isEditMode, isAuthenticated } = useEditMode();

  return (
    <EditModeContext.Provider value={{ isEditMode, isAuthenticated }}>
      {children}
    </EditModeContext.Provider>
  );
};

export const useEditModeContext = () => {
  const context = useContext(EditModeContext);
  if (context === undefined) {
    throw new Error('useEditModeContext must be used within an EditModeProvider');
  }
  return context;
};
