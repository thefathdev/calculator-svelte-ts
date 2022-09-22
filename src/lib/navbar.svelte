<script>
  import { theme } from '../stores/themeStore'
  import ThemeSwitcher from './themeSwitcher.svelte'
</script>

<navbar class="nav" data-theme={$theme}>
  <h1 class="nav__logo">calc</h1>
  <ThemeSwitcher />
</navbar>

<style lang="scss">
  .nav {
    display: flex;
    align-items: center;

    &__logo {
      font-size: 2em;
      color: var(--clr-t1-text-main);
      margin-right: auto;
    }
  }
</style>
