import { options } from '@app-lcaro/options';

describe('options', () => {
  describe('positive', () => {
    test('should contain the expected options', () => {
      expect(options).toEqual({
        mergeParams: true,
        strict: false,
      });
    });
  });
});
