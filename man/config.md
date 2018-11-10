

#### less-loader config in webpack: 
1. Style files regexes
```json
  const cssRegex = /\.css$/;
  const cssModuleRegex = /\.module\.css$/;
  const lessRegex = /\.less$/;
  const lessModuleRegex = /\.module\.less$/;
```
2. Config less config blow css config 
(tips: u can copy a same config code ,and paste blow css)
```js
  {
    test: lessRegex,
    exclude: lessModuleRegex,
    use: getStyleLoaders({
      importLoaders: 1,
    }),
  },
  {
    test: lessModuleRegex,
    use: getStyleLoaders({
      importLoaders: 1,
      modules: true,
      getLocalIdent: getCSSModuleLocalIdent,
    }),
  },
```
3. Don`t forget resolve less-loader in common function to get style loaders
```js
  {
    loader: require.resolve('less-loader'),
    options: cssOptions,
  }
```