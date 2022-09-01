import { hello } from '..';

describe('hello', () => {
  it('returns Hello world', () => {
    expect(hello()).toEqual('Hello world');
  });
});
