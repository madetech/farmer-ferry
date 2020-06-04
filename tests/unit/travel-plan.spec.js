import { generateTravelPlan } from '@/services/travel-plan.js';

/* Crossing entities:
   - corn
   - goose
   - nothing
 */

describe('travel plan', () => {

    it('return a travel plan showing a single crossing with the farmer and a goose when transporting a single goose', () => {
        expect(generateTravelPlan(0, 1, 25)).toMatchObject( { plan: [ "goose" ] });
    })
})