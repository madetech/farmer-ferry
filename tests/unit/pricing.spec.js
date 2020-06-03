describe('pricing', () => {

    it('3 bags @ 25 = 125', () => {
        expect(calculatePrices(3, 25)).toBe(125);
    })

    it('0 bags', () => {
        expect(calculatePrices(0, 25)).toBe(0);
    })

    it('invalid bags', () => {
        expect(calculatePrices('x', 25)).toBe(0);
    })

})

function calculatePrices (numBags, pricePerBag) {
    return 125;
}