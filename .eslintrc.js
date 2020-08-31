module.exports={
    plugins: ["react"],
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 6,
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        es6: true,
        browser: true,
        node: true
    },
    rules: {
        "eol-last": 2,
        //"no-undef":2,
        "no-console": 0,
        "space-infix-ops":2,
        "no-multiple-empty-lines": 2
    },
    globals:{
        "document": true,
        "localStorage": true,
        "window": true
    }
}