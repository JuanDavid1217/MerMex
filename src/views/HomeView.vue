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
                    :title="'Mer Mex Express'"
                    :content="`Empresa líder en logística con más de 10 años de experiencia en el transporte de mercancías a nivel nacional e internacional. Nos especializamos en ofrecer soluciones logísticas integrales y personalizadas, adaptadas a las necesidades específicas de cada cliente.
                    
                    Nuestra misión es garantizar envíos seguros, eficientes y puntuales, conectando México con Estados Unidos, Canadá y China. Gestionamos cada operación con altos estándares de calidad, desde el envío de un sobre hasta el traslado de un contenedor completo, respaldados por un equipo experto y procesos confiables.`"
                />
                <div class="image-container appear">
                    <img src="../assets/images/hero4.jpg" alt="">
                </div>
            </article>
            <article class="container container-grid">
                <ItemComponent
                    :iconName="'bi bi-globe'"
                    :title="'Expertos en logística.'"
                    :description="'Nuestro equipo cuenta con más de 15 años de experiencia en operaciones logísticas nacionales e internacionales, aportando conocimiento estratégico, dominio de rutas y cumplimiento normativo para asegurar envíos eficientes y bien coordinados.'"
                />
                <ItemComponent
                    :iconName="'bi bi-file-earmark-text'"
                    :title="'Gestión aduanal sin complicaciones.'"
                    :description="'Disponemos de personal especializado en procesos aduanales y gestión documental, garantizando el correcto cumplimiento de las regulaciones vigentes y facilitando el despacho oportuno de la mercancía sin contratiempos.'"
                />
                <ItemComponent
                    :iconName="'bi bi-airplane'"
                    :title="'Agentes de carga certificados.'"
                    :description="'Trabajamos con agentes de carga certificados que respaldan la seguridad y confiabilidad de cada operación, asegurando el manejo adecuado de la mercancía y una coordinación eficiente en cada etapa del proceso logístico.'"
                />
                <ItemComponent
                    :iconName="'bi bi-headset'"
                    :title="'Soporte técnico disponible 24/7.'"
                    :description="'Nuestro equipo de soporte técnico está disponible las 24 horas, los 7 días de la semana, para brindar atención inmediata, seguimiento continuo y respuesta oportuna ante cualquier requerimiento o incidencia.'"
                />
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
    import ItemComponent from '@/components/ItemComponent.vue';

    export default {
        name: "HomeView",
        components: {
            HeroImageComponent,
            SimpleCardComponent,
            ImageCardComponent,
            ItemComponent
        }
    }
</script>