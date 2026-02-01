<template>
    <div class="flag-item appear-from-center">
        <img :alt="alt" :src="url">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
    </div>
</template>

<style scoped>
    .flag-item {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center; 
    }

    .flag-item img {
        width: 7rem;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
    }

    .flag-item h2 {
        margin-bottom: 0;
    }

    .flag-item p {
        margin: 0;
    }
</style>

<script>
    export default {
        name: "FlagItemComponent",
        props: {
            url: {
                type: String,
                required: true
            },
            alt: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }
    }
</script>