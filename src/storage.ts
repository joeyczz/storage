export default class JStorage {
  private storage: Storage;

  // 构造函数
  constructor(storage: Storage) {
    if (!storage) {
      throw new Error("请使用storage");
    }
    this.storage = storage;
  }

  /**
   * 写入 storage
   * @param key
   * @param value
   */
  setValue(key: string, value: any) {
    const data = { value };
    this.storage.setItem(key, JSON.stringify(data));
  }

  /**
   * 读取 storage
   * @param key
   */
  getValue(key: string): any {
    const dataStr = this.storage.getItem(key);
    if (!dataStr) return null;
    let data;
    try {
      data = JSON.parse(dataStr);
    } catch (e) {
      console.log(`error JSON parse with ${dataStr}`);
      return null;
    }
    return data.value;
  }

  /**
   * 删除 storage 里面数据
   * @param key
   */
  remove(key: string) {
    this.storage.removeItem(key);
  }

  /**
   * 清空 storage
   */
  clear() {
    this.storage.clear();
  }
}
