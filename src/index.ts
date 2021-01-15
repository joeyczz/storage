/**
 * 缓存处理工具
 */
import { localJStorage } from "./localStorage";
import { sessionJStorage } from "./sessionStorage";

export const clearAll = () => {
  localJStorage.clear();
  sessionJStorage.clear();
};

export * from "./localStorage";
export * from "./sessionStorage";
