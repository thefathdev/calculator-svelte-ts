<script lang="ts">
  import Navbar from '$lib/navbar.svelte'

  let theme: string = '1'
</script>

<svelte:head>
  <meta
    name="description"
    content="Calculator App made with SvelteKit and TypeScript"
  />
  <title>Calculator app | Frontend Mentor</title>
  <link rel="stylesheet" href="../src/styles/styles.scss" />
</svelte:head>

<main class="main" data-theme={theme}>
  <Navbar />

  <slot />
</main>

<footer class="attribution" style="display: none;">
  Challenge by <a
    href="https://www.frontendmentor.io?ref=challenge"
    target="_blank">Frontend Mentor</a
  >. Coded by
  <a href="https://www.frontendmentor.io/profile/whatTheFath">WhatTheFath</a>.
</footer>

<style lang="scss">
  // css custom properties on each theme on selector class 'main'
  // theme one
  .main[data-theme='1'] {
    --clr-bg-primary: hsl(222, 26%, 31%);
    --clr-bg-secondary: hsl(222, 26%, 31%);
    --clr-bg-accent: hsl(222, 26%, 31%);

    --clr-btn-bg-1: hsl(225, 21%, 49%);
    --clr-btn-shadow-1: hsl(224, 28%, 35%);
    --clr-btn-bg-2: hsl(6, 63%, 50%);
    --clr-btn-shadow-2: hsl(6, 70%, 34%);
    --clr-btn-bg-3: hsl(30, 25%, 89%);
    --clr-btn-shadow-3: hsl(28, 16%, 65%);

    --clr-text-dark: hsl(221, 14%, 31%);
    --clr-text-light: hsl(0, 0, 100%);
  }

  // theme two
  .main[data-theme='2'] {
    --clr-bg-primary: hsl(0, 0%, 90%);
    --clr-bg-secondary: hsl(0, 5%, 81%);
    --clr-bg-accent: hsl(0, 0%, 93%);

    --clr-btn-bg-1: hsl(185, 42%, 37%);
    --clr-btn-shadow-1: hsl(185, 58%, 25%);
    --clr-btn-bg-2: hsl(25, 98%, 40%);
    --clr-btn-shadow-2: hsl(25, 99%, 27%);
    --clr-btn-bg-3: hsl(45, 7%, 89%);
    --clr-btn-shadow-3: hsl(35, 11%, 61%);

    --clr-text-dark: hsl(60, 10%, 19%);
    --clr-text-light: hsl(0, 0, 100%);
  }

  // theme three
  .main[data-theme='3'] {
    --clr-bg-primary: hsl(268, 75%, 9%);
    --clr-bg-secondary: hsl(268, 71%, 12%);
    --clr-bg-accent: hsl(268, 71%, 12%);

    --clr-btn-bg-1: hsl(281, 89%, 26%);
    --clr-btn-shadow-1: hsl(285, 91%, 52%);
    --clr-btn-bg-2: hsl(176, 100%, 44%);
    --clr-btn-shadow-2: hsl(177, 92%, 70%);
    --clr-btn-bg-3: hsl(268, 47%, 21%);
    --clr-btn-shadow-3: hsl(290, 70%, 36%);

    --clr-text-dark: hsl(198, 20%, 13%);
    --clr-text-light: hsl(52, 100%, 62%);
    --clr-neutral-0: hsl(0, 0, 100%);
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
