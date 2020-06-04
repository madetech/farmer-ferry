export function generateTravelPlan(commodities) {
    if (notPossible(commodities)) return { plan: [], isPossible: false }

    if (commodities.corn === 2 && commodities.geese === 1) return { plan: [ "goose", "nothing", "corn", "goose", "corn", "nothing", "goose"], isPossible: true }
    if (commodities.corn === 1 && commodities.geese === 2) return { plan: [ "corn", "nothing", "goose", "corn", "goose", "nothing", "corn" ], isPossible: true }
    if (commodities.corn < 1 && commodities.geese < 1) return { plan: [], isPossible: true }
    if (commodities.corn === 1 && commodities.geese === 1) return { plan: ["corn", "nothing", "goose"], isPossible: true }
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

function notPossible(commodities) {
    if ((commodities.corn === 0) || (commodities.geese === 0)) return false;

    if ((commodities.corn === 1 && commodities.geese === 1)
        || (commodities.corn === 2 && commodities.geese === 1)
        || (commodities.corn === 1 && commodities.geese === 2))
        return false;

    return true;
}
