import { calculatePrices } from '@/services/pricing.js';

describe('pricing', () => {

    it('3 corn @ 25 = 125', () => {
        expect(calculatePrices(3, 0, 25)).toMatchObject( { price: 125 });
    })

    it('0 corn', () => {
        expect(calculatePrices(0, 0, 25)).toMatchObject( { price: 0 });
    })

    it('invalid corn', () => {
        expect(calculatePrices('x', 0, 25)).toMatchObject({ error: "Please enter valid values"});
    })

    it('3 geese @ 25 = 125', () => {
        expect(calculatePrices(0, 3, 25)).toMatchObject( { price: 125 });
    })

    it('0 geese @ 25 = 0', () => {
        expect(calculatePrices(0, 0, 25)).toMatchObject( { price: 0 });
    })

    it('3 corn 3 geese @ 25 = error', () => {
        expect(calculatePrices(3, 3, 25)).toMatchObject( { error: "Goose alert! Corn at risk!" });
    })

    it('2 corn 2 geese @ 25 = error', () => {
        expect(calculatePrices(3, 3, 25)).toMatchObject( { error: "Goose alert! Corn at risk!" });
    })

    it('2 corn 1 geese @ 25 = 125', () => {
        expect(calculatePrices(2, 1, 25)).toMatchObject( { price: 125 });
    })
})
