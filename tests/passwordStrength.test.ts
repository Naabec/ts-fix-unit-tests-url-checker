import {calculatePasswordStrength} from "../src/passwordStrength";


describe('calculatePasswordStrength', () => {
    test('Verify that  "Very Weak" is returned for a password less than 8 characters', () => {
        expect(calculatePasswordStrength('qwe')).toBe('Very Weak')
    })

    test('Verify that "Weak" is returned  for a password with length more than 8 char  but low complexity - only small letters and one number', () => {
        expect(calculatePasswordStrength('qwerty12')).toBe('Weak');
    })

    test('Verify that "Moderate" is returned for a password with moderate complexity', () => {
        expect(calculatePasswordStrength('qwerty123456')).toBe('Moderate')
    })

    test('Verify that "Strong" is returned for a password with good complexity', () => {
        expect(calculatePasswordStrength('Abcd1234!')).toBe('Strong');
    });

    test('Verify that "Strong" is returned for a password with length more than 12 chars and good complexity', () => {
        expect(calculatePasswordStrength('Abcdef123456!')).toBe('Strong');
    });
});