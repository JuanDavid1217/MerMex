<template>
    <form class="shipment-form" @submit.prevent="doSometing(option)">
        <section class="container">
            <section class="origin">
                <h2>Origen:</h2>
                <div class="inputs">
                    <div>
                        <label id="from-country-label" for="from-country-input">Pais:</label>
                        <input id="from-country-input" type="text" required>
                    </div>
                    <div>
                        <label id="from-postal-code-label" for="from-postal-code-input">Código postal:</label>
                        <input id="from-postal-code-input" type="text" required>
                    </div>
                    <div>
                        <label id="from-city-label" for="from-city-input">Ciudad:</label>
                        <input id="from-city-input" type="text" required>
                    </div>
                </div>
            </section>
            <hr>
            <section class="destination">
                <h2>Destino:</h2>
                <div class="inputs">
                    <div>
                        <label id="to-country-label" for="to-country-input">Pais:</label>
                        <input id="to-country-input" type="text" required>
                    </div>
                    <div>
                        <label id="to-postal-code-label" for="to-postal-code-input">Código postal:</label>
                        <input id="to-postal-code-input" type="text" required>
                    </div>
                    <div>
                        <label id="to-city-label" for="to-city-input">Ciudad:</label>
                        <input id="to-city-input" type="text" required>
                    </div>
                </div>
            </section>
        </section>
        <hr>
        <section class="details">
            <h2>Tamaño del paquete:</h2>
            <div class="inputs">
                <div>
                    <label id="shipment-weight-label" for="shipment-weight-input">Peso (Kg):</label>
                    <input id="shipment-weight-input" type="number"  min="0" max="9999" required>
                </div>
                <div>
                    <label id="shipment-length-label" for="shipment-length-input">Largo (cm):</label>
                    <input id="shipment-length-input" type="number"  min="0" max="9999" required>
                </div>
                <div>
                    <label id="shipment-width-label" for="shipment-width-input">Ancho (cm):</label>
                    <input id="shipment-width-input" type="number"  min="0" max="9999" required>
                </div>
                <div>
                    <label id="shipment-height-label" for="shipment-height-input">Alto (cm):</label>
                    <input id="shipment-height-input" type="number"  min="0" max="9999" required>
                </div>
            </div>
        </section>
        <hr>
        <section class="controls">
            <button type="reset" :disabled="!isEnabled" :class="{'disabled':!isEnabled}">Limpiar</button>
            <template v-if="option==1">
                <button type="submit" :disabled="!isEnabled" :class="{'disabled':!isEnabled}">
                    <template v-if="isEnabled">{{'Cotizar'}}</template>
                    <template v-else><SpinnerComponent :ligth='true'/></template>
                </button>
            </template>
            <template v-if="option==2">
                <button type="submit" :disabled="!isEnabled" :class="{'disabled':!isEnabled}">
                    <template v-if="isEnabled">{{'Enviar'}}</template>
                    <template v-else><SpinnerComponent :ligth='true'/></template>
                </button>
            </template>
        </section>
    </form>
</template>

<style scoped>
    .shipment-form {
        border-radius: 1rem;
        background-color: var(--color1);
        padding: 1rem;
        width: fit-content;
        max-width: 100%;
        margin: 0 auto 2rem;
        box-shadow: 0 0 0.5rem 0.02rem #0001;
    }

    .container {
        max-width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .origin,
    .destination,
    .details {
        display: flex;
        flex-direction: column;
        width: 100%;
        flex-grow: 1;
        padding: 1rem;
    }

    hr {
        border: thin solid #f5f6f7;
    }

    .container hr {
        width: 100%;
    }

    .controls {
        margin: 1rem auto 0;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }

    .controls button {
        padding: .5rem .8rem;
        border: none;
        border-radius: .3rem;
        color: var(--text-color-light);
        background-color: var(--color4);
        font-size: inherit;
        font-weight: bold;
        cursor: pointer;
        min-width: 6.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color .3s ease;
    }

    .disabled {
        background-color: var(--color3) !important;
    }

    .inputs {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .inputs div {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        max-width:  100%;
    }

    .inputs div input {
        border: none;
        /*border-bottom: medium solid var(--color3);*/
        padding: .5rem;
        border-radius: .2rem;
        background-color: #f5f6f7;
        outline: none;
        color: inherit;
        font-size: inherit;
    }

    .inputs div  label {
        margin-bottom: .5rem;
    }

    h2 {
        color: var(--color6);
        margin: 0 0 2rem;
    }

    @media screen and (min-width: 992px) {
        .origin,
        .destination {
            width: 48%;
        }

        .container hr {
            width: 0;
        }
    }
</style>

<script>
    import SpinnerComponent from '@/components/SpinnerComponent';

    export default {
        name: "ShipmentFormComponent",
        props: {
            isEnabled: {
                type: Boolean,
                required: true
            },
            option: {
                type: Number,
                required: true
            }
        },
        components: {
            SpinnerComponent
        },
        methods: {
            doSometing (option){
                switch (option) {
                    case 1:
                        this.$emit('getQuote');
                        break;
                    case 2:
                        this.$emit('shipping');
                        break;
                }
            }
        },
        emits: [
            'getQuote',
            'shipping'
        ]
    }
</script>