# storage

[![codecov](https://codecov.io/gh/joeyczz/storage/branch/master/graph/badge.svg)](https://codecov.io/gh/joeyczz/storage)

重写了storage

```
setValue('key', any);
<!-- 数据将以 JSON.stringify({ value: any }) 存入 -->
```
## 安装

```
npm install @joey-c/storage
or 
yarn add @joey-c/storage

```

## 使用

```
<!-- import -->
import { clearAll, localJStorage, sessionJStorage } from '@joey-c/storage';

<!-- localStorage 存 -->
localJStorage.setValue('key', 'hhhh');

<!-- localStorage 取 -->
const value = localJStorage.getValue('key');
console.log('storage', value);

<!-- localStorage 删除key -->
localJStorage.remove('key');

<!-- localStorage 清空 -->
localJStorage.clearAll();

<!-- sessionStorage 存 -->
sessionJStorage.setValue('sskey', ['sshhhh']);

<!-- sessionStorage 取 -->
const ssvalue = sessionJStorage.getValue('sskey');
console.log('storage', ssvalue);

<!-- sessionStorage 删除key -->
sessionJStorage.remove('sskey');

<!-- sessionStorage 清空 -->
sessionJStorage.clearAll();

<!-- 清空所有  localStorage、sessionStorage -->
clearAll();

```

## 标注

localJStorage 使用 window.localStorage

sessionJStorage 使用 window.sessionStorage
