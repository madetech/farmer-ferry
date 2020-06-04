import { generateTravelPlan } from '@/services/travel-plan.js';

/* Crossing entities:
   - corn
   - goose
   - nothing
 */

describe('travel plan', () => {

    test('that a single goose returns a travel plan showing a single crossing with the farmer and a goose', () => {
        expect(generateTravelPlan( { corn: 0, geese: 1 } )).toMatchObject( { plan: [ "goose" ] });
    })

    test('that a single bag of corn returns a travel plan showing a single crossing with the farmer and a bag of corn', () => {
        expect(generateTravelPlan( { corn: 1, geese: 0 } )).toMatchObject( { plan: [ "corn" ] });
    })

    test('that no commodities to transport returns a travel plan showing no crossings', () => {
        expect(generateTravelPlan( { corn: 0, geese: 0 } )).toMatchObject( { plan: [] });
    })
});
