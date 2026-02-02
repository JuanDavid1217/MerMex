<template>
    <main>
        <HeroImageComponent
            :src="heroImg"
            :alt="'Hero Image de Rastreo.'"
            :title="'Sigue tu envío en tiempo real'"
        >
            <template #message>
                <p class="hero-message automatic-appear-from-left">Mantén el control total de tu carga con nuestro sistema de rastreo. Con <label>Mermex</label> sabes dónde está tu envío en cada momento, brindándote tranquilidad, visibilidad y confianza hasta su entrega final.</p>
            </template>
        </HeroImageComponent>
        <section>
            <article class="container appear-from-bottom">
                <div class="instruction">
                    Solo ingresa tu número de guía y da clic en el botón Rastrear.
                </div>
                <TrackingFormComponent :isEnabled="isEnabled" @tracking="tracking"/>
            </article>
        </section>
        <section>
            <article class="container appear-from-bottom">
                <section class="section-3">
                    <template v-if="isEnabled">
                        Los resultados del rastreo apareceran aquí.
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

    .instruction {
        text-align: center;
        color: var(--text-color-light);
    }

    section {
        background-color: var(--color2);
    }

</style>

<script setup>
    import heroImg from "@/assets/images/hero2.webp"
</script>

<script>
    import SpinnerComponent from '@/components/SpinnerComponent'
    import HeroImageComponent from '@/components/HeroImageComponent.vue';
    import TrackingFormComponent from "@/components/TrackingFormComponent.vue";
    
    export default {
        name: "TrackingView",
        components: {
            SpinnerComponent,
            HeroImageComponent,
            TrackingFormComponent
        },
        data() {
            return {
                isEnabled: true,
            }
        },
        methods: {
            tracking(trackingNumber){
                console.log(`trackingNumber: ${trackingNumber}`);
                this.isEnabled = false;
                setTimeout(()=>{
                    this.isEnabled = true;
                }, 5000);
            }
        }
    }
</script>