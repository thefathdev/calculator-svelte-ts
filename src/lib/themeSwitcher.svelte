<script lang="ts">
  import { theme } from '../stores/themeStore'
</script>

<div class="switcher" data-theme={$theme}>
  <p class="switcher__label">THEME</p>
  <div class="switcher__toggle" />
</div>

<style lang="scss">
  .switcher {
    &__label {
      color: var(--clr-t1-text-main);
      font-size: 0.75em;
      letter-spacing: 0.1em;
    }
  }
</style>
