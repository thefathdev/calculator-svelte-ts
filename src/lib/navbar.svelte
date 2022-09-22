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
    margin-bottom: 1.25em;
    display: flex;
    align-items: center;

    &__logo {
      font-size: 2em;
      color: var(--clr-t1-text-main);
      margin-right: auto;
      transition: color 300ms ease-in-out;
    }
  }

  .nav[data-theme='2'] {
    .nav {
      &__logo {
        color: var(--clr-t2-text-main);
      }
    }
  }

  .nav[data-theme='3'] {
    .nav {
      &__logo {
        color: var(--clr-t3-text-main);
      }
    }
  }
</style>
