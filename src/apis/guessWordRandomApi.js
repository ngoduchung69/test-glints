import axios from "axios";
import * as configs from "../configs/constants";

export const guessWordRamdomApi = async (guess, seed) => {
  try {
    const { data } = await axios.get("https://wordle.votee.dev:8000/random", {
      params: {
        guess,
        seed,
        size: configs.CHARACTER_QUANTITY,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
