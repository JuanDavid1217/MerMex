<template>
    <main>
        <HeroImageComponent/>
        <section class="container">
            <SimpleCardComponent class="card-1" :title="'Misión'" :paragraphs="['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi ratione sit animi quis quisquam. Sapiente fugiat nihil dignissimos, excepturi quasi, laborum voluptates voluptatibus sint totam et doloribus explicabo cumque natus!', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi ratione sit animi quis quisquam. Sapiente fugiat nihil dignissimos, excepturi quasi, laborum voluptates voluptatibus sint totam et doloribus explicabo cumque natus!']" />
            <SimpleCardComponent class="card-1" :title="'Visión'" :paragraphs="['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi ratione sit animi quis quisquam. Sapiente fugiat nihil dignissimos, excepturi quasi, laborum voluptates voluptatibus sint totam et doloribus explicabo cumque natus!', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi ratione sit animi quis quisquam. Sapiente fugiat nihil dignissimos, excepturi quasi, laborum voluptates voluptatibus sint totam et doloribus explicabo cumque natus!']" />
            <SimpleCardComponent class="card-2" :title="'Valores'" :paragraphs="['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi ratione sit animi quis quisquam. Sapiente fugiat nihil dignissimos, excepturi quasi, laborum voluptates voluptatibus sint totam et doloribus explicabo cumque natus!', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi ratione sit animi quis quisquam. Sapiente fugiat nihil dignissimos, excepturi quasi, laborum voluptates voluptatibus sint totam et doloribus explicabo cumque natus!']" />
        </section>
    </main>
</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        margin: 1rem auto;
    }

    @media screen and (min-width: 768px) {
        .container {
            margin-left: 6rem;
            margin-right: 6rem;
        }
    }

    @media screen and (min-width: 992px) {
        .container {
            flex-direction: row;
            flex-wrap: wrap;
        }

        .card-1 {
            width: 45%;
        }

        .card-2 {
            width: 100%;
        }
    }

    /*@media screen and (min-width: 992px) {
        .card-1,
        .card-2 {
            width: 32%
        }
    }*/


</style>

<script>
    import HeroImageComponent from "@/components/HeroImageComponent";
    import SimpleCardComponent from "@/components/SimpleCardComponent";

    export default {
        name: "HomeView",
        components: {
            HeroImageComponent,
            SimpleCardComponent
        }
    }
</script>