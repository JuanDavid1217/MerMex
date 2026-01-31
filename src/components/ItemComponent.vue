<template>
    <div class="item appear-from-center">
        <section class="item-ico">
            <i :class="iconName"></i>
            <h3>{{ title }}</h3>
        </section>
        <p>{{ description }}</p>
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
            }
        }
    }
</script>