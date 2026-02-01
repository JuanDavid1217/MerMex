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
                <ItemComponent
                    :iconName="'bi bi-award'"
                    :title="'Más de 10 años de experiencia.'"
                    :description="'Una trayectoria sólida en el mercado respalda nuestro conocimiento, permitiéndonos ofrecer soluciones logísticas confiables, eficientes y adaptadas a las necesidades de cada operación.'"
                />
                <ItemComponent
                    :iconName="'bi bi-people'"
                    :title="'Más de 1,000 clientes satisfechos.'"
                    :description="'La confianza de nuestros clientes es el reflejo de un servicio consistente, atención personalizada y un compromiso constante con la calidad en cada envío.'"
                />
                <ItemComponent
                    :iconName="'bi bi-box-seam'"
                    :title="'Más de 10,000 envíos exitosos.'"
                    :description="'Miles de operaciones completadas con éxito avalan nuestra capacidad operativa, el control de procesos y la seguridad en el manejo de mercancías a nivel nacional e internacional.'"
                />
                <ItemComponent
                    :iconName="'bi bi-shield-check'"
                    :title="'Certificaciones y cumplimiento.'"
                    :description="'Contamos con certificaciones reconocidas como ISO 9001, ISO 14001 y OEA, que garantizan altos estándares de calidad, gestión ambiental y cumplimiento normativo en cada proceso logístico.'"
                />
            </article>
            <article class="extension">
                <label class="appear-from-bottom">Fácil de enviar,</label>
                <label class="appear-from-bottom">sencillo de recibir.</label>
                <section class="controls appear-from-bottom">
                    <button @click="$router.push('/get-a-quote')">Cotizar</button>
                    <button @click="$router.push('/shipping')">Envíar</button>
                </section>
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
                <ItemComponent
                    :iconName="'bi bi-globe'"
                    :title="'Envíos internacionales de mercancía.'"
                    :description="'Realizamos el envío de mercancías, productos, accesorios, artículos, productos monofacturados, ensamblados y comestibles, con cobertura en México, Estados Unidos, Canadá y China, garantizando un manejo seguro y conforme a la normativa de cada destino.'"
                    :backgroundLight="true"
                />
                <ItemComponent
                    :iconName="'bi bi-arrow-left-right'"
                    :title="'Importación y exportación.'"
                    :description="'Ofrecemos servicios integrales de importación y exportación de mercancías, asegurando procesos eficientes, cumplimiento regulatorio y una correcta coordinación logística para operaciones nacionales e internacionales.'"
                    :backgroundLight="true"
                />
                <ItemComponent
                    :iconName="'bi bi-boxes'"
                    :title="'Logística de almacenamiento y distribución.'"
                    :description="'Brindamos soluciones de almacenamiento y distribución que optimizan la gestión de inventarios y la entrega oportuna de mercancías, adaptándonos a las necesidades operativas de cada cliente.'"
                    :backgroundLight="true"
                />
                <ItemComponent
                    :iconName="'bi bi-file-check'"
                    :title="'Gestión de aduanas y trámites.'"
                    :description="'Nos encargamos de la gestión aduanera y de todos los trámites necesarios para el despacho de mercancías, facilitando procesos ágiles, seguros y alineados con la legislación vigente.'"
                    :backgroundLight="true"
                />
                <ItemComponent
                    :iconName="'bi bi-shield-check'"
                    :title="'Seguros de carga.'"
                    :description="'Protegemos tu mercancía mediante seguros de carga que brindan respaldo ante cualquier eventualidad durante el traslado, ofreciendo tranquilidad y seguridad en cada operación logística.'"
                    :backgroundLight="true"
                />
                <ItemComponent
                    :iconName="'bi bi-geo-alt'"
                    :title="'Seguimiento en tiempo real de envíos.'"
                    :description="'Proporcionamos seguimiento en tiempo real de los envíos, permitiendo monitorear el estado y ubicación de la mercancía en cada etapa del proceso para una mayor transparencia y control.'"
                    :backgroundLight="true"
                />
                <ItemComponent
                    :iconName="'bi bi-list-check'"
                    :title="'Trámites y gestiones logísticas.'"
                    :description="'Realizamos trámites y gestiones logísticas complementarias que agilizan las operaciones, reducen tiempos administrativos y garantizan una correcta ejecución de cada envío.'"
                    :backgroundLight="true"
                />
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
            <article class="extension">
                <label class="appear-from-bottom">Envía y</label>
                <label class="appear-from-bottom">recibe desde:</label>
                <br><br>
                <section class="container-grid">
                    <FlagItemComponent
                        :url="'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/512px-Flag_of_Mexico.svg.png?20250615041459'"
                        :alt="'Imagen de la bandera de México.'"
                        :title="'México'"
                        :description="'Cobertura Nacional.'"
                    />
                    <FlagItemComponent
                        :url="'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/512px-Flag_of_the_United_States.svg.png?20240524035322'"
                        :alt="'Imagen de la bandera de los Estados Unidos de America.'"
                        :title="'Estados Unidos'"
                        :description="'Cobertura en todos los estados.'"
                    />
                    <FlagItemComponent
                        :url="'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/512px-Flag_of_Canada_%28Pantone%29.svg.png?20210109071733'"
                        :alt="'Imagen de la bandera de Canadá.'"
                        :title="'Canadá'"
                        :description="'Cobertura en todas las provincias.'"
                    />
                    <FlagItemComponent
                        :url="'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/512px-Flag_of_the_People%27s_Republic_of_China.svg.png?20250417144606'"
                        :alt="'Imagen de la bandera de China.'"
                        :title="'China'"
                        :description="'Cobertura en todas las provincias.'"
                    />
                </section>
                <br><br>
                <ShippingTimesComponent/>
            </article>
        </section>
        <section class="section">
            <article class="container container-flex">
                <SimpleCardComponent
                    :sectionName="'Contáctanos'"
                    :title="'Estamos listos para mover tu próximo envío'"
                    :content="'Nuestro equipo está disponible para asesorarte y resolver cualquier duda sobre tus envíos. Escríbenos, llámanos o solicita una cotización y recibe atención rápida, clara y personalizada para comenzar a mover tu mercancía con total confianza.'"
                />
                <div class="image-container appear">
                    <img src="../assets/images/hero2.jpg" alt="">
                </div>
            </article>
            <section class="container schedule-flex">
                <ContactFormComponent/>
                <section class="schedule-grid">
                    <article class="schedule-section ss-1 appear-from-bottom">
                        <h2>Horarios de atención:</h2>
                        <p>Lunes a viernes de 09:00 am - 06:00 pm (CST)</p>
                        <p>Sábados a partir de las 02:00 pm (CST)</p>
                        <p>Domingos sólo proyectos especiales de 10:00 am - 01:00 pm (CST)</p>
                    </article>
                    <article class="schedule-section ss-2 appear-from-bottom">
                        <h2>Teléfonos:</h2>
                        <p>+52 271 185 1158</p>
                        <p>+52 271 212 6601</p>
                        <br>
                    </article>
                    <article class="schedule-section ss-3 appear-from-bottom">
                        <h2>Dirección:</h2>
                        <p>Av.  Zaragoza</p>
                        <p>Monte Blanco, Ver., México</p>
                    </article>
                </section>
            </section>
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
        gap: 1rem;
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

    .extension {
        display: flex;
        flex-direction: column;
        background-color: var(--color4);
        color: var(--text-color-light);
        padding: 2rem 1rem 3rem;
    }

    .extension label {
        width: 100%;
        max-width: 100%;
        margin: 0;
        font-size: var(--step-5);
    }

    .extension .controls {
        display: flex;
        align-items: center;
        gap: 1rem;
        text-wrap: wrap;
        margin-top: 1rem;
    }

    .extension .controls button {
        font-size: var(--step-1);
        font-family: inherit;
        font-weight: bold;
        padding: .5rem .8rem;
        border: thick solid var(--color1);
        cursor: pointer;
        border-radius: .5rem;
    }

    .extension .controls button:first-child {
        color: var(--text-color-light);
        background-color: transparent;
    }

    .extension .controls button:last-child {
        color: var(--color4);
        background-color: var(--color1);
    }

    @media screen and (min-width: 768px){
        .extension {
            padding-left: 6rem;
            padding-right: 6rem;
        }
    }

    .schedule-section h2 {
        color: var(--text-color-light)
    }

    .schedule-section p {
        color: var(--color3);
    }

    .ss-1 {
        grid-area: ss-1;
    }
    
    .ss-2 {
        grid-area: ss-2;
    }

    .ss-3 {
        grid-area: ss-3;
    }

    .schedule-grid {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, auto);
        grid-template-areas: 
        "ss-1    ss-1"
        "ss-2    ss-3";
        gap: 1rem;
        order: 1;
    }

    @media screen and (min-width: 992px) {
        .schedule-flex {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        .schedule-grid {
            width: 40%;
            order: 2;
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
    import FlagItemComponent from '@/components/FlagItemComponent.vue';
    import ShippingTimesComponent from '@/components/ShippingTimesComponent.vue';
    import ContactFormComponent from '@/components/ContactFormComponent.vue';
    
    export default {
        name: "HomeView",
        components: {
            HeroImageComponent,
            SimpleCardComponent,
            ImageCardComponent,
            ItemComponent,
            FlagItemComponent,
            ShippingTimesComponent,
            ContactFormComponent
        }
    }
</script>