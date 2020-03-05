import DummyClass, { tell } from '../src/paipai'
import moment from 'moment-es6'

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('DummyClass is instantiable', () => {
    expect(new DummyClass()).toBeInstanceOf(DummyClass)
  })

  it('测试', () => {
    expect(tell()).toEqual(moment().format('MMMM Do YYYY, h:mm:ss a'))
  })
})
