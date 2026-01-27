<template>
    <div :class="{'spinner':true, 'ligth-spinner': ligth||false, 'spinner-border': true}" :style="{width: width}"></div>
</template>

<style scoped>
    @keyframes spinner {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    .spinner {
        aspect-ratio: 1;
        width: 1rem;
        border-radius: 50%;
        animation: spinner 1s ease-in-out infinite;
        border: .2rem solid var(--color4);
    }

    .ligth-spinner {
        border-color: var(--color1);
        border-left-color: #0005;
    }

    .spinner-border {
        border-left-color: #0005;
    }

</style>

<script>
    export default {
        name: "SpinnerComponent",
        props: {
            ligth: {
                type: Boolean,
                required: false
            },
            width: {
                type: String,
                required: false
            }
        }
    }
</script>