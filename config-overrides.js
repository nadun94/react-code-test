const { override, addLessLoader, addBabelPlugin } = require('customize-cra');

module.exports = override(
    addLessLoader({ javascriptEnabled: true }),
    addBabelPlugin('@babel/plugin-proposal-optional-chaining'),
);
