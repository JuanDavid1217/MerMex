<template>
    <section class="message">
        <div class="message-container">
            <h1 class="appear-from-left">{{title}}</h1>
            <slot name="message"></slot>
        </div>
    </section>
</template>

<style scoped>
    .message {
        flex-grow: 1;
        max-width: 100%;
        /*padding: 1rem;*/
    }

    .message-container {
        width: fit-content;
    }

    .message-container h1,
    .message-container p {
        color: var(--text-color-light);
    }

    .message-container h1 {
        font-size: var(--step-5);
    }

    /*.message-container p {
        font-size: var(--step-0);
    }*/
</style>

<script>
    export default {
        name: "MessageComponent",
        props: {
            title: {
                type: String,
                required: true
            }
        }
    }
</script>