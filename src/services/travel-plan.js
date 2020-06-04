export function generateTravelPlan(commodities) {
    if (commodities.corn < 1 && commodities.geese < 1) return { plan: [], isPossible: true  }
    if (commodities.corn === 1 && commodities.geese === 1) return { plan: ["corn", "nothing", "goose"], isPossible: true }
    if (commodities.corn > 1 && commodities.geese > 1) return { plan: [], isPossible: false }
    if (commodities.corn > 0) return { plan: commodityPlan("corn", commodities.corn), isPossible: true };
    if (commodities.geese > 0) return { plan: commodityPlan("goose", commodities.geese), isPossible: true };
}

function commodityPlan(commodity, count) {
    let plan = [];

    for (let i = 0; i < count; i++) {
        plan.push(commodity);
        plan.push("nothing");
    }

    if (plan.length > 1) plan.pop();

    return plan;
}
