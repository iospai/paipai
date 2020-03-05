// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import moment from 'moment-es6'

export default class DummyClass {
  private a: string
  private b: string

  constructor() {
    this.a = 'a'
    this.b = '123'
  }
}

export function tell(): string {
  return moment().format('MMMM Do YYYY, h:mm:ss a')
}
