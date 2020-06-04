<template>
    <div>
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
                <ul>
                    <li v-for="crossing in crossings" :key="crossing">
                        {{ crossing }}
                    </li>
                </ul>
            </div>
            <p v-else>Cannot generate travel plan.</p>
        </form>
    </div>
</template>

<script>
    import {calculatePrices} from '../services/pricing.js';
    import {generateTravelPlan} from "../services/travel-plan";

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
            crossings: function() {
                return this.travelPlan.plan;
            }
        }
    }
</script>

<style>
    #corn-pricing {
        padding: 10px;
        background-color: #fbec5d;
    }
    label {
        margin-right: 10px;
    }
</style>
