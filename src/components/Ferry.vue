<template>
  <div id="container">
    <h1>Commodity Relocation And Pricing</h1>
    <form id="corn-pricing">
      <p>
        <label for="costPerTrip">Cost per bag (in pence)</label>
        <input type="text" id="costPerTrip" v-model="costPerTrip" />
      </p>
      <p>
        <label for="numBagsOfCorn">Number of bags of corn</label>
        <input type="text" id="numBagsOfCorn" v-model="numBagsOfCorn" />
      </p>
      <p>
        <label for="numGeese">Number of geese</label>
        <input type="text" id="numGeese" v-model="numGeese" />
      </p>
      <div v-if="isPossible">
        <p>Calculated cost: {{ calculatedCost }}</p>
        <p>Travel plan:</p>
        <ol>
          <li
            v-for="(crossing, index) in travelPlanWithCrossings"
            :key="index"
          >{{ crossing.direction }}: {{ crossing.commodity }}</li>
        </ol>
      </div>
      <p v-else>Cannot generate travel plan.</p>
    </form>
  </div>
</template>

<script>
import { calculateCrossingPrice } from "../services/pricing.js";
import { generateTravelPlan, isPossible } from "../services/travel-plan";
import { generateCrossingDirections } from "../services/crossing-directions";

export default {
  name: "Ferry",
  data: () => {
    return {
      costPerTrip: 25,
      numBagsOfCorn: 0,
      numGeese: 0
    };
  },
  computed: {
    calculatedCost: function() {
      const calculatedPrices = calculateCrossingPrice(
        this.travelPlan.plan.length,
        parseInt(this.costPerTrip, 10)
      );
      return `£${(calculatedPrices / 100).toFixed(2)}`;
    },
    isPossible: function() {
      return isPossible({
        corn: parseInt(this.numBagsOfCorn, 10),
        geese: parseInt(this.numGeese, 10)
      });
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
};
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
