import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

export let value: Writable<number> = writable(0)
