
import { useState, useEffect } from 'react';

export const usePersistentStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error loading ${key} from localStorage:`, error);
      return defaultValue;
    }
  });

  const updateValue = (newValue: T | ((prev: T) => T)) => {
    try {
      const updatedValue = typeof newValue === 'function' 
        ? (newValue as (prev: T) => T)(value) 
        : newValue;
      
      setValue(updatedValue);
      localStorage.setItem(key, JSON.stringify(updatedValue));
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error);
    }
  };

  return [value, updateValue] as const;
};
