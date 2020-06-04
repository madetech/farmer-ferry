export function generateCrossingDirections(plan) {
    if(plan.length > 0) {
        return [
            {
                commodity: "corn",
                direction: "outward"
            },
            {
                commodity: "nothing",
                direction: "return"
            },
            {
                commodity: "corn",
                direction: "outward"
            }
        ]
    }
    return [];
}
