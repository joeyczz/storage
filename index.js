/**
 * 缓存处理工具
 */
import _ from "lodash";

class Storage {
  // 构造函数
  constructor() {
    if (!window.localStorage || !window.sessionStorage) {
      console.error("该浏览器不支持，请使用新版Chrome或者Firefox。");
    } else {
      this.lsStorage = window.localStorage;
      this.ssStorage = window.sessionStorage;
    }
  }

  /**
   * localStorage
   */
  lsSetValue(key, value) {
    if (_.isObject(value)) {
      lsStorage.setItem(prefix + key, JSON.stringify(value));
    } else if (_.isNil(value)) {
      lsStorage.setItem(prefix + key, "");
    } else {
      lsStorage.setItem(prefix + key, value);
    }
  }

  lsGetValue(key) {
    const value = lsStorage.getItem(prefix + key);
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }

  lsRemove(key) {
    lsStorage.removeItem(prefix + key);
  }

  /**
   * sessionStorage
   */
  ssSetValue(key, value) {
    if (value instanceof Object) {
      ssStorage.setItem(prefix + key, JSON.stringify(value));
    } else if (_.isNil(value)) {
      ssStorage.setItem(prefix + key, "");
    } else {
      ssStorage.setItem(prefix + key, value);
    }
  }

  ssGetValue(key) {
    const value = ssStorage.getItem(prefix + key);
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }

  ssRemoveByKey(key) {
    ssStorage.removeItem(prefix + key);
  }

  /**
   * common
   */
  clearAll() {
    ssStorage.clear();
    ssStorage.clear();
  }
}

export default new Storage();
