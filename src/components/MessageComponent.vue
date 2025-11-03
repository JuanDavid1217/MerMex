<template>
    <section class="message">
        <div class="message-container">
            <h1>{{title}}</h1>
            <p>{{message}}</p>
        </div>
    </section>
</template>

<style scoped>
    .message {
        flex-grow: 1;
        max-width: 100%;
        padding: 1rem;
    }

    .message-container {
        width: fit-content;
    }

    .message-container h1 {
        color: var(--color6);
    }
</style>

<script>
    export default {
        name: "MessageComponent",
        props: {
            title: {
                type: String,
                required: true
            },
            message: {
                type: String,
                required: false
            }
        }
    }
</script>