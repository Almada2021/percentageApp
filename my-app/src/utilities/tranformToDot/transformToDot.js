function transformToDot (numberVal = 0){
    if(numberVal < 1 ){
        return numberVal
    }
    let chain = `${numberVal}`;
    
    if(chain.length <= 3 && chain[1] === "."){

        return numberVal
    }
    let temp = chain.split("");
    if(numberVal > 0  && chain[0] === "0"){
        temp.shift()
    }
    chain = temp.reverse();
    let word = [];
    let count = 1;

    for (let i of chain){
        if(count % 3 === 1 && count !== 1 && count > 3 ){
            word.push('.');
        }
        if(i !== "." ){
            word.push(i);
        }
        count += 1;
    }
    return word.reverse();
}
export default transformToDot;