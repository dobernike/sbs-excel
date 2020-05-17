import {createStore} from './createStore';

describe('TEST', function() {
  test('test', () => {
    const store = createStore(() => {}, {})
    expect(store).toBeDefined()
  })
});
