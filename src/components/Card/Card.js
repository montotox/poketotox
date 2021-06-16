import React, { useContext, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Details from "../Details";
import "./Card.scss";
import LikeContext from "../../contexts/likeContext";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: "320px",
    height: "520px",
    borderRadius: "20px",
    backgroundColor: "#FFF",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    overflow: "hidden",
  },
}));

export default function Card(props) {
  const { pokemon, isEnglish } = props;
  const styles = useStyles();
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState();
  const openModal = () => {
    setModal(!modal);
  };
  const body = (
    <div className={styles.modal}>
      <Details selected={selected} setModal={setModal} isEnglish={isEnglish} />
    </div>
  );

  const { pokemonsLiked, updatePokemonsLikes } = useContext(LikeContext);
  const clickHeart = (e) => {
    e.preventDefault();
    updatePokemonsLikes(pokemon.name);
  };
  const primaryType = pokemon.types[0].type.name;
  const selectPokemon = (e) => {
    e.preventDefault();
    setSelected(pokemon);
    setModal(true);
  };
  return (
    <>
      <div className={`card color-${primaryType}`}>
        <div className="card__header">
          <button className="card__header-btn" onClick={clickHeart}>
            {pokemonsLiked.includes(pokemon.name) ? (
              <AiFillHeart className="card__header-fillHeart" />
            ) : (
              <AiOutlineHeart className="card__header-emptyHeart" />
            )}
          </button>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card__picture">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            onClick={selectPokemon}
          />
        </div>
        <div className="card__name">
          <h3>{pokemon.name}</h3>
        </div>
      </div>
      {pokemon ? (
        <Modal
          open={modal}
          onClose={openModal}
          selected={selected}
          isEnglish={isEnglish}
        >
          {body}
        </Modal>
      ) : (
        <div></div>
      )}
    </>
  );
}
