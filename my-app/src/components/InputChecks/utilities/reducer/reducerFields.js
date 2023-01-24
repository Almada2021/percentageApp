function reducerFields(state, action) {
    switch (action?.type){
        case 'place':
            return {...state, place: action?.value, check: false};
        case 'price':
            const regexb = /^[0-9]+$/;
            const testval = action.value
            if(regexb.test(testval)){
                return {...state, price: action.value, check: false}
            }
            if(action.value === ""){
                return {...state, price: action.value}
            }else{
                return {...state, price: state.price}

            }
                
        default:
            return state;
    }
}
export default reducerFields;