export function generateTravelPlan(commodities) {
    if (commodities.corn === 2 && commodities.geese === 1) return { plan: ["goose", "nothing", "corn", "goose", "corn", "nothing", "goose"] }
    if (commodities.corn === 1 && commodities.geese === 2) return { plan: ["corn", "nothing", "goose", "corn", "goose", "nothing", "corn"] }
    if (commodities.corn < 1 && commodities.geese < 1) return { plan: [] }
    if (commodities.corn === 1 && commodities.geese === 1) return { plan: ["corn", "nothing", "goose"] }
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

export function isPossible({ corn, geese, foxes }) {

    if (foxes > 1) return false;
    if ((geese === 5) && (foxes === 1)) return false;
    if ((corn === 0) || (geese === 0)) return true;

    if ((corn === 1 && geese === 1)
        || (corn === 2 && geese === 1)
        || (corn === 1 && geese === 2))
        return true;

    return false;
}
