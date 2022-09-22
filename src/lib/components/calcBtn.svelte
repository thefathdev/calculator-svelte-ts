<script lang="ts">
  import { theme } from '../../stores/themeStore'
  export let text: string = ''
  export let type: string = '1'
  export let big: boolean = true
</script>

<button data-theme={$theme} class="btn type-{type} {!big && 'small'}"
  >{text}</button
>

<style lang="scss">
  button {
    border: none;
  }

  .btn {
    font-size: 2em;
    padding: 1.25rem 1rem 0.75rem;
    line-height: 1;
    border-radius: 0.25rem;
    box-shadow: 0 0.25rem 0 0 var(--box-shadow, black);
    text-align: center;
    transition: color 300ms ease-in-out, background-color 300ms ease-in-out,
      box-shadow 300ms ease-in-out;
  }

  .type-1 {
    --box-shadow: var(--clr-t1-btn-shadow-1);
    background-color: var(--clr-t1-btn-bg-1, white);
    color: var(--clr-t1-text-main);
  }
  .type-2 {
    --box-shadow: var(--clr-t1-btn-shadow-2);
    background-color: var(--clr-t1-btn-bg-2, white);
    color: var(--clr-t1-text-main);
  }
  .type-3 {
    --box-shadow: var(--clr-t1-btn-shadow-3);
    background-color: var(--clr-t1-btn-bg-3, white);
    color: var(--clr-t1-text-secondary);
  }

  .type-1[data-theme='2'] {
    --box-shadow: var(--clr-t2-btn-shadow-1);
    background-color: var(--clr-t2-btn-bg-1, white);
    color: var(--clr-t2-text-secondary);
  }
  .type-2[data-theme='2'] {
    --box-shadow: var(--clr-t2-btn-shadow-2);
    background-color: var(--clr-t2-btn-bg-2, white);
    color: var(--clr-t2-text-secondary);
  }
  .type-3[data-theme='2'] {
    --box-shadow: var(--clr-t2-btn-shadow-3);
    background-color: var(--clr-t2-btn-bg-3, white);
    color: var(--clr-t2-text-main);
  }

  .type-1[data-theme='3'] {
    --box-shadow: var(--clr-t3-btn-shadow-1);
    background-color: var(--clr-t3-btn-bg-1, white);
    color: var(--clr-t3-text-secondary);
  }
  .type-2[data-theme='3'] {
    --box-shadow: var(--clr-t3-btn-shadow-2);
    background-color: var(--clr-t3-btn-bg-2, white);
    color: var(--clr-t3-text-neutral-700);
  }
  .type-3[data-theme='3'] {
    --box-shadow: var(--clr-t3-btn-shadow-3);
    background-color: var(--clr-t3-btn-bg-3, white);
    color: var(--clr-t3-text-main);
  }

  .small {
    font-size: 1.25em;
  }
</style>
