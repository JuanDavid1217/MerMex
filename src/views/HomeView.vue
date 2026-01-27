<template>
    <main>
        <HeroImageComponent
            :src="heroImg"
            :alt="'Hero Image de Inicio'"
            :title="'Conectamos México con el mundo'"
        >
            <template #message>
                <p class="hero-message">En <label>Mermex</label> movemos más que mercancía: movemos confianza. Ofrecemos soluciones logísticas seguras, rápidas y eficientes para que tus envíos lleguen a su destino sin complicaciones. Desde la cotización hasta la entrega final, estamos contigo en cada kilómetro del camino.</p>
            </template>
        </HeroImageComponent>
        <section>
            <article class="container">
            </article>
        </section>
        <section>
            <article class="container">
            </article>
        </section>
        <section>
            <article class="container">
            </article>
        </section>
    </main>
</template>

<style scoped>

    @media screen and (min-width: 992px) {
        .card-1 {
            width: 45%;
        }

        .card-2 {
            width: 100%;
        }
    }

    /*@media screen and (min-width: 992px) {
        .card-1,
        .card-2 {
            width: 32%
        }
    }*/

    section:nth-child(odd){
        background-color: var(--color1);
    }

</style>

<script setup>
    import heroImg from '@/assets/images/hero.jpg'
</script>

<script>
    import HeroImageComponent from "@/components/HeroImageComponent";
    /* import SimpleCardComponent from "@/components/SimpleCardComponent"; */

    export default {
        name: "HomeView",
        components: {
            HeroImageComponent,
            /* SimpleCardComponent */
        }
    }
</script>