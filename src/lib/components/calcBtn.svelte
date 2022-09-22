<script lang="ts">
  export let text: string = ''
  export let type: string = '1'
  export let big: boolean = true
</script>

<button class="btn type-{type} {!big && 'small'}">{text}</button>

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

  .small {
    font-size: 1.25em;
  }
</style>
