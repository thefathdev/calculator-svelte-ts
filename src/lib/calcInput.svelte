<script>
  import { theme } from '../stores/themeStore'
  import CalcBtn from './components/calcBtn.svelte'
</script>

<div class="keys" data-theme={$theme}>
  <div class="keys__table">
    <CalcBtn text="7" type="3" />
    <CalcBtn text="8" type="3" />
    <CalcBtn text="9" type="3" />
    <CalcBtn text="DEL" big={false} type="1" />

    <CalcBtn text="4" type="3" />
    <CalcBtn text="5" type="3" />
    <CalcBtn text="6" type="3" />
    <CalcBtn text="+" type="3" />

    <CalcBtn text="1" type="3" />
    <CalcBtn text="2" type="3" />
    <CalcBtn text="3" type="3" />
    <CalcBtn text="-" type="3" />

    <CalcBtn text="." type="3" />
    <CalcBtn text="0" type="3" />
    <CalcBtn text="/" type="3" />
    <CalcBtn text="x" type="3" />
  </div>
  <div class="keys__table keys__table--spread">
    <CalcBtn text="RESET" big={false} type="1" />
    <CalcBtn text="=" big={false} type="2" />
  </div>
</div>

<style lang="scss">
  .keys {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 1.75em 1.5em;
    border-radius: 0.75rem;
    background-color: var(--clr-t1-bg-secondary);

    &__table {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1em;

      &--spread {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
</style>
