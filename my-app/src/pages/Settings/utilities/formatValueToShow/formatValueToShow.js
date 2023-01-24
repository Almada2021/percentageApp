export function formatValueToShow(val, key) {
    if(typeof val !== 'object' && typeof val !== 'undefined'){
        return val
    }
    return val[key]
}