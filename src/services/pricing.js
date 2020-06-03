export function calculatePrices (nCorn, nGeese, pricePerCrossing) {
    let price = 0;

    if (nCorn >= 0 && nGeese >= 0 && pricePerCrossing >= 1) {

        if ((nGeese + nCorn) > 3 && (nCorn > 1 && nGeese > 1)) return { error: "Goose alert! Corn at risk!" }

        if (nCorn + nGeese === 0) {
            price = 0;
        } else {
            price = (((nCorn + nGeese) * 2) - 1) * pricePerCrossing;
        }
    
        return { price: price};

    } else {
        return { price: undefined, error: "Please enter valid values"};
    }
}
