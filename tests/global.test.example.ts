import { hello } from '../src/index.example';

describe('system test', function () {
  test('validate the hello variable', function () {
    type T = typeof hello;
    expect<T>(hello).toBe<T>('world');
  });
});
