import { createContext, useState } from "react";

type FavouriteContextType = {
  ids: string[];
  addFav: (id: string) => void;
  removeFav: (id: string) => void;
};

export const FavouriteContext = createContext<FavouriteContextType>({
  ids: [],
  addFav: (id: string) => {},
  removeFav: (id: string) => {},
});

const FavouriteContextProvider = ({ children }: { children: any }) => {
  const [favMealIds, setFavMealIds] = useState<string[]>([]);
  const addFav = (id: string) => {
    setFavMealIds((ids) => [...ids, id]);
  };
  const removeFav = (id: string) => {
        setFavMealIds((ids) => ids.filter((mailId=> mailId!=id)));
  };
  const value = {
    ids : favMealIds,
    addFav,
    removeFav
  }
  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContextProvider;
