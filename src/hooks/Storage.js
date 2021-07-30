import React, { createContext, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StorageLink = createContext();

export const StorageProvider = ({ children }) => {
  const getLinksSave = async (key) => {
    const myLinks = await AsyncStorage.getItem(key);
    let likeSaves = JSON.parse(myLinks) || [];
    return likeSaves;
  };

  const saveLink = async (key, newLink) => {
    let likeStored = await getLinksSave(key);

    const hasLink = likeStored.some((Link) => Link.id === newLink.id);

    if (hasLink) {
      return;
    }
    likeStored.push(newLink);

    await AsyncStorage.setItem(key, JSON.stringify(likeStored));
  };

  const deleteLink = async (links, id) => {
    let myLinks = links.filter((item) => {
      return item.id !== id;
    });

    await AsyncStorage.setItem('links', JSON.stringify(myLinks));

    return myLinks;
  };

  return (
    <StorageLink.Provider value={{ getLinksSave, saveLink, deleteLink }}>
      {children}
    </StorageLink.Provider>
  );
};

export function useStorage() {
  const context = useContext(StorageLink);

  return context;
}
