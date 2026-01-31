<template>
    <div class="introducction appear-from-bottom half">
        <h2 :class="{'background-light': background==2}">{{ sectionName }}</h2>
        <h3 :class="['background-dark', {'background-light': background==1}]">{{ title }}</h3>
        <p :class="['background-dark-p', {'background-light-p': background==1}]">{{ content }}</p>
    </div>
</template>

<style scoped>
    .introducction h2 {
        color: var(--color4);
        font-weight: 300;
        font-size: var(--step--1);
        text-transform: uppercase;
    }

    .introducction h3 {
        margin: 0;
        font-size: var(--step-3);
    }

    .introducction p {
        white-space: pre-line;
    }

    .background-dark {
        color: var(--text-color-light);
    }

    .background-dark-p {
        color: var(--color3);
    }

    .background-light-p {
        color: var(--color5);
    }

    .background-light {
        color: var(--text-color-dark) !important;
    }

</style>

<script>
    export default {
        name: "SimpleCardComponent",
        props: {
            sectionName: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            },
            background: {
                type: Number,
                required: false,
                default: 0
            }
        }
    }
</script>