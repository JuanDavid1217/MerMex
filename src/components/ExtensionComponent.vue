<template>
    <article class="extension">
        <div class="square s1"></div>
        <div class="square s2"></div>
        <div class="square s3"></div>
        <div class="square s4"></div>
        <slot name="extension-content"></slot>
    </article>
</template>

<style scoped>
    .extension {
        position: relative;
        background-color: var(--color4);
    }

    .square {
        position: absolute;
        background: rgba(255, 255, 255, 0.12);
        border-radius: 6px;
        z-index: 1;
    }

    .s1 {
        width: 90px;
        height: 90px;
        top: 2rem;
        right: 6rem;
    }

    .s2 {
        width: 48px;
        height: 48px;
        bottom: 2rem;
        left: 1rem;
    }

    .s3 {
        width: 64px;
        height: 64px;
        top: calc(2rem + 90px);
        right: 1rem;
    }

    @media (min-width: 768px) {
        .s1 {
            right: 11rem;
        }

        .s2 {
            left: 6rem;
        }

        .s3 {
            top: calc(2rem + 90px);
            right: 6rem;
        }
    }
</style>

<script>
    export default {
        name: "ExtensionComponent"
    }
</script>