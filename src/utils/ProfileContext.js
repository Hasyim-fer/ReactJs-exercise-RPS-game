// ProfileContext.js
import React, {createContext, useState, useContext} from "react";

// Create a new context
const ProfileContext = createContext();

// Custom hook to access the context values
export const useProfile = () => useContext(ProfileContext);

// Provider component to wrap a components with the context
export const ProfileProvider = ({children}) => {
  // Define state to manage the profile visibility
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Function to toggle the profile visibility
  const toggleProfile = () => {
    setIsProfileOpen((prevState) => !prevState);
  };

  // Provide the context value to the children components
  return <ProfileContext.Provider value={{isProfileOpen, toggleProfile}}>{children}</ProfileContext.Provider>;
};
