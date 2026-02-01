<template>
    <footer class="footer">
        <LogoComponent/>
        <section class="social-networks">
            <h2>Contáctanos por:</h2>
            <nav>
                <a title="Facebook" class="social-network-icon" href="https://www.facebook.com/Mermexmexico/" target="_blanck"><i class="bi bi-facebook"></i></a>
                <a title="WhatsApp" class="social-network-icon" href="https://www.instagram.com/mercado_mexico5/" target="_blanck"><i class="bi bi-instagram"></i></a>
                <a title="WhatsApp" class="social-network-icon" href="https://www.tiktok.com/@mercadomexico" target="_blanck"><i class="bi bi-tiktok"></i></a>
            </nav>
        </section>
        <section class="legal">
            <p>
                © 2026 - todos los derechos reservados.
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
        color: var(--color5)
    }

    .social-network-icon:hover {
        color: var(--color4);
    }

    .legal button {
        border: none;
        background: transparent;
        color: var(--text-color-dark);
        cursor: pointer;
        color: var(--color5);
    }

    .legal button:hover {
        color: var(--color4);
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