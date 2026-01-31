<template>
    <div class="item appear-from-center">
        <section class="item-ico">
            <i :class="iconName"></i>
            <h3 :class="{'background-light-h3': backgroundLight}">{{ title }}</h3>
        </section>
        <p :class="{'background-light-p': backgroundLight}">{{ description }}</p>
    </div>
</template>

<style scoped>
    .item {
        width: 100%;
        height: auto;
    }

    .item .item-ico h3 {
        color: var(--text-color-light);
        margin: 0;
    }

    .item .item-ico i {
        color: var(--color4);
        font-weight: bold;
        font-size: var(--step-5);
    }

    .item .item-ico {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .item p {
        color: var(--color3);
    }

    .background-light-p {
        color: var(--color5) !important;
    }

    .background-light-h3 {
        color: var(--text-color-dark) !important;
    }

</style>

<script>
    export default {
        name: "ItemComponent",
        props: {
            iconName: {
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
            },
            backgroundLight: {
                type: Boolean,
                required: false,
                default: false
            }
        }
    }
</script>