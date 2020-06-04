import { generateTravelPlan } from '@/services/travel-plan.js';

/* Crossing entities:
   - corn
   - goose
   - nothing
 */

describe('travel plan', () => {

    test('that no commodities to transport returns a travel plan showing no crossings', () => {
        expect(generateTravelPlan( { corn: 0, geese: 0 } )).toMatchObject( { plan: [] });
    })

    test('that a single goose returns a travel plan showing a single crossing with a goose', () => {
        expect(generateTravelPlan( { corn: 0, geese: 1 } )).toMatchObject( { plan: [ "goose" ] });
    })

    test('that 2 geese returns a travel plan showing two crossings with a goose and one empty handed return journey', () => {
        expect(generateTravelPlan( { corn: 0, geese: 2 } )).toMatchObject( { plan: [ "goose", "nothing", "goose" ] });
    })

    test('that a single bag of corn returns a travel plan showing a single crossing with a bag of corn', () => {
        expect(generateTravelPlan( { corn: 1, geese: 0 } )).toMatchObject( { plan: [ "corn" ] });
    })

    test('that 2 bags of corn returns a travel plan showing two crossings with a bag of corn and one empty handed return journey', () => {
        expect(generateTravelPlan( { corn: 2, geese: 0 } )).toMatchObject( { plan: [ "corn", "nothing", "corn" ] });
    })

    test('that 5 bags of corn returns a travel plan showing five crossings with a bag of corn and four empty handed return journeys', () => {
        expect(generateTravelPlan( { corn: 5, geese: 0 } )).toMatchObject( { plan: [ "corn", "nothing", "corn", "nothing", "corn" , "nothing", "corn" , "nothing", "corn" ] });
    })
});
