import { hello } from './index.example';

describe('isolated test', function () {
  test('validate the hello variable', function () {
    type T = typeof hello;
    expect<T>(hello).toBe<T>('world');
  });
});
