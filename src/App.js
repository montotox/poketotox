import { useState, useEffect } from "react";
import { getPokemons, getPokemonData, searchPokemon } from "./api";
import { pagination } from "./constants/constants";
import { LikesProvider } from "./contexts/likeContext";
import Appbar from "./components/Appbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import NotFound from "./components/NotFound";
import "./App.scss";

const localStorageKey = "pokemon_liked";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(pagination, pagination * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / pagination));
      setNotFound(false);
    } catch (error) {}
  };
  const loadPokemonsLiked = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setLikes(pokemons);
  };
  useEffect(() => {
    loadPokemonsLiked();
  }, []);
  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
  }, [page]);

  const updatePokemonsLikes = (name) => {
    const updated = [...likes];
    const isLiked = likes.indexOf(name);
    if (isLiked >= 0) {
      updated.splice(isLiked, 1);
    } else {
      updated.push(name);
    }
    setLikes(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  };

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };

  return (
    <LikesProvider
      value={{
        pokemonsLiked: likes,
        updatePokemonsLikes: updatePokemonsLikes,
      }}
    >
      <Appbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      <Searchbar onSearch={onSearch} isEnglish={isEnglish} />
      {notFound ? (
        <NotFound />
      ) : (
        <Pokedex
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={total}
          loading={loading}
          isEnglish={isEnglish}
        />
      )}
    </LikesProvider>
  );
}

export default App;
