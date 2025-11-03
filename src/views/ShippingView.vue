<template>
    <main>
        <article class="section-2">
            <MessageComponent :title="'Realiza tu envío ahora.'" :message="'Completa el formulario, confirma tus datos y nosotros nos encargamos del resto.'" />
        </article>
        <article class="section-3">
            <ShipmentFormComponent :option="2" :isEnabled="isEnabled" @shipping="shipping"/>
        </article>
    </main>
</template>

<style scoped>
    .section-3 {
        padding: 1rem;
    }
</style>

<script>
    import MessageComponent from '@/components/MessageComponent';
    import ShipmentFormComponent from '@/components/ShipmentFormComponent';

    export default {
        name: "ShippingView",
        data () {
            return {
                isEnabled: true,
            }
        },
        components: {
            MessageComponent,
            ShipmentFormComponent
        },
        methods: {
            shipping() {
                this.isEnabled = false;
                console.log('Realizando Envío');
                setTimeout(()=>{
                    this.isEnabled = true;
                }, 5000);
            }
        }
    }
</script>