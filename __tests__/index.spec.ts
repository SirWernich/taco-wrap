import wrapWithTacos from '../src/index';

test('wraps "my name is bob" with tacos', () => {
    const result = wrapWithTacos('my name is bob');

    const expected = '🌮 my name is bob 🌮';

    expect(result).toBe(expected);
});

test('wraps "my name is bob and i could eat them every single day if i could" with tacos', () => {
    const result = wrapWithTacos('my name is bob and i could eat them every single day if i could');

    const expected = '🌮 my name is bob and i could eat them every single day if i could 🌮';

    expect(result).toBe(expected);
});

test('wraps "i" with tacos', () => {
    const result = wrapWithTacos('i');

    const expected = '🌮 i 🌮';

    expect(result).toBe(expected);
});

test('converts whitespace string to single taco', () => {
    const result = wrapWithTacos('         ');

    const expected = '🌮';

    expect(result).toBe(expected);
});

test('converts empty string to single taco', () => {
    const result = wrapWithTacos('');

    const expected = '🌮';

    expect(result).toBe(expected);
});

test('converts null value to single taco', () => {
    const result = wrapWithTacos((null as unknown) as string);

    const expected = '🌮';

    expect(result).toBe(expected);
});

test('converts undefined value to single taco', () => {
    const result = wrapWithTacos((undefined as unknown) as string);

    const expected = '🌮';

    expect(result).toBe(expected);
});
