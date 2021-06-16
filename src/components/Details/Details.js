import React from "react";
import { ImCancelCircle } from "react-icons/im";
import { VscSymbolRuler } from "react-icons/vsc";
import { FaWeight } from "react-icons/fa";

import pokeballBackground from "../../assets/svg/PokeballBackground.svg";
import "./Details.scss";

export default function Details(props) {
  const { selected, setModal, isEnglish } = props;
  console.log(selected);
  const primaryType = selected.types[0].type.name;
  const image1 = selected.sprites.front_default;
  const image2 = selected.sprites.back_default;
  const image3 = selected.sprites.front_shiny;
  const image4 = selected.sprites.back_shiny;

  const name = selected.name;
  const idPokemon = selected.id;
  const move1 = selected.moves[0].move.name;
  const move2 = selected.moves[1].move.name;
  const pokemonWeight = selected.weight;
  const pokemonHeight = selected.height / 10;

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="details">
      <div className="details__card">
        <div className={`details__card-header colorModal-${primaryType}`}>
          <div className="details__card-header_top">
            <button
              className="details__card-header_top-btn"
              onClick={closeModal}
            >
              <ImCancelCircle className="details__card-header_top-btn_icon" />
            </button>
            <p className="details__card-header_top-name">{name}</p>
            <p className="details__card-header_top-id">#{idPokemon}</p>
          </div>
          <div className="details__card-header_img">
            <img src={pokeballBackground} alt="pokeball" />
          </div>
        </div>
        <div className="details__card-img">
          <img src={image1} alt={name} />
          <img src={image2} alt={name} />
          <img src={image3} alt={name} />
          <img src={image4} alt={name} />
        </div>
        <div className="details__card-data">
          <div className="details__card-data_types">
            {selected.types.map((pokemon, idx) => {
              return (
                <div
                  className={`details__card-data_types-item colorModal-${selected.types[idx].type.name}`}
                  key={selected.types[idx].type.name}
                >
                  <p>{selected.types[idx].type.name}</p>
                </div>
              );
            })}
          </div>
          <div className="details__card-data_about">
            <p className="details__card-data_about-title">
              {isEnglish ? "About" : "Detalles"}
            </p>
            <div className="details__card-data_about-data">
              <div className="details__card-data_about-data_weight">
                <div className="details__card-data_about-data_weight-top">
                  <FaWeight />
                  {pokemonWeight} Kg
                </div>
                <div className="details__card-data_about-data_weight-bottom">
                  {isEnglish ? "Weight" : "Peso"}
                </div>
              </div>
              <div className="details__card-data_about-data_height">
                <div className="details__card-data_about-data_height-top">
                  <VscSymbolRuler />
                  {pokemonHeight} m
                </div>
                <div className="details__card-data_about-data_height-bottom">
                  {isEnglish ? "Height" : "Altura"}
                </div>
              </div>
              <div className="details__card-data_about-data_moves">
                <p>{move1}</p>
                <p>{move2}</p>
                <div className="details__card-data_about-data_weight-bottom">
                  {isEnglish ? "Moves" : "Movimientos"}
                </div>
              </div>
            </div>
          </div>
          <div className="details__card-data_stats">
            {selected.stats.map((pokemon, idx) => {
              return (
                <div
                  key={selected.stats[idx].stat.name}
                  className="details__card-data_stats-item"
                >
                  <p className="details__card-data_stats-item_name">
                    {selected.stats[idx].stat.name}
                  </p>
                  <div>
                    <p className="details__card-data_stats-item_data">
                      {selected.stats[idx].base_stat}
                    </p>
                    <div className="details__card-data_stats-item_bar">
                      <div
                        className={`details__card-header colorModal-${primaryType} details__card-data_stats-item_bar-progress`}
                        style={{ width: `${selected.stats[idx].base_stat}px` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
