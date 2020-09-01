/**
 * @Method: Returns the string passed in, but wrapped in tacos. Returns a single taco if string is empty or whitespace.
 * @Param {string}
 * @Return {string}
 */
export default (str: string): string => {
    if (str && str.trim()) {
        return `🌮 ${str} 🌮`;
    }

    return '🌮';
};
