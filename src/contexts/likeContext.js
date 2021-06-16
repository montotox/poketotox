import React from "react";

const LikeContext = React.createContext({
  pokemonsLiked: [],
  updatePokemonsLikes: (id) => null,
});

export const LikesProvider = LikeContext.Provider;

export default LikeContext;
