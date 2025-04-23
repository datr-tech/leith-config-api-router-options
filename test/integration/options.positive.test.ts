import { options } from '../../dist';

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
