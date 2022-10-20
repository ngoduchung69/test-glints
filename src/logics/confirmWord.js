import { guessWordRamdomApi } from "../apis/guessWordRandomApi";
import * as configs from "../configs/constants";

export const confirmWord = async (data, setData, seed) => {
  if (data.length === 0) {
    return;
  } else {
    const { dataArray, calledApi } = data[data.length - 1];
    if (calledApi || dataArray.length !== configs.CHARACTER_QUANTITY) {
      return;
    }
    const dataApi = await guessWordRamdomApi(dataArray.join(""), seed);
    if (dataApi) {
      const constantData = data.slice(0, data.length - 1);
      setData([...constantData, { dataArray: dataApi, calledApi: true }]);
    }
  }
};
