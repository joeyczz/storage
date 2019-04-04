# storage

###

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
