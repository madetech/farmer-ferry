<template>
    <div id="container">
        <h1>Commodity Relocation And Pricing</h1>
        <form id="corn-pricing">
            <p>
                <label for="costPerTrip">Cost per bag (in pence)</label>
                <input type="text" id="costPerTrip" v-model="costPerTrip">
            </p>
            <p>
                <label for="numBagsOfCorn">Number of bags of corn</label>
                <input type="text" id="numBagsOfCorn" v-model="numBagsOfCorn">
            </p>
            <p>
                <label for="numGeese">Number of geese</label>
                <input type="text" id="numGeese" v-model="numGeese">
            </p>
            <p>Calculated cost: {{ calculatedCost }}</p>
            <div v-if="travelPlan.isPossible">
                <p>Travel plan:</p>
                <ol>
                    <li v-for="(crossing, index) in travelPlanWithCrossings" :key="index">
                        {{ crossing.direction }}: {{ crossing.commodity }}
                    </li>
                </ol>
            </div>
            <p v-else>Cannot generate travel plan.</p>
        </form>
    </div>
</template>

<script>
    import {calculatePrices} from '../services/pricing.js';
    import {generateTravelPlan} from "../services/travel-plan";
    import {generateCrossingDirections} from "../services/crossing-directions";

    export default {
        name: 'Ferry',
        data: () => {
            return {
                costPerTrip: 25,
                numBagsOfCorn: 0,
                numGeese: 0
            }
        },
        computed: {
            calculatedCost: function () {
                const calculatedPrices = calculatePrices(
                    parseInt(this.numBagsOfCorn, 10),
                    parseInt(this.numGeese, 10),
                    parseInt(this.costPerTrip, 10)
                );
                if (calculatedPrices.error) {
                    return calculatedPrices.error;
                }
                return `£${(calculatedPrices.price / 100).toFixed(2)}`;
            },
            travelPlan: function() {
                return generateTravelPlan({
                    corn: parseInt(this.numBagsOfCorn, 10),
                    geese: parseInt(this.numGeese, 10)
                });
            },
            travelPlanWithCrossings: function() {
                return generateCrossingDirections(this.travelPlan.plan);
            }
        }
    }
</script>

<style>
    #container {
        text-align: left;
    }
    #corn-pricing {
        padding: 10px;
        background-color: #fbec5d;
    }
    label {
        margin-right: 10px;
    }
</style>
