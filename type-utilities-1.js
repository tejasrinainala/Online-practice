export function isBoolean(value) {
return typeof(value)=="boolean" ? true : false
}

export function isNumber(value) {
  return typeof(value)=="number"? true : false
}

export function isNull(value) {
  return value=== null ? true : false
}

export function isString(value) {
  return typeof(value)=="string"? true: false;
}

export function isSymbol(value) {
  return typeof(value)=="symbol"? true : false
}

export function isUndefined(value) {
  return value===undefined ? true : false
}
