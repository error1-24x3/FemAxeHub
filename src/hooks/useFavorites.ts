"use client";

import { useState, useEffect, useCallback } from 'react';

const FAVORITES_KEY = 'femAxeHub_favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const storedFavorites = localStorage.getItem(FAVORITES_KEY);
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('Failed to parse favorites from localStorage', error);
      setFavorites([]);
    }
  }, []);

  const updateLocalStorage = (newFavorites: string[]) => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Failed to save favorites to localStorage', error);
    }
  };

  const addFavorite = useCallback((artistId: string) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(artistId)) {
        return prevFavorites;
      }
      const newFavorites = [...prevFavorites, artistId];
      updateLocalStorage(newFavorites);
      return newFavorites;
    });
  }, []);

  const removeFavorite = useCallback((artistId: string) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.filter((id) => id !== artistId);
      updateLocalStorage(newFavorites);
      return newFavorites;
    });
  }, []);
  
  const isFavorite = useCallback((artistId: string) => {
    return favorites.includes(artistId);
  }, [favorites]);

  const toggleFavorite = useCallback((artistId: string) => {
    setFavorites((currentFavorites) => {
      const isCurrentlyFavorite = currentFavorites.includes(artistId);
      const newFavorites = isCurrentlyFavorite
        ? currentFavorites.filter(id => id !== artistId)
        : [...currentFavorites, artistId];
      updateLocalStorage(newFavorites);
      return newFavorites;
    });
  }, []);

  return { favorites, toggleFavorite, isFavorite };
};
