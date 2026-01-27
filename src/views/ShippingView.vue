<template>
    <main>
        <HeroImageComponent
            :src="heroImg"
            :alt="'Hero Image de Envio.'"
            :title="'Envíos seguros, rápidos y sin sorpresas'"
        >
            <template #message>
                <p class="hero-message appear-from-left">Con <label>Mermex</label>, tus paquetes viajan con el respaldo de un servicio confiable y trazable. Nos adaptamos a tus necesidades con opciones flexibles de envío nacional e internacional, cuidando cada detalle para que tu carga llegue en tiempo y forma.</p>
            </template>
        </HeroImageComponent>
        <section>
            <article class="container appear-from-bottom">
                    <ShipmentFormComponent :option="2" :isEnabled="isEnabled" @shipping="shipping"/>
            </article>
        </section>
    </main>
</template>

<script setup>
    import heroImg from "@/assets/images/hero3.jpg"
</script>

<script>
    import ShipmentFormComponent from '@/components/ShipmentFormComponent';
    import HeroImageComponent from '@/components/HeroImageComponent.vue';

    export default {
        name: "ShippingView",
        data () {
            return {
                isEnabled: true,
            }
        },
        components: {
            ShipmentFormComponent,
            HeroImageComponent
        },
        methods: {
            shipping() {
                this.isEnabled = false;
                console.log('Realizando Envío');
                setTimeout(()=>{
                    this.isEnabled = true;
                }, 5000);
            }
        }
    }
</script>