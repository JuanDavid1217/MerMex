<template>
    <main>
        <article class="section-2">
            <MessageComponent :title="'Rastrea tu envío de manera rápida y segura.'" :message="'Solo ingresa tu número de guía y da clic en el botón Rastrear.'"/>
            <TrackingFormComponent :isEnabled="isEnabled" @tracking="tracking"/>
        </article>
        <article class="section-3">
            <template v-if="isEnabled">
                Los resultados del rastreo apareceran aquí.
            </template>
            <template v-else>
                <SpinnerComponent :width="'3rem'"/>
            </template>
        </article>
    </main>
</template>

<style scoped>

    .section-3 {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        margin: 6rem 0; /*Temporal*/
    }

</style>

<script>
    import MessageComponent from '@/components/MessageComponent'
    import TrackingFormComponent from '@/components/TrackingFormComponent'
    import SpinnerComponent from '@/components/SpinnerComponent'

    export default {
        name: "TrackingView",
        components: {
            MessageComponent,
            TrackingFormComponent,
            SpinnerComponent
        },
        data() {
            return {
                isEnabled: true,
            }
        },
        methods: {
            tracking(trackingNumber){
                console.log(`trackingNumber: ${trackingNumber}`);
                this.isEnabled = false;
                setTimeout(()=>{
                    this.isEnabled = true;
                }, 5000);
            }
        }
    }
</script>