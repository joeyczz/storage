# storage

###

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
