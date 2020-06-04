export function generateCrossingDirections(plan) {
    function isOdd(index) {
        return index % 2 === 0;
    }

    return plan.map((commodity, index) => {
        return {
            commodity,
            direction: isOdd(index) ? "outward" : "return"
        }
    });

}
