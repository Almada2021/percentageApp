import transformToNumber from "../../../../utilities/transformToNumber/transformToNumber";

const changeSetPercentage = (e, value, key, data, setDataStorage, ) => {
    e.preventDefault();
    const finallyObj = transformToNumber(data)
    setDataStorage(key, finallyObj)
};
export default changeSetPercentage;