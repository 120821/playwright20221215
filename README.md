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

运行sinatra 的视图页面

```
ruby app.rb
```

测试所有的test

```
npx playwright test --debug

```

测试包含locator的文件
```
npx playwright test locator
```

测试包含label的文件
```
npx playwright test label
```

获取图片
```
wget https://playwright.dev/img/logos/Browsers.png
```
