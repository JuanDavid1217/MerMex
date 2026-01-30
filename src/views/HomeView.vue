<template>
    <main>
        <HeroImageComponent
            :src="heroImg"
            :alt="'Hero Image de Inicio'"
            :title="'Conectamos México con el mundo'"
        >
            <template #message>
                <p class="hero-message automatic-appear-from-left">En <label>Mermex</label> movemos más que mercancía: movemos confianza. Ofrecemos soluciones logísticas seguras, rápidas y eficientes para que tus envíos lleguen a su destino sin complicaciones. Desde la cotización hasta la entrega final, estamos contigo en cada kilómetro del camino.</p>
            </template>
        </HeroImageComponent>
        <section class="section">
            <article class="container container-flex">
                <SimpleCardComponent
                    :sectionName="'¿Quiénes somos?'"
                    :title="'Conectamos tu carga con confianza y experiencia'"
                    :content="'Somos un equipo especializado en soluciones logísticas que entiende la importancia de cada envío. Trabajamos con procesos eficientes, tecnología y un enfoque humano para garantizar que tu mercancía llegue segura, a tiempo y sin complicaciones, conectando a México con mercados nacionales e internacionales.'"
                />
                <div class="image-container appear">
                    <img src="../assets/images/hero4.jpg" alt="">
                </div>
            </article>
        </section>
        <section class="section">
            <article class="container container-flex">
                <SimpleCardComponent
                    :sectionName="'Nuestros servicios'"
                    :title="'Soluciones logísticas hechas a tu medida'"
                    :content="'Ofrecemos servicios integrales de envío, gestión y seguimiento de mercancía, adaptándonos a las necesidades de cada cliente. Desde cargas pequeñas hasta operaciones de mayor escala, brindamos rutas seguras, atención personalizada y control total en cada etapa del proceso.'"
                    :background="1"
                />
                <div class="image-container appear">
                    <img src="../assets/images/hero3.jpg" alt="">
                </div>
            </article>
            <article class="container container-grid">
                <ImageCardComponent
                    :title="'Envíos Terrestres'"
                    :subtitle="'Conectamos cada destino por carretera'"
                    :image="card1Img"
                    :content="'Movemos tu carga de forma segura y eficiente a través de una red terrestre confiable. Ideal para trayectos nacionales e internacionales, este servicio ofrece flexibilidad, seguimiento continuo y tiempos de entrega optimizados para mantener tu operación siempre en marcha.'"
                />
                <ImageCardComponent
                    :title="'Envíos Aéreos'"
                    :subtitle="'Velocidad cuando el tiempo importa'"
                    :image="card2Img"
                    :content="'Diseñado para mercancía urgente o de alto valor, el transporte aéreo reduce al máximo los tiempos de entrega. Garantiza rapidez, control y cobertura global para que tus envíos lleguen justo cuando los necesitas.'"
                />
                <ImageCardComponent
                    :title="'Envíos Marítimos'"
                    :subtitle="'Capacidad y alcance sin fronteras'"
                    :image="card3Img"
                    :content="'La mejor opción para grandes volúmenes y cargas pesadas. El transporte marítimo ofrece una solución rentable y confiable para operaciones internacionales, conectando puertos clave y asegurando una logística sólida a largo plazo.'"
                />
            </article>
        </section>
        <section class="section">
            <article class="container container-flex">
                <SimpleCardComponent
                    :sectionName="'Contactanos'"
                    :title="'Estamos listos para mover tu próximo envío'"
                    :content="'Nuestro equipo está disponible para asesorarte y resolver cualquier duda sobre tus envíos. Escríbenos, llámanos o solicita una cotización y recibe atención rápida, clara y personalizada para comenzar a mover tu mercancía con total confianza.'"
                />
                <div class="image-container appear">
                    <img src="../assets/images/hero2.jpg" alt="">
                </div>
            </article>
        </section>
    </main>
</template>

<style scoped>

    .section:nth-child(even){
        background-color: var(--color2);
    }

    .section:nth-child(odd){
        background-color: var(--color1);
    }

    .medium {
        background-color: var(--color4);
    }

    .image-container {
        width: 100%;
        height: auto;
        max-height: 58.5rem;
        object-fit: cover;
        object-position: center;
        display: flex;
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: .3rem .3rem 0 0 var(--color4);
    }

    .appear {
        animation-timeline: view();
        animation-range: entry 10% cover 25%;

        animation-name: appearFromBottom;
        animation-timing-function: linear;
        animation-fill-mode: both;
    }

    .container-grid{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(14.75rem, 1fr));
        grid-template-rows: auto;
    }

    @media screen and (min-width: 576px) {
        .container-flex {
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
        }

        .image-container {
            width: 40%;
            margin-left: auto;
        }

        .section:nth-child(odd) .image-container {
            order: -1;
            margin-left: 0;
            margin-right: auto;
        }

        .section:nth-child(even) .appear {
            animation-name: appearFromRight;
        }

        .section:nth-child(odd) .appear {
            animation-name: appearFromLeft;
        }
    }

</style>

<script setup>
    import heroImg from '@/assets/images/hero.jpg'
    import card1Img from '@/assets/images/hero4.jpg'
    import card2Img from '@/assets/images/hero3.jpg'
    import card3Img from '@/assets/images/hero2.jpg'
</script>

<script>
    import HeroImageComponent from "@/components/HeroImageComponent";
    import SimpleCardComponent from "@/components/SimpleCardComponent";
    import ImageCardComponent from '@/components/ImageCardComponent.vue';

    export default {
        name: "HomeView",
        components: {
            HeroImageComponent,
            SimpleCardComponent,
            ImageCardComponent
        }
    }
</script>