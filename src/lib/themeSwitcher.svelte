<script lang="ts">
  import { theme } from '../stores/themeStore'
</script>

<div class="switcher" data-theme={$theme}>
  <p class="switcher__label">THEME</p>
  <div class="switcher__states">
    <p class="switcher__state">1</p>
    <p class="switcher__state">2</p>
    <p class="switcher__state">3</p>
  </div>
  <div class="switcher__skin">
    <div />
  </div>
  <div class="switcher__toggle">
    <button
      on:click|preventDefault={() => {
        $theme = '1'
      }}
      class="switcher__btn">1</button
    >
    <button
      on:click|preventDefault={() => {
        $theme = '2'
      }}
      class="switcher__btn">2</button
    >
    <button
      on:click|preventDefault={() => {
        $theme = '3'
      }}
      class="switcher__btn">3</button
    >
  </div>
</div>

<style lang="scss">
  .switcher {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5em;

    &__label {
      color: var(--clr-t1-text-main);
      font-size: 0.75em;
      letter-spacing: 0.1em;
      transition: color 300ms ease-in-out;
    }

    &__toggle {
      position: relative;
      display: flex;
      flex-direction: row;
      gap: 0.5em;
      margin-right: 0.25em;
    }

    &__btn {
      cursor: pointer;
      border: none;
      background-color: #ffffff00;
      color: #ffffff00;
    }

    &__states {
      position: absolute;
      display: flex;
      flex-direction: row;
      gap: 1.15em;
      padding: 0.5em;
      right: 0;
      transform: translateY(-1.5em);
    }

    &__state {
      font-size: 0.75em;
      color: var(--clr-t1-text-main);
      transition: color 300ms ease-in-out;
    }

    &__skin {
      position: absolute;
      min-width: 4.5rem;
      height: 1.5rem;
      border-radius: 1rem;
      background-color: var(--clr-t1-bg-secondary);
      right: 0;
      display: flex;
      transition: background-color 300ms ease-in-out;

      > div {
        width: 1em;
        height: 1em;
        border-radius: 50%;
        background-color: var(--clr-t1-btn-bg-2);
        left: 0;
        align-self: center;
        transform: translateX(32%);
        transition: transform 300ms ease-in-out,
          background-color 300ms ease-in-out;
      }
    }
  }

  .switcher[data-theme='2'] {
    .switcher {
      &__label {
        color: var(--clr-t2-text-main);
      }

      &__state {
        color: var(--clr-t2-text-main);
      }

      &__skin {
        background-color: var(--clr-t2-bg-secondary);

        > div {
          background-color: var(--clr-t2-btn-bg-2);
          transform: translateX(calc(40% + 1.3em));
        }
      }
    }
  }

  .switcher[data-theme='3'] {
    .switcher {
      &__label {
        color: var(--clr-t3-text-main);
      }

      &__state {
        color: var(--clr-t3-text-main);
      }

      &__skin {
        background-color: var(--clr-t3-bg-secondary);

        > div {
          background-color: var(--clr-t3-btn-bg-2);
          transform: translateX(calc(70% + 2.5em));
        }
      }
    }
  }
</style>
