<template>
    <main>
        <article class="section-2">
            <MessageComponent :title="'¿Quieres realizar un envío con nosotros pero no sabes cuánto vas a pagar?'" :message="'Con nuestra calculadora de precios, obtén el costo exacto de tu envío en segundos.'"/>
        </article>
        <article class="section-3">
            <ShipmentFormComponent :option="1" :isEnabled="isEnabled" @getQuote="getQuote"/>
        </article>
        <article class="section-4">
            <template v-if="isEnabled">
                Los resultados de la cotización apareceran aquí.
            </template>
            <template v-else>
                <SpinnerComponent :width="'3rem'"/>
            </template>
        </article>
    </main>
</template>

<style scoped>
    .section-3 {
        padding: 1rem;
    }

    .section-4 {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        margin: 0 0 2rem; /*Temporal*/
    }
</style>

<script>
    import MessageComponent from '@/components/MessageComponent'
    import ShipmentFormComponent from '@/components/ShipmentFormComponent';
    import SpinnerComponent from '@/components/SpinnerComponent';

    export default {
        name: "QuoteView",
        components: {
            MessageComponent,
            ShipmentFormComponent,
            SpinnerComponent
        },
        data () {
            return {
                isEnabled: true,
            }
        },
        methods: {
            getQuote(){
                this.isEnabled = false;
                console.log("Cotizando");
                setTimeout(()=>{
                    this.isEnabled = true;
                }, 5000)
            }
        }
    }
</script>