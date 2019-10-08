class rflx {
  static isObjectLiteral(something) {
    return Object.is(Object.prototype.call(something), "[object Object]");
  }
  static isArray(something) {
    return Array.isArray(something);
  }
  static isString(something) {
    return Object.is(typeof something, "string") || something instanceof String;
  }
  static isNumber(something) {
    return Object.is(typeof something, "number");
  }
  static isMap(something) {
    return something instanceof Map;
  }
  static isSet(something) {
    return something instanceof Set;
  }
  static isBoolean(something) {
    return Object.is(something, 'boolean')
  }
}

