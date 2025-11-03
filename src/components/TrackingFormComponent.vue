<template>
    <section class="tracking">
        <form @submit.prevent="makeRequest()">
            <input type="text" placeholder="Ingresa tu número de guía aquí." v-model="trackingNumber" required>
            <button type="submit" :disabled="!isEnabled" :class="{'disabled':!isEnabled}">
                <template v-if="isEnabled">{{'Rastrear'}}</template>
                <template v-else><SpinnerComponent :ligth='true'/></template>
            </button>
        </form>
    </section>
</template>

<style scoped>
    .tracking {
        display: flex;
        flex-grow: 1;
        max-width: 100%;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }

    .tracking form {
        display: flex;
        flex-wrap: wrap;
        border: thin solid var(--color3);
        border-radius: .5rem;
        overflow: hidden;
    }

    .tracking form input,
    .tracking form button {
        padding: 1rem;
        flex-grow: 1;
        max-width: 100%;
    }

    .tracking form button {
        border: none;
        background-color: var(--color4);
        color: var(--color1);
        cursor: pointer;
        font-weight: bold;
        transition: background-color .3s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 6.1rem;
        font-size: inherit;
    }
    
    .disabled {
        background-color: var(--color3) !important;
    }

    .tracking form input {
        border: none;
        outline: none;
        color: inherit;
        font-size: inherit;
    }
</style>

<script>
    import SpinnerComponent from '@/components/SpinnerComponent'
    export default {
        name: "TrackingFormComponent",
        components: {
            SpinnerComponent
        },
        data() {
            return {
                trackingNumber: "",
            }
        },
        props: {
            isEnabled: {
                type: Boolean,
                required: true
            }
        },
        methods: {
            makeRequest() {
                this.$emit('tracking', this.trackingNumber);
            }
        },
        emits: [
            'tracking',
        ]
    }
</script>