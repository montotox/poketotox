import React, { useContext } from "react";
import LikeContext from "../../contexts/likeContext";
import { AiFillHeart } from "react-icons/ai";
import Loader from "../Loader";
import Card from "../Card";
import Pagination from "../Pagination";
import "./Pokedex.scss";

export default function Pokedex(props) {
  const { pokemonsLiked } = useContext(LikeContext);
  const { pokemons, page, setPage, total, loading, isEnglish } = props;
  const lastPage = () => {
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };
  return (
    <div className="results">
      <div className="results__header">
        <div className="results__header-heart">
          <AiFillHeart className="results__header-heart_icon" />
          {pokemonsLiked.length} {pokemonsLiked.length === 1 ? "like" : "likes"}
        </div>
        <Pagination
          className="results__header-pagination"
          onClickLeft={lastPage}
          onClickRight={nextPage}
          page={page + 1}
          total={total}
        />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="cards">
          {pokemons.map((pokemon, idx) => {
            return (
              <Card
                pokemon={pokemon}
                key={pokemon.name}
                isEnglish={isEnglish}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
