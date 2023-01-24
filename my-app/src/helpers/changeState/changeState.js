
const changeState = (e, set, condition = false, expected = "") => {
    if(e?.target?.value && !condition){
        return set(e.target.value)
    }
    if(condition === true){
        return set(expected)
    }
    return set(expected)
} 
export default changeState