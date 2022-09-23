<script lang="ts">
  import { theme } from '../../stores/themeStore'
  export let text: string = ''
  export let type: string = '1'
  export let big: boolean = true
</script>

<button
  on:click|preventDefault
  data-theme={$theme}
  class="btn type-{type} {!big && 'small'}">{text}</button
>

<style lang="scss">
  button {
    border: none;
  }

  // TODO: Make more interactive button
  .btn {
    cursor: pointer;
    font-size: 2em;
    padding: 1.25rem 1rem 0.75rem;
    line-height: 1;
    border-radius: 0.25rem;
    box-shadow: 0 0.25rem 0 0 var(--box-shadow, black);
    text-align: center;
    transition: color 300ms ease-in-out, background-color 300ms ease-in-out,
      box-shadow 300ms ease-in-out;

    @media (min-width: 36rem) {
      font-size: 2.25em;
      padding: 1rem 2rem 0.5rem;
      border-radius: 0.5rem;
    }
  }

  @mixin active-state($bg-color: hsl(0, 0%, 82%)) {
    &:hover,
    &:focus {
      background-color: $bg-color;
    }
  }

  .type-1 {
    --box-shadow: var(--clr-t1-btn-shadow-1);
    background-color: var(--clr-t1-btn-bg-1, white);
    color: var(--clr-t1-text-main);

    @include active-state(var(--clr-t1-btn-active-1));
  }
  .type-2 {
    --box-shadow: var(--clr-t1-btn-shadow-2);
    background-color: var(--clr-t1-btn-bg-2, white);
    color: var(--clr-t1-text-main);

    @include active-state(var(--clr-t1-btn-active-2));
  }
  .type-3 {
    --box-shadow: var(--clr-t1-btn-shadow-3);
    background-color: var(--clr-t1-btn-bg-3, white);
    color: var(--clr-t1-text-secondary);

    @include active-state(var(--clr-t1-btn-active-3));
  }

  .type-1[data-theme='2'] {
    --box-shadow: var(--clr-t2-btn-shadow-1);
    background-color: var(--clr-t2-btn-bg-1, white);
    color: var(--clr-t2-text-secondary);

    @include active-state(var(--clr-t2-btn-active-1));
  }
  .type-2[data-theme='2'] {
    --box-shadow: var(--clr-t2-btn-shadow-2);
    background-color: var(--clr-t2-btn-bg-2, white);
    color: var(--clr-t2-text-secondary);

    @include active-state(var(--clr-t2-btn-active-2));
  }
  .type-3[data-theme='2'] {
    --box-shadow: var(--clr-t2-btn-shadow-3);
    background-color: var(--clr-t2-btn-bg-3, white);
    color: var(--clr-t2-text-main);

    @include active-state(var(--clr-t2-btn-active-3));
  }

  .type-1[data-theme='3'] {
    --box-shadow: var(--clr-t3-btn-shadow-1);
    background-color: var(--clr-t3-btn-bg-1, white);
    color: var(--clr-t3-text-secondary);

    @include active-state(var(--clr-t3-btn-active-1));
  }
  .type-2[data-theme='3'] {
    --box-shadow: var(--clr-t3-btn-shadow-2);
    background-color: var(--clr-t3-btn-bg-2, white);
    color: var(--clr-t3-text-neutral-700);

    @include active-state(var(--clr-t3-btn-active-2));
  }
  .type-3[data-theme='3'] {
    --box-shadow: var(--clr-t3-btn-shadow-3);
    background-color: var(--clr-t3-btn-bg-3, white);
    color: var(--clr-t3-text-main);

    @include active-state(var(--clr-t3-btn-active-3));
  }

  .small {
    font-size: 1.25em;

    @media (min-width: 36rem) {
      font-size: 1.5em;
    }
  }
</style>
