import { calculatePrices, calculateCrossingPrice } from '@/services/pricing.js';

describe('pricing', () => {

    test('that 0 crossings costs 0p', () => {
        expect(calculateCrossingPrice(0, 25)).toBe(0);
    })

    test('that 5 crossings costs 125p', () => {
        expect(calculateCrossingPrice(5, 25)).toBe(125);
    })
})