<template>
    <article class="card">
        <h2>{{title}}</h2>
        <p  v-for="(paragraph, index) in paragraphs" :key="index">
            {{paragraph}}
        </p>
    </article>
</template>

<style scoped>
    .card {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        border-radius: 1rem;
        padding: 1rem;
        box-shadow: 0 0 0.5rem 0.02rem #0001;
        background-color: var(--color1);
        text-align: justify;
        transition: transform .3s ease;
    }

    .card h2{
        color: var(--color6);
        text-align: center;
    }

    .card:hover {
        transform: scale(1.02);
    }

</style>

<script>
    export default {
        name: "SimpleCardComponent",
        props: {
            title: {
                type: String,
                required: true
            },
            paragraphs: {
                type: Array,
                required: true
            }
        }
    }
</script>