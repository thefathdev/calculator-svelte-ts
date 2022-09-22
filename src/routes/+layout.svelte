<script lang="ts">
  import { theme } from '../stores/themeStore'
  import Navbar from '$lib/navbar.svelte'
</script>

<svelte:head>
  <meta
    name="description"
    content="Calculator App made with SvelteKit and TypeScript"
  />
  <title>Calculator app | Frontend Mentor</title>
  <link rel="stylesheet" href="/styles/styles.css" />
</svelte:head>

<main class="main" data-theme={$theme}>
  <section class="container">
    <Navbar />
    <slot />
  </section>
</main>

<footer class="attribution" style="display: none;">
  Challenge by <a
    href="https://www.frontendmentor.io?ref=challenge"
    target="_blank">Frontend Mentor</a
  >. Coded by
  <a href="https://www.frontendmentor.io/profile/whatTheFath">WhatTheFath</a>.
</footer>

<style lang="scss">
  :global(*) {
    // css custom properties
    // theme one
    --clr-t1-bg-primary: hsl(222, 26%, 31%);
    --clr-t1-bg-secondary: hsl(223, 31%, 20%);
    --clr-t1-bg-accent: hsl(224, 36%, 15%);

    --clr-t1-btn-bg-1: hsl(225, 21%, 49%);
    --clr-t1-btn-shadow-1: hsl(224, 28%, 35%);
    --clr-t1-btn-bg-2: hsl(6, 63%, 50%);
    --clr-t1-btn-shadow-2: hsl(6, 70%, 34%);
    --clr-t1-btn-bg-3: hsl(30, 25%, 89%);
    --clr-t1-btn-shadow-3: hsl(28, 16%, 65%);

    --clr-t1-text-main: white;
    --clr-t1-text-secondary: hsl(221, 14%, 31%);

    // theme two
    --clr-t2-bg-primary: hsl(0, 0%, 90%);
    --clr-t2-bg-secondary: hsl(0, 5%, 81%);
    --clr-t2-bg-accent: hsl(0, 0%, 93%);

    --clr-t2-btn-bg-1: hsl(185, 42%, 37%);
    --clr-t2-btn-shadow-1: hsl(185, 58%, 25%);
    --clr-t2-btn-bg-2: hsl(25, 98%, 40%);
    --clr-t2-btn-shadow-2: hsl(25, 99%, 27%);
    --clr-t2-btn-bg-3: hsl(45, 7%, 89%);
    --clr-t2-btn-shadow-3: hsl(35, 11%, 61%);

    --clr-t2-text-main: hsl(60, 10%, 19%);
    --clr-t2-text-secondary: white;

    // theme three

    --clr-t3-bg-primary: hsl(268, 75%, 9%);
    --clr-t3-bg-secondary: hsl(268, 71%, 12%);

    --clr-t3-btn-bg-1: hsl(281, 89%, 26%);
    --clr-t3-btn-shadow-1: hsl(285, 91%, 52%);
    --clr-t3-btn-bg-2: hsl(176, 100%, 44%);
    --clr-t3-btn-shadow-2: hsl(177, 92%, 70%);
    --clr-t3-btn-bg-3: hsl(268, 47%, 21%);
    --clr-t3-btn-shadow-3: hsl(290, 70%, 36%);

    --clr-t3-text-secondary: white;
    --clr-t3-text-main: hsl(52, 100%, 62%);
    --clr-t3-neutral-700: hsl(198, 20%, 13%);
  }

  .main {
    background-color: var(--clr-t1-bg-primary);
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    transition: background-color 300ms ease-in-out;
  }

  .main[data-theme='2'] {
    background-color: var(--clr-t2-bg-primary);
  }

  .main[data-theme='3'] {
    background-color: var(--clr-t3-bg-primary);
  }

  .container {
    max-width: 36rem;
    margin-inline: 1.5em;

    @media (min-width: 36rem) {
      margin-inline: auto;
    }
  }

  // frontend mentor attribution
  .attribution {
    font-size: 11px;
    text-align: center;
  }
  .attribution a {
    color: hsl(228, 45%, 44%);
  }
</style>
