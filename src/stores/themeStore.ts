import { writable } from 'svelte/store'
import { browser } from '$app/environment'

let isLightTheme =
  browser && window.matchMedia('(prefers-color-scheme: light)').matches

export let theme = writable(!isLightTheme ? '1' : '2')
