import { override, addLessLoader, addBabelPlugin } from 'customize-cra';

module.exports = override(
    addLessLoader({ javascriptEnabled: true }),
    addBabelPlugin('@babel/plugin-proposal-optional-chaining'),
);
