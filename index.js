module.exports = (str) => {
    if (str && str.trim()) {
        return `🌮 ${str} 🌮`;
    }

    return '🌮';
};