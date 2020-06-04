import {generateCrossingDirections} from '@/services/crossing-directions.js';

describe('crossing directions generation', () => {

    test('that 0 crossings returns no directions', () => {
        const plan = [];
        expect(generateCrossingDirections(plan)).toMatchObject([]);
    })

    test('that 3 crossings returns directions', () => {
        const plan = ["corn", "nothing", "corn"];
        expect(generateCrossingDirections(plan)).toEqual([
            {
                commodity: "corn",
                direction: "outward"
            },
            {
                commodity: "nothing",
                direction: "return"
            },
            {
                commodity: "corn",
                direction: "outward"
            }
        ]);
    })

    test('that 4 crossings returns directions', () => {
        const plan = ["corn", "nothing", "corn", "nothing"];
        expect(generateCrossingDirections(plan)).toEqual([
            {
                commodity: "corn",
                direction: "outward"
            },
            {
                commodity: "nothing",
                direction: "return"
            },
            {
                commodity: "corn",
                direction: "outward"
            },
            {
                commodity: "nothing",
                direction: "return"
            }
        ]);
    })
});
