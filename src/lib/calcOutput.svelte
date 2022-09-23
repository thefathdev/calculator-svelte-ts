<script lang="ts">
  import { theme } from '../stores/themeStore'
  import { value } from '../stores/valueStore'
</script>

<div class="output" data-theme={$theme}>
  <p class="output__amount">{$value}</p>
</div>

<style lang="scss">
  .output {
    margin-bottom: 1.5em;
    padding: 0.75em 1.5em 0.5em;
    border-radius: 0.5rem;
    color: var(--clr-t1-text-main);
    background-color: var(--clr-t1-bg-accent);
    transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

    &__amount {
      padding: 0.05em 0;
      font-size: 2.5em;
      text-align: end;

      @media (min-width: 36rem) {
        font-size: 3.5em;
      }
    }
  }

  .output[data-theme='2'] {
    background-color: var(--clr-t2-bg-accent);
    color: var(--clr-t2-text-main);
  }

  .output[data-theme='3'] {
    background-color: var(--clr-t3-bg-secondary);
    color: var(--clr-t3-text-main);
  }
</style>
