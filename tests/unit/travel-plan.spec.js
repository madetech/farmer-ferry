import { generateTravelPlan, isPossible } from '@/services/travel-plan.js';

describe('travel plan generation', () => {

    test('that no commodities to transport returns a travel plan showing no crossings', () => {
        expect(generateTravelPlan( { corn: 0, geese: 0 } )).toMatchObject( { plan: [] });
    })

    test('that 1 goose returns a travel plan showing one crossing with a goose', () => {
        expect(generateTravelPlan( { corn: 0, geese: 1 } )).toMatchObject( { plan: [ "goose" ] });
    })

    test('that 2 geese returns a travel plan showing two crossings with a goose and one empty handed return journey', () => {
        expect(generateTravelPlan( { corn: 0, geese: 2 } )).toMatchObject( { plan: [ "goose", "nothing", "goose" ] });
    })

    test('that 5 geese returns a travel plan showing five crossings with a goose and four empty handed return journeys', () => {
        expect(generateTravelPlan( { corn: 0, geese: 5 } )).toMatchObject( { plan: [ "goose", "nothing", "goose", "nothing", "goose" , "nothing", "goose" , "nothing", "goose" ] });
    })

    test('that 1 bag of corn returns a travel plan showing one crossing with a bag of corn', () => {
        expect(generateTravelPlan( { corn: 1, geese: 0 } )).toMatchObject( { plan: [ "corn" ] });
    })

    test('that 2 bags of corn returns a travel plan showing two crossings with a bag of corn and one empty handed return journey', () => {
        expect(generateTravelPlan( { corn: 2, geese: 0 } )).toMatchObject( { plan: [ "corn", "nothing", "corn" ] });
    })

    test('that 2 bags of corn and 1 goose returns a travel plan showing two crossings with a bag of corn, one crossing with a goose and one empty handed return journey', () => {
        expect(generateTravelPlan( { corn: 2, geese: 1 } )).toMatchObject( { plan: [ "goose", "nothing", "corn", "goose", "corn", "nothing", "goose" ] });
    })

    test('that 5 bags of corn returns a travel plan showing five crossings with a bag of corn and four empty handed return journeys', () => {
        expect(generateTravelPlan( { corn: 5, geese: 0 } )).toMatchObject( { plan: [ "corn", "nothing", "corn", "nothing", "corn" , "nothing", "corn" , "nothing", "corn" ] });
    })

    test('that 1 goose and 1 bag of corn returns a travel plan showing one crossing with a goose, one crossing with a bag of corn, and one empty handed return journey', () => {
        expect(generateTravelPlan( { corn: 1, geese: 1 } )).toMatchObject( { plan: [ "corn", "nothing", "goose" ] });
    })

    test('that 1 bag of corn and 2 geese returns a travel plan showing two crossings with a bag of corn, one crossing with a goose and one empty handed return journey', () => {
        expect(generateTravelPlan( { corn: 1, geese: 2 } )).toMatchObject( { plan: [ "corn", "nothing", "goose", "corn", "goose", "nothing", "corn" ] });
    })
});

describe('travel plans - possible', () => {

    test('that no commodities to transport returns a travel plan showing that the plan is possible, if empty', () => {
        expect(isPossible( { corn: 0, geese: 0 } )).toBe(true);
    })

    test('that 1 goose and 1 bags of corn returns a travel plan showing that the plan is possible', () => {
        expect(isPossible( { corn: 1, geese: 1 } )).toBe(true);
    })

    test('that 2 geese returns a travel plan showing that the plan is possible', () => {
        expect(isPossible( { corn: 0, geese: 2 } )).toBe(true);
    })

    test('that 2 bag of corn returns a travel plan showing that the plan is possible', () => {
        expect(isPossible( { corn: 2, geese: 0 } )).toBe(true);
    })

    test('that 2 geese and 1 bag of corn returns a travel plan showing that the plan is possible', () => {
        expect(isPossible( { corn: 1, geese: 2 } )).toBe(true);
    })

    test('that 1 goose and 2 bag of corn returns a travel plan showing that the plan is possible', () => {
        expect(isPossible( { corn: 2, geese: 1 } )).toBe(true);
    })

    test('that 1 goose and 1 bag of corn and 1 fox returns a travel plan showing that the plan is possible', () => {
        expect(isPossible( { corn: 1, geese: 1, foxes: 1} )).toBe(true);
    })
    
})

describe('travel plans - not possible', () => {

    test('that 2 geese and 2 bags of corn returns a travel plan showing that the plan is not possible', () => {
        expect(isPossible( { corn: 2, geese: 2 } )).toBe(false);
    })

    test('that 4 geese and 4 bags of corn returns a travel plan showing that the plan is not possible', () => {
        expect(isPossible( { corn: 4, geese: 4 } )).toBe(false);
    })

    test('that 4 geese and 1 bag of corn returns a travel plan showing that the plan is not possible', () => {
        expect(isPossible( { corn: 1, geese: 4 } )).toBe(false);
    })

    test('that 1 goose and 4 bag of corn returns a travel plan showing that the plan is not possible', () => {
        expect(isPossible( { corn: 4, geese: 1 } )).toBe(false);
    })

    test('that 1 goose and 1 bag of corn and 4 foxes returns a travel plan showing that the plan is not possible', () => {
        expect(isPossible( { corn: 1, geese: 1, foxes: 5} )).toBe(false);
    })

    test('that 5 geese and 1 fox returns a travel plan showing that the plan is not possible', () => {
        expect(isPossible( { corn: 0, geese: 5, foxes: 1} )).toBe(false);
    })
});
