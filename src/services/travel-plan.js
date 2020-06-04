export function generateTravelPlan(commodities) {
    if (commodities.corn < 1 && commodities.geese < 1) return { plan: [], isPossible: true  }
    if (commodities.corn === 1 && commodities.geese === 1) return { plan: ["corn", "nothing", "goose"] }
    if (commodities.corn === 2 && commodities.geese === 2) return { plan: [], isPossible: false }
    if (commodities.corn > 0) return { plan: commodityPlan("corn", commodities.corn) };
    if (commodities.geese > 0) return { plan: commodityPlan("goose", commodities.geese) };
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
