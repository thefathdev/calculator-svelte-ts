import type { Writable } from 'svelte/store'

type Operator = 'add' | 'substract' | 'multiply' | 'divide'

export class Calculator {
  private store: Writable<number>
  private curr: number
  private prev: number
  private operator: Operator
  private isOpInserted: boolean
  private isPointInserted: boolean

  constructor(store: Writable<number>) {
    this.store = store
    this.curr = 0
    this.prev = 0
    this.operator = 'add'
    this.isOpInserted = false
    this.isPointInserted = false
  }

  public appendVal(n: number): void {
    let curr: string = String(this.curr)
    if (this.isPointInserted) {
      curr = curr + '.' + String(n)
      this.isPointInserted = false
    } else {
      curr = curr + String(n)
    }
    this.curr = Number(curr)
    this.updateVal()
  }

  public insertPoint(): void {
    this.isPointInserted = true
  }

  public insertOp(s: Operator): void {
    if (this.isOpInserted) {
      if (this.curr === 0) {
        this.operator = s
        return
      }
      this.sum(this.operator)
      this.operator = s
      this.curr = 0
      return
    }
    this.isOpInserted = true
    this.operator = s
    this.prev = this.curr
    this.updateVal()
    this.curr = 0
  }

  public sumVal(): void {
    this.sum(this.operator)
    this.updateVal()
    this.isOpInserted = false
  }

  private sum(op: Operator): void {
    let sumValue: number = 0
    switch (op) {
      case 'add':
        sumValue = this.prev + this.curr
        break
      case 'substract':
        sumValue = this.prev - this.curr
        break
      case 'multiply':
        sumValue = this.prev * this.curr
        break
      case 'divide':
        sumValue = this.prev / this.curr
        break

      default:
        break
    }
    this.curr = Number(sumValue.toFixed(3))
    this.prev = this.curr
    this.updateVal()
  }

  public deleteVal(): void {
    let curr: string = String(this.curr)
    this.curr = Number(curr.slice(0, curr.length - 1))
    this.updateVal()
  }

  public resetVal(): void {
    this.curr = 0
    this.prev = 0
    this.updateVal()
  }

  private updateVal(): void {
    this.store.update(() => {
      return this.curr
    })
  }
}
