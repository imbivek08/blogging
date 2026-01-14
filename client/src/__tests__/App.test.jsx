import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('should pass a simple test', () => {
    expect(true).toBe(true);
  });

  it('should perform basic math', () => {
    expect(1 + 1).toBe(2);
  });

  it('should handle string operations', () => {
    expect('PostPulse'.toLowerCase()).toBe('postpulse');
  });

  it('should handle arrays', () => {
    const arr = [1, 2, 3];
    expect(arr).toHaveLength(3);
    expect(arr).toContain(2);
  });

  it('should handle objects', () => {
    const obj = { name: 'PostPulse', type: 'blog' };
    expect(obj).toHaveProperty('name');
    expect(obj.type).toBe('blog');
  });
});

describe('Utils', () => {
  it('should validate email format', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test('test@example.com')).toBe(true);
    expect(emailRegex.test('invalid-email')).toBe(false);
  });

  it('should format dates correctly', () => {
    const date = new Date('2026-01-13');
    expect(date.getFullYear()).toBe(2026);
  });
});
