<template>
    <main>
        <HeroImageComponent
            :src="heroImg"
            :alt="'Hero Image de Cotización.'"
            :title="'Cotiza fácil, decide rápido'"
        >
            <template #message>
                <p class="hero-message automatic-appear-from-left">Obtén una cotización clara y transparente en minutos. En <label>Mermex</label> creemos que planear tus envíos no debería ser complicado, por eso te damos precios competitivos y opciones a la medida para que elijas lo que mejor se adapta a tu negocio.</p>
            </template>
        </HeroImageComponent>
        <section>
            <article class="container appear-from-bottom">
                <ShipmentFormComponent :option="1" :isEnabled="isEnabled" @getQuote="getQuote"/>
            </article>
        </section>
        <section>
            <article class="container appear-from-bottom">
                <section class="section-3">
                    <template v-if="isEnabled">
                        Los resultados de la cotización apareceran aquí.
                    </template>
                    <template v-else>
                        <SpinnerComponent :width="'3rem'"/>
                    </template>
                </section>
            </article>
        </section>
    </main>
</template>

<style scoped>
    .section-3 {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--text-color-light);
        width: 100%;
        padding-bottom: 2rem;
    }

    section {
        background-color: var(--color2);
    }

</style>

<script setup>
    import heroImg from "@/assets/images/hero4.webp"
</script>

<script>
    import ShipmentFormComponent from '@/components/ShipmentFormComponent';
    import SpinnerComponent from '@/components/SpinnerComponent';
    import HeroImageComponent from '@/components/HeroImageComponent.vue';

    export default {
        name: "QuoteView",
        components: {
            ShipmentFormComponent,
            SpinnerComponent,
            HeroImageComponent
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