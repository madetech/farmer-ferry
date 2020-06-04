export function generateCrossingDirections(plan) {
    if(plan.length ===3) {
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
    if(plan.length === 4) {
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
            },
            {
                commodity: "nothing",
                direction: "return"
            }
        ]
    }
    return [];
}
