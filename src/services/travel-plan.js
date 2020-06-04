export function generateTravelPlan(commodities) {
    if (commodities.corn < 1 && commodities.geese < 1) return { plan: []}
    if (commodities.corn > 0) return { plan: cornPlan(commodities.corn) };
    if (commodities.geese > 0) {
        if (commodities.geese === 2) return { plan: ["goose", "nothing", "goose"] };
        return {plan: ["goose"]};
    }
}

function cornPlan(count) {
    let plan = [];

    for (let i = 0; i < count; i++) {
        plan.push("corn");
        plan.push("nothing");
    }

    if (plan.length > 1) plan.pop();

    return plan;
}
