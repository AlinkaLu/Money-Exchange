// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let H = 0;
    let Q = 0;
    let D = 0;
    let N = 0;
    let P = 0; 
    let empty = {};

    if (currency <= 0) return empty;
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    while (currency > 0) {
        if (currency >= 50) {
            ++H; 
            currency = currency - 50;
        } else if (currency >= 25) {
            ++Q; 
            currency = currency - 25;
        } else if (currency >= 10) {
            ++D; 
            currency = currency - 10;
        }  else if (currency >= 5) {
            ++N; 
            currency = currency - 5;
        } else if (currency >= 1) {
            ++P; 
            currency = currency - 1;
        }
    }
    let finalObj = {};
    if (H > 0) finalObj.H = H;
    if (Q > 0) finalObj.Q = Q; 
    if (D > 0) finalObj.D = D;
    if (N > 0) finalObj.N = N;
    if (P > 0) finalObj.P = P;

    return finalObj;
}
