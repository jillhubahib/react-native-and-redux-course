Every folder is a React Native app, perform the following in its root path to run the ios simulator:

```
npm install
react-native run-ios
```

## ESLint setup

Install `eslint-config-rallycoding` as development dependency by running command: `npm install --save-dev eslint-config-rallycoding`

Create eslint config file(`.eslintrc`) with below content:
```
{
  "extends": "rallycoding"
}
```