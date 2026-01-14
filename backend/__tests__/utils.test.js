import { errorHandler } from '../api/utils/error.js';

describe('Error Utility', () => {
  describe('errorHandler', () => {
    it('should create an error object with statusCode and message', () => {
      const statusCode = 404;
      const message = 'Not Found';
      
      const error = errorHandler(statusCode, message);
      
      expect(error).toBeInstanceOf(Error);
      expect(error.statusCode).toBe(statusCode);
      expect(error.message).toBe(message);
    });

    it('should create a 500 error for server errors', () => {
      const error = errorHandler(500, 'Internal Server Error');
      
      expect(error.statusCode).toBe(500);
      expect(error.message).toBe('Internal Server Error');
    });

    it('should create a 401 error for unauthorized access', () => {
      const error = errorHandler(401, 'Unauthorized');
      
      expect(error.statusCode).toBe(401);
      expect(error.message).toBe('Unauthorized');
    });
  });
});

describe('Basic Tests', () => {
  it('should pass a simple test', () => {
    expect(true).toBe(true);
  });

  it('should perform basic math', () => {
    expect(1 + 1).toBe(2);
  });

  it('should handle string operations', () => {
    expect('hello'.toUpperCase()).toBe('HELLO');
  });
});
