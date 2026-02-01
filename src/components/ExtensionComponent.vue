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
        width: 48px;
        height: 48px;
        top: 16px;
        right: 16px;
    }

    .s2 {
        width: 32px;
        height: 32px;
        bottom: 24px;
        left: 20px;
    }

    .s3 {
        display: none;
    }

    @media (min-width: 640px) {
        .s3 {
            display: block;
            width: 56px;
            height: 56px;
            top: 90px;
            right: 60px;
        }
    }

    @media (min-width: 1024px) {
        .s1 {
            width: 90px;
            height: 90px;
            top: 40px;
            right: 120px;
        }

        .s2 {
            width: 48px;
            height: 48px;
            bottom: 60px;
            left: 90px;
        }

        .s3 {
            width: 64px;
            height: 64px;
            top: 140px;
            right: 40px;
        }
    }
</style>

<script>
    export default {
        name: "ExtensionComponent"
    }
</script>