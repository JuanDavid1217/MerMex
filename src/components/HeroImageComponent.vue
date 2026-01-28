<template>
    <article class="hero-image">
        <img :src="src" :alt="alt">
        <div>
            <section class="container half">
                <MessageComponent :title="title">
                    <template #message>
                        <slot name="message"></slot>
                    </template>
                </MessageComponent>
            </section>
        </div>
    </article>
</template>

<style scoped>
    .hero-image {
        position: relative;
        display: flex;
        width: 100%;
        min-height: fit-content;
        height: calc(100svh - var(--header-height));
    }

    .hero-image img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        z-index: -1;
    }

    .hero-image div {
        display: flex;
        align-items: center;
        width: 100%;
        min-height: fit-content;
        height: 100%;
        color: var(--text-color-light);
        background: linear-gradient(to bottom, #0C355650, var(--color2));
    }

</style>

<script>
    import MessageComponent from './MessageComponent.vue';
    export default {
        name: "HeroImageComponent",
        props: {
            src: {
                type: String,
                required: true,
            },
            alt: {
                type: String,
                required: false,
                default: "Una imagen de MerMex."
            },
            title: {
                type: String,
                required: true
            }
        },
        components: {
            MessageComponent,
        }
    }
</script>
