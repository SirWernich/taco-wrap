module.exports = {
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json'
        }
    },
    moduleDirectories: ['node_modules'],
    moduleFileExtensions: ['js', 'ts'],
    //snapshotSerializers: [
    //    'jest-serializer-vue'
    //],
    moduleNameMapper: {
        '~/(.*)': '<rootDir>/$1'
    },
    testMatch: ['**/tests/unit/**/*.spec.(js|jsx|ts|tsx)', '**/__tests__/*?(.spec).(js|jsx|ts|tsx)'],
    //testURL: 'http://localhost/',
    transform: {
        //'.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':'jest-transform-stub',
        '^.+\\.(ts|tsx)?$': 'ts-jest'
    }
    // setupFiles: ["<rootDir>/jest.init.js"]
};
