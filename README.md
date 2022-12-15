### 初始化

```
mkdir playwright2012...
cd playwright2012...
npm init playwright@latest

```

或者

```
npm init playwright@latest new-project
cd new-project

```

### 更换测试的浏览器

```
vim playwright.config.js

```

### 测试

测试所有的test

```
npx playwright test --debug

```

测试包含locator的文件
```
npx playwright test locator
```