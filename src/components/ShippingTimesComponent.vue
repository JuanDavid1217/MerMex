<template>
    <section class="shipping-times appear-from-bottom">
        <p>
            <strong>Tiempo de entrega nacional:</strong> 3-5 días hábiles.
        </p>
        <p>
            <strong>Tiempo de entrega internacional:</strong> 5-10 días hábiles
        </p>
    </section>
</template>

<style scoped>
    .shipping-times {
        width: fit-content;
    }

    @media screen and (min-width: 768px){
        .shipping-times {
            align-self: flex-end;
        }
    }
</style>

<script>
    export default {
        name: "ShippingTimesComponent"
    }
</script>