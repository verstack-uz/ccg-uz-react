/**
 * @desc Class that mimics JS's native localStorage for testing
 * purposes, storing key-value pairs in memory using a Map. Provides
 * the same interface, but does not persist data across sessions.
 */
class LocalStorageMock {
  private data = new Map<string, any>();

  clear() {
    this.data.clear();
  }

  getItem<T>(key: string): T | null {
    if (this.data.has(key)) {
      return this.data.get(key) as T;
    } else {
      return null;
    }
  }

  setItem<T>(key: string, value: T) {
    this.data.set(key, value);
  }

  removeItem(key: string) {
    this.data.delete(key);
  }
}

/**
 * @desc Declares a global mock for localStorage.
 * Useful for testing environments where localStorage is not available.
 */
export function declareLocalStorageMock(): void {
  Object.defineProperty(global, "localStorage", {
    value: new LocalStorageMock(),
    configurable: true,
    writable: true,
  });
}
