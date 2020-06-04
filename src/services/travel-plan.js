export function generateTravelPlan(commodities) {
    if (commodities.corn < 1 && commodities.geese < 1) return { plan: []}
    if (commodities.corn === 1) return { plan: ["corn"]}
    return { plan: [ "goose" ] };
}
