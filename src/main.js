/* global window */
/**
 * 缓存处理工具
 */
import _ from 'lodash';
import { version } from '../package.json';

const objPrefix = 'joey-obj-';

class Storage {
  // 构造函数
  constructor() {
    this.version = version;
    if (!window.localStorage || !window.sessionStorage) {
      throw new Error('该浏览器不支持，请使用新版Chrome或者Firefox。');
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
      this.lsStorage.setItem(key, `${objPrefix}${JSON.stringify(value)}`);
    } else if (_.isNil(value)) {
      this.lsStorage.setItem(key, '');
    } else {
      this.lsStorage.setItem(key, value);
    }
  }

  lsGetValue(key) {
    const value = this.lsStorage.getItem(key);
    if (!_.isNil(value) && _.startsWith(value, objPrefix)) {
      const objValue = _.replace(value, objPrefix, '');
      try {
        return JSON.parse(objValue);
      } catch (e) {
        return value;
      }
    } else {
      return value;
    }
  }

  lsRemove(key) {
    this.lsStorage.removeItem(key);
  }

  /**
   * sessionStorage
   */
  ssSetValue(key, value) {
    if (_.isObject(value)) {
      this.ssStorage.setItem(key, `${objPrefix}${JSON.stringify(value)}`);
    } else if (_.isNil(value)) {
      this.ssStorage.setItem(key, '');
    } else {
      this.ssStorage.setItem(key, value);
    }
  }

  ssGetValue(key) {
    const value = this.ssStorage.getItem(key);
    if (!_.isNil(value) && _.startsWith(value, objPrefix)) {
      const objValue = _.replace(value, objPrefix, '');
      try {
        return JSON.parse(objValue);
      } catch (e) {
        return value;
      }
    } else {
      return value;
    }
  }

  ssRemove(key) {
    this.ssStorage.removeItem(key);
  }

  /**
   * common
   */
  clearAll() {
    this.lsStorage.clear();
    this.ssStorage.clear();
  }
}

export default new Storage();
