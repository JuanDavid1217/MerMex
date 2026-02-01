<template>
    <form action="#" class="appear-from-bottom">
        <label for="name">Nombre:</label>
        <input id="name" type="name" placeholder="Escribe tu nombre." required>
        <label for="email">Correo:</label>
        <input id="email" type="email" placeholder="Escribe tu correo electronico." required>
        <label for="message">Mensaje:</label>
        <textarea id="message" name="message" cols="50" rows="10" placeholder="¿En qué te podemos ayudar?" required></textarea>
        <div>
            <button type="reset">Limpiar</button>
            <button type="submit">Enviar</button>
        </div>
    </form>
</template>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        max-width: 100%;
        order: 2;
    }

    input, textarea {
        border: none;
        outline: none;
        box-shadow: none;
        border-bottom: medium solid var(--color4);
        background-color: transparent;
        font-size: inherit;
        font-family: inherit;
        max-width: 100%;
        color: var(--color3);
    }

    textarea {
        resize: none;
    }

    label:nth-child(1n+2) {
        margin-top: 1rem;
    }

    label {
        font-weight: bold;
        color: var(--color3)
    }

    form div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }

    form div button {
        font-size: inherit;
        font-family: inherit;
        flex: 1;
        border: medium solid var(--color4);
        padding: .5rem .8rem;
        font-weight: bold;
        cursor: pointer;
        border-radius: .5rem
    }

    form div button:first-child {
        background-color: transparent;
        color: var(--color4);
    }

    form div button:last-child {
        background-color: var(--color4);
        color: var(--text-color-light);
    }

    @media screen and (min-width: 992px) {
        form {
            width: 50%;
            order: 1;
        }
    }

</style>

<script>
    export default {
        name: "ConctactFormComponent"
    }
</script>