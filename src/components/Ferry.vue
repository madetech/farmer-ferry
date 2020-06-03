<template>
    <div>
        <h1>Corn Relocation And Pricing</h1>
        <form id="corn-pricing">
            <p>
                <label for="costPerBag">Cost per bag</label>
                <input type="text" id="costPerBag" v-model="costPerBag">
            </p>
            <p>
                <label for="numBags">Number of bags</label>
                <input type="text" id="numBags" v-model="numBags">
            </p>
            <p>Calculated cost: £{{ calculatedCost }}</p>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Ferry',
        data: () => {
            return {
                costPerBag: 25,
                numBags: 1
            }
        },
        computed: {
            calculatedCost: function () {
                return ((this.costPerBag * this.numBags * 2) - this.costPerBag) / 100
            }
        }
    }
</script>

<style>
    #corn-pricing {
        background-color: #fbec5d
    }
</style>
