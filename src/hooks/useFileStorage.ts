
import { useState, useEffect } from 'react';

interface StoredFile {
  name: string;
  data: string;
  type: string;
  uploadedAt: string;
}

export const useFileStorage = (storageKey: string) => {
  const [files, setFiles] = useState<StoredFile[]>([]);

  useEffect(() => {
    const storedFiles = localStorage.getItem(storageKey);
    if (storedFiles) {
      try {
        setFiles(JSON.parse(storedFiles));
      } catch (error) {
        console.error('Error loading stored files:', error);
      }
    }
  }, [storageKey]);

  const saveFile = (file: File): Promise<StoredFile> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newFile: StoredFile = {
          name: file.name,
          data: e.target?.result as string,
          type: file.type,
          uploadedAt: new Date().toISOString()
        };
        
        const updatedFiles = [...files, newFile];
        setFiles(updatedFiles);
        localStorage.setItem(storageKey, JSON.stringify(updatedFiles));
        resolve(newFile);
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });
  };

  const removeFile = (fileName: string) => {
    const updatedFiles = files.filter(file => file.name !== fileName);
    setFiles(updatedFiles);
    localStorage.setItem(storageKey, JSON.stringify(updatedFiles));
  };

  const getLatestFile = (): StoredFile | null => {
    if (files.length === 0) return null;
    return files.reduce((latest, current) => 
      new Date(current.uploadedAt) > new Date(latest.uploadedAt) ? current : latest
    );
  };

  return {
    files,
    saveFile,
    removeFile,
    getLatestFile
  };
};
