function transformToNumber(arr) {
    if(typeof arr !== "string"){
      throw new Error("You need a string")
    }
    const arrPer = arr.split("");
    const filterPer = arrPer.filter((value) => Number(value) >= 0 );
    const finallyObj = {
      percentage: Number(filterPer.join(""))
    }
    return finallyObj
}
export default transformToNumber;