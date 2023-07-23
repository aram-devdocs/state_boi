import { useState, useEffect } from "react";
import axios from "axios";

export const useSlides = () => {
  const [pokemon, setPokemon] = useState([]);
  const [slides, setSlides] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState({}); // slides[slideIndex

  const limit = 9;

  useEffect(() => {
    setCurrentSlide(slides[slideIndex]);
  }, [slideIndex, slides]);

  useEffect(() => {
    if (!pokemon.length) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
        .then((response) => {
          convertPokemonToSlides(response.data.results);
          setPokemon(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const convertPokemonToSlides = (data) => {
    const slides = data.map((pokemon) => {
      return {
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url
          .split("/")
          .slice(-2, -1)}.png`,
        captionText: pokemon.name,
        buttonText: "Next",
        descriptionUrl: pokemon.url,
      };
    });
    setSlides(slides);
  };

  return {
    pokemon,
    slides,
    slideIndex,
    currentSlide,
    setSlideIndex,
  };
};
