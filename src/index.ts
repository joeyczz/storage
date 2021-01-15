/**
 * 缓存处理工具
 */
import { localJStorage } from "./localStorage";
import { sessionJStorage } from "./sessionStorage";

export const removeAll = () => {
  localJStorage.clearAll();
  sessionJStorage.clearAll();
};

export * from "./localStorage";
export * from "./sessionStorage";
