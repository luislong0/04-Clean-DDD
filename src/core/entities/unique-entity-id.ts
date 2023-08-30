import { randomUUID } from 'node:crypto'

export class UniqueEntityID {
  private value: string

  toString() {
    // Retorna string
    return this.value
  }

  toValue() {
    // Retorna valor bruto
    return this.value
  }

  constructor(value?: string) {
    this.value = value ?? randomUUID()
  }

  equals(id: UniqueEntityID) {
    return id.toValue() === this.value
  }
}
