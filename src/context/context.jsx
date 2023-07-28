import { createContext, useContext, useState } from "react";

const CharacterAnimationsContext = createContext({});

export const CharacterAnimationsProvider = ({ children }) => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animations1, setAnimations] = useState([]);

  return (
    <CharacterAnimationsContext.Provider
      value={{
        animationIndex,
        setAnimationIndex,
        animations1,
        setAnimations,
      }}
    >
      {children}
    </CharacterAnimationsContext.Provider>
  );
};

export const useCharacterAnimations = () => {
  return useContext(CharacterAnimationsContext);
};