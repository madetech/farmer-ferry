import { generateTravelPlan } from '@/services/travel-plan.js';

/* Crossing entities:
   - corn
   - goose
   - nothing
 */

describe('travel plan', () => {

    test('that a single goose returns a travel plan showing a single crossing with the farmer and a goose', () => {
        expect(generateTravelPlan(0, 1, 25)).toMatchObject( { plan: [ "goose" ] });
    })

    test('that a single bag of corn returns a travel plan showing a single crossing with the farmer and a bag of corn', () => {
        expect(generateTravelPlan(1, 0)).toMatchObject( { plan: [ "corn" ] });
    })
});
