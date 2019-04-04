(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lodash')) :
  typeof define === 'function' && define.amd ? define(['lodash'], factory) :
  (global = global || self, global.JStorage = factory(global._));
}(this, function (_) { 'use strict';

  _ = _ && _.hasOwnProperty('default') ? _['default'] : _;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var objPrefix = 'joey-obj-';

  var Storage =
  /*#__PURE__*/
  function () {
    // 构造函数
    function Storage() {
      _classCallCheck(this, Storage);

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


    _createClass(Storage, [{
      key: "lsSetValue",
      value: function lsSetValue(key, value) {
        if (_.isObject(value)) {
          this.lsStorage.setItem(key, "".concat(objPrefix).concat(JSON.stringify(value)));
        } else if (_.isNil(value)) {
          this.lsStorage.setItem(key, '');
        } else {
          this.lsStorage.setItem(key, value);
        }
      }
    }, {
      key: "lsGetValue",
      value: function lsGetValue(key) {
        var value = this.lsStorage.getItem(key);

        if (!_.isNil(value) && _.startsWith(value, objPrefix)) {
          var objValue = _.replace(value, objPrefix, '');

          try {
            return JSON.parse(objValue);
          } catch (_unused) {
            return value;
          }
        } else {
          return value;
        }
      }
    }, {
      key: "lsRemove",
      value: function lsRemove(key) {
        this.lsStorage.removeItem(key);
      }
      /**
       * sessionStorage
       */

    }, {
      key: "ssSetValue",
      value: function ssSetValue(key, value) {
        if (_.isObject(value)) {
          this.ssStorage.setItem(key, "".concat(objPrefix).concat(JSON.stringify(value)));
        } else if (_.isNil(value)) {
          this.ssStorage.setItem(key, '');
        } else {
          this.ssStorage.setItem(key, value);
        }
      }
    }, {
      key: "ssGetValue",
      value: function ssGetValue(key) {
        var value = this.ssStorage.getItem(key);

        if (!_.isNil(value) && _.startsWith(value, objPrefix)) {
          var objValue = _.replace(value, objPrefix, '');

          try {
            return JSON.parse(objValue);
          } catch (_unused2) {
            return value;
          }
        } else {
          return value;
        }
      }
    }, {
      key: "ssRemoveByKey",
      value: function ssRemoveByKey(key) {
        this.ssStorage.removeItem(key);
      }
      /**
       * common
       */

    }, {
      key: "clearAll",
      value: function clearAll() {
        this.lsStorage.clear();
        this.ssStorage.clear();
      }
    }]);

    return Storage;
  }();

  var main = new Storage();

  return main;

}));
