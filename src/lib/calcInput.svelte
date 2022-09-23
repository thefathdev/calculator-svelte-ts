<script>
  import { theme } from '../stores/themeStore'
  import { value } from '../stores/valueStore'
  import { Calculator } from '../utils/calculator'
  import CalcBtn from './components/calcBtn.svelte'

  const calc = new Calculator(value)
</script>

<div class="keys" data-theme={$theme}>
  <div class="keys__table">
    <CalcBtn text="7" type="3" on:click={() => calc.appendVal(7)} />
    <CalcBtn text="8" type="3" on:click={() => calc.appendVal(8)} />
    <CalcBtn text="9" type="3" on:click={() => calc.appendVal(9)} />
    <CalcBtn
      text="DEL"
      big={false}
      type="1"
      on:click={() => calc.deleteVal()}
    />

    <CalcBtn text="4" type="3" on:click={() => calc.appendVal(4)} />
    <CalcBtn text="5" type="3" on:click={() => calc.appendVal(5)} />
    <CalcBtn text="6" type="3" on:click={() => calc.appendVal(6)} />
    <CalcBtn text="+" type="3" on:click={() => calc.insertOp('add')} />

    <CalcBtn text="1" type="3" on:click={() => calc.appendVal(1)} />
    <CalcBtn text="2" type="3" on:click={() => calc.appendVal(2)} />
    <CalcBtn text="3" type="3" on:click={() => calc.appendVal(3)} />
    <CalcBtn text="-" type="3" on:click={() => calc.insertOp('substract')} />

    <CalcBtn text="." type="3" on:click={() => calc.insertPoint()} />
    <CalcBtn text="0" type="3" on:click={() => calc.appendVal(0)} />
    <CalcBtn text="/" type="3" on:click={() => calc.insertOp('divide')} />
    <CalcBtn text="x" type="3" on:click={() => calc.insertOp('multiply')} />
  </div>
  <div class="keys__table keys__table--spread">
    <CalcBtn
      text="RESET"
      big={false}
      type="1"
      on:click={() => calc.resetVal()}
    />
    <CalcBtn text="=" big={false} type="2" on:click={() => calc.sumVal()} />
  </div>
</div>

<style lang="scss">
  .keys {
    --gap: 1em;
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    padding: 1.75em 1.5em;
    border-radius: 0.75rem;
    background-color: var(--clr-t1-bg-secondary);
    transition: background-color 300ms ease-in-out;

    @media (min-width: 36rem) {
      --gap: 1.5em;
    }

    &__table {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--gap);

      &--spread {
        grid-template-columns: 1fr 1fr;
      }
    }
  }

  .keys[data-theme='2'] {
    background-color: var(--clr-t2-bg-secondary);
  }

  .keys[data-theme='3'] {
    background-color: var(--clr-t3-bg-secondary);
  }
</style>
