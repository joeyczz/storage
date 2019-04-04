# storage

## 安装

```
npm install joey-storage
or 
yarn add joey-storage

```

## 使用

```
import storage from 'joey-storage';

console.log(storage);

storage.lsSetValue('key', 'hhhh');

const value = storage.lsGetValue('key');
console.log('storage', value);


storage.ssSetValue('sskey', ['sshhhh']);

const ssvalue = storage.ssGetValue('sskey');
console.log('storage', ssvalue);
```

## 标注

ls 前缀是 'localStorage' 缩写

ss 前缀是 'sessionStorage' 缩写

如果存储的值是对象（包括 Object、Array。_.isObject() 判断为对象），其值将会被 JSON.stringify 并带上 'joey-prefix' 前缀进行存储。

当取值时，对应值如果包含前缀 'joey-prefix' 也将被 JSON.prase
