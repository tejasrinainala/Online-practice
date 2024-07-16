export function isArray(value) {
  return Array.isArray(value);
}

export function isFunction(value) {
  return typeof(value)==='function'
}

export function isObject(value) {
  return value !== null && (typeof value === 'object' || typeof value === 'function');
}

export function isPlainObject(value) {
  if (typeof value !== 'object' || value === null) return false;
  
  let proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}
