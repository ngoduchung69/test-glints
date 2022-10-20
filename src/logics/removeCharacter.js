import * as configs from "../configs/constants";

export const removeCharacter = (data, setData) => {
  if (data.length === 0) {
    return;
  } else {
    const { dataArray, calledApi } = data[data.length - 1];
    if (calledApi) {
      return;
    } else if (dataArray.length > 0) {
      const constantData = data.slice(0, data.length - 1);
      setData([
        ...constantData,
        {
          dataArray: dataArray.slice(0, dataArray.length - 1),
          calledApi: false,
        },
      ]);
    }
  }
};
