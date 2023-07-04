export const throttle = <T extends any[]>(func: (...args: T) => any, wait: number) => {
  let prev: number;
  let current: number;
  return (...args: T) => {
    current = new Date().getTime();
    if (!prev || current - prev > wait) {
      func.apply(this, args);
      prev = current;
    }
  };
};
