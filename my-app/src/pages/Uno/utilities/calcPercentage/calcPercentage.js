
export function calcPercentage (val, percentage, key="percentage"){

    if (Number(val) <= 0 ){
        return 0;
    }
    
    const valPer = typeof percentage !== 'object' ? percentage : percentage[key] ;


    return ((Number(val) * Number(valPer)) / 100);
}