import { useEffect, useSyncExternalStore, type Dispatch, type SetStateAction } from "react";

const getItem = (key: string) => window.localStorage.getItem(key);

const setItem = (key: string, value: unknown) => {
  const stringfiedValue = JSON.stringify(value);
  window.localStorage.setItem(key, stringfiedValue);
  window.dispatchEvent(new StorageEvent('storage'));
};

const subscribe = (onStoreChange: () => void) => {
  window.addEventListener('storage', onStoreChange);
  return () => window.removeEventListener('storage', onStoreChange);
};

function useLocalStorage<T = undefined> (key: string): [T | undefined, Dispatch<SetStateAction<T | undefined>>]
function useLocalStorage<T> (key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>]
function useLocalStorage<T> (key: string, initialValue?: T) {
  const getSnapshot = () => getItem(key);

  const store = useSyncExternalStore(
    subscribe,
    getSnapshot,
  );

  const state = store ? JSON.parse(store) as T : initialValue;

  const setState: Dispatch<SetStateAction<T | undefined>> = (v) => {
    const nextState = v instanceof Function ? v(state) : v;
    setItem(key, nextState);
  };

  useEffect(() => {
    if (getItem(key) === null && typeof initialValue !== 'undefined') {
      setItem(key, initialValue);
    }
  }, [key, initialValue]);

  return [state, setState] as const;
}

export default useLocalStorage;
