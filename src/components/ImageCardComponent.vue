<template>
    <div class="card">
        <section class="image">
            <div class="p">
                <h2>{{ title }}</h2>
                <h3>{{ subtitle }}</h3>
            </div>
            <img :src="image" alt="">
        </section>
        <section class="content p">{{ content }}</section>
        <section class="buttons p">
            <button><b>Ver más</b></button>
        </section>
    </div>
</template>

<style scoped>
    .card {
        width: 100%;
        height: auto;
        background-color: var(--color2);
        border-radius: 1rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        box-shadow: .3rem .3rem .5rem .02rem var(--color2);
        transition: transform .3s ease;
    }

    .card:hover {
        transform: translateY(-.3rem);
    }

    .card .image {
        width: 100%;
        min-height: 15rem;
        height: fit-content;
        position: relative;
    }

    .card  .image img{
        width: 100%;
        height: 100%;
        display: flex;
        object-fit: cover;
        object-position: center;
        position: absolute;
        top: 0;
        left: 0;
    }

    .card .image div {
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, #0C355650, var(--color2));
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: end;
    }

    .card .image div h3,
    .card .content,
    .card .buttons button{
        color: var(--text-color-light);
    }

    .card .image div h2,
    .card .image div h3 {
        margin: 0;
    }

    .card .image div h2 {
        color: var(--color4);
        font-weight: 300;
        font-size: var(--step--1);
        text-transform: uppercase;
    }

    .card .image div h3 {
        font-size: var(--step-1);
    }

    .card .content {
        flex-grow: 1;
        white-space: pre-line;
    }

    .card .buttons button {
        background-color: var(--color4);
        border: none;
        cursor: pointer;
        padding: .5rem .8rem;
        border-radius: 1rem;
    }

    .p {
        padding: 1rem;
    }
</style>

<script>
    export default {
        name: "ImageCardComponent",
        props: {
            title: {
                type: String,
                required: true
            },
            subtitle: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            }
        }
    }
</script>