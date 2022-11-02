import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

export const FavouritesContextProvider = ({ children }) => {
  const [favouriteIds, setFavouriteIds] = useState([]);

  const addFavourite = (id) => {
    setFavouriteIds((prev) => [...prev, id]);
  };

  const removeFavourite = (id) => {
    setFavouriteIds((prev) => prev.filter((el) => el !== id));
  };

  const value = {
    ids: favouriteIds,
    addFavourite,
    removeFavourite,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};
