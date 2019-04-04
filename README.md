# storage

[![Build Status](https://travis-ci.com/joeyczz/storage.svg?branch=master)](https://travis-ci.com/joeyczz/storage)
[![codecov](https://codecov.io/gh/joeyczz/storage/branch/master/graph/badge.svg)](https://codecov.io/gh/joeyczz/storage)

## 安装

```
npm install joey-storage
or 
yarn add joey-storage

```

## 使用

```
<!-- import -->
import storage from 'joey-storage';

<!-- localStorage 存 -->
storage.lsSetValue('key', 'hhhh');

<!-- localStorage 取 -->
const value = storage.lsGetValue('key');
console.log('storage', value);

<!-- localStorage 删除key -->
storage.lsRemove('key');

<!-- sessionStorage 存 -->
storage.ssSetValue('sskey', ['sshhhh']);

<!-- sessionStorage 取 -->
const ssvalue = storage.ssGetValue('sskey');
console.log('storage', ssvalue);

<!-- sessionStorage 删除key -->
storage.ssRemove('sskey');

<!-- 清空所有  localStorage、sessionStorage -->
storage.clearAll();

```

## 标注

ls 前缀是 'localStorage' 缩写

ss 前缀是 'sessionStorage' 缩写

如果存储的值是对象（包括 Object、Array。_.isObject() 判断为对象），其值将会被 JSON.stringify 并带上 'joey-prefix' 前缀进行存储。

当取值时，对应值如果包含前缀 'joey-prefix' 也将被 JSON.prase
