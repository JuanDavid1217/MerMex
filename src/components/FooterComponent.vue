<template>
    <footer class="footer">
        <LogoComponent/>
        <section class="social-networks">
            <h2>Contáctanos por:</h2>
            <nav>
                <a title="Facebook" class="facebook" href="https://www.facebook.com/Mermexmexico/" target="_blanck"><i class="bi bi-facebook"></i></a>
                <a title="WhatsApp" class="whatsapp" href="https://wa.me/522712126601" target="_blanck"><i class="bi bi-whatsapp"></i></a>
            </nav>
        </section>
        <section class="legal">
            <p>
                2025 © - todos los derechos reservados.
            </p>
            <button type="button" @click="this.$router.push('/terms-and-conditions')">Términos y Condiciones</button>
            <button type="button" @click="this.$router.push('/privacy-policy')">Aviso de privacidad</button>
        </section>
    </footer>
</template>

<style scoped>
    .footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        background-color: var(--color1);
        text-align: center;
    }

    .social-networks,
    .social-networks nav,
    .legal {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .social-networks > nav > a {
        color: var(--text-color-dark);
        transition: color .3s ease;
    }

    .social-networks > nav > a > i {
        font-size: larger;
    }

    .footer p {
        font-size: smaller;
    }

    .facebook:hover {
        color: #1877F2;
    }

    .whatsapp:hover {
        color: #25D366;
    }

    .legal button {
        border: none;
        background: transparent;
        color: var(--text-color-dark);
        cursor: pointer;
    }

    .legal button:hover {
        color: var(--color3);
        text-decoration: underline;
    }

</style>

<script>
    import LogoComponent from "@/components/LogoComponent";

    export default {
        name: "FooterComponent",
        components: {
            LogoComponent
        }
    }
</script>