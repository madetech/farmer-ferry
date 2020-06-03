import { calculatePrices } from '@/services/pricing.js';

describe('pricing', () => {

    it('3 bags @ 25 = 125', () => {
        expect(calculatePrices(3, 0, 25)).toMatchObject( { price: 125 });
    })

    it('0 bags', () => {
        expect(calculatePrices(0, 0, 25)).toMatchObject( { price: 0 });
    })

    it('invalid bags', () => {
        expect(calculatePrices('x', 0, 25)).toMatchObject({ error: "Please enter valid values"});
    })
})
