import { magnitude } from '../../src/utils/magnitude'

test('magnitude', () => {
  expect(magnitude(5, 10, 10, 20)).toBe(11.180339887498949)
})
