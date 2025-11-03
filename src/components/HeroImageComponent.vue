<template>
    <article class="hero-image">
        <div>
            <h1>
                MerMex.<br>Logística inteligente para tus importaciones y exportaciones.
            </h1>
        </div>
    </article>
</template>

<style scoped>
    .hero-image {
        display: flex;
        width: 100%;
        min-height: fit-content;
        height: calc(100dvh - var(--header-height));
        background-image: url("../assets/images/background.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center var(--header-height);
        background-attachment: fixed;
    }

    .hero-image div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: fit-content;
        height: 100%;
        text-align: center;
        color: var(--text-color-light);
        background-image: linear-gradient(to bottom, #5F91D790, #2662E690, #F3F7FD);
        padding: 1rem;
    }

    .hero-image div h1 {
        font-size: x-large;
    }

    @media screen and (min-width: 768px) {
        .hero-image div h1 {
            font-size: 2.5rem;
        }   
    }
</style>

<script>
    export default {
        name: "HeroImageComponent"
    }
</script>
