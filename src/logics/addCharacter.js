import * as configs from "../configs/constants";

export const AddRemoveCharacter = (data, setData, character) => {
  if (data.length === 0) {
    setData([{ dataArray: [character], calledApi: false }]);
  } else {
    const { dataArray, calledApi } = data[data.length - 1];
    if (calledApi) {
      setData([...data, { dataArray: [character], calledApi: false }]);
    } else if (configs.CHARACTER_QUANTITY > dataArray.length) {
      const constantData = data.slice(0, data.length - 1);
      setData([
        ...constantData,
        { dataArray: [...dataArray, character], calledApi: false },
      ]);
    }
  }
};
