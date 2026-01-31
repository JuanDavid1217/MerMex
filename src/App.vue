<template>
  <HeaderComponent/>
  <router-view/>
  <FooterComponent/>
</template>

<style>
  :root {

    /*Colors*/
    /*
    --color1: #FDFDFE;
    --color2: #102131;
    --color4: #FE8600;
    --color5: #44515E;
    */
    --color1: #FDFDFE;
    --color2: #1D1C1C;
    --color3: #C3C1BB;
    --color4: #FBA019;
    --color5: #5A5856;

    --color-filter-blur: #00000090;
    
    --text-color-dark: var(--color2);
    --text-color-light: var(--color1);

    /*Text*/
    /* @link https://utopia.fyi/type/calculator?c=360,18,1.2,1240,20,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
    --step--2: clamp(0.7813rem, 0.7736rem + 0.0341vw, 0.8rem);
    --step--1: clamp(0.9375rem, 0.9119rem + 0.1136vw, 1rem);
    --step-0: clamp(1.125rem, 1.0739rem + 0.2273vw, 1.25rem);
    --step-1: clamp(1.35rem, 1.2631rem + 0.3864vw, 1.5625rem);
    --step-2: clamp(1.62rem, 1.4837rem + 0.6057vw, 1.9531rem);
    --step-3: clamp(1.944rem, 1.7405rem + 0.9044vw, 2.4414rem);
    --step-4: clamp(2.3328rem, 2.0387rem + 1.3072vw, 3.0518rem);
    --step-5: clamp(2.7994rem, 2.384rem + 1.8461vw, 3.8147rem);

    /*General*/
    --logo-size: 3.5rem;
    --padding-x: 1rem;
    --padding-y: 0.5rem;
    --general-padding: 1rem;
    --header-height: calc(var(--logo-size) + (var(--padding-y) * 2));
  }

  html {
    box-sizing: border-box;
    font-size: var(--step--1);
    font-family: Arial, Helvetica, sans-serif;
    color: var(--text-color-dark);
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    min-width: 16rem;
    background-color: var(--color1);
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  img {
    width: 100%;
    height: auto;
  }
  
  main {
    flex-grow: 1;
  }

  .section-2 {
    display: flex;
    flex-wrap: wrap;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 1rem;
    justify-content: center;
    /*margin: 1rem auto;*/
  }

  .hero-message {
    font-size: var(--step-0);
    white-space: pre-line;
  }

  .hero-message label {
    color: var(--color4);
  }

  @media screen and (min-width: 576px) {
    .half {
      width: 50%;
    }
  }

  @media screen and (min-width: 768px){
    :root {
      --padding-x: 6rem;
    }

    .container {
      margin-left: 6rem;
      margin-right: 6rem;
      padding: 2rem 0;
    }
  }

  @keyframes appearFromLeft {
    from {
        opacity: 0;
        transform: translateX(-10%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
  }

  .automatic-appear-from-left {
    animation-name: appearFromLeft;
    animation-duration: .8s;
    animation-timing-function: ease-out;
    animation-fill-mode: both;
  }

  @keyframes appearFromBottom {
    from {
      transform: translateY(3rem);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .appear-from-bottom {
    animation-timeline: view();
    animation-range: entry 10% cover 25%;

    animation-name: appearFromBottom;
    animation-timing-function: linear;
    animation-fill-mode: both;
  }

  @keyframes appearFromCenter {
    from {
      transform: scale(0.5);
      opacity: 0;
    }

    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  .appear-from-center {
    animation-timeline: view();
    animation-range: entry 10% cover 25%;

    animation-name: appearFromCenter;
    animation-timing-function: linear;
    animation-fill-mode: both;
  }

  @keyframes appearFromRight {
    from {
        opacity: 0;
        transform: translateX(10%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
  }


</style>

<script>
  import HeaderComponent from '@/components/HeaderComponent.vue'
  import FooterComponent from '@/components/FooterComponent.vue'
  
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>