module.exports = {
    "extends": "airbnb",
    "globals": {
        "window": true,
        "fetch": true,
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
    ],
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
      }
    },
    "rules": {
      "semi": "off",
      "no-underscore-dangle": "off",
      "max-len": ["error", 130],
      "new-cap": "off",
      "global-require": "off",
      "no-console": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/prop-types": "off",  //  temp
      "import/no-extraneous-dependencies": "off",  //  package.json directory hierarchy problem
      "import/prefer-default-export": "off",
      "react/jsx-closing-bracket-location": "off",
      "default-case": "off",
      "react/no-did-update-set-state": "off", //  some are not alternative
      "no-param-reassign": ["error", {"props": false}],
      "react/prefer-stateless-function": "off",
      "react/sort-comp": ["error", {
        order: [
          'static-methods',
          'lifecycle',
          'everything-else',
          'render'
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount'
          ]
        }
      }],
      "no-mixed-operators": ["error", {"allowSamePrecedence": true}],
      "react/jsx-no-target-blank": "off",
      "no-constant-condition": ["error", { "checkLoops": false }],
      "react/no-find-dom-node": "off"
    }
};
