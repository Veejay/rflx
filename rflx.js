class rflx {
  /**
   * @param {*} something
   * @returns {Boolean} - whether or not something is an object literal
   */
  static isObject(something) {
    return Object.is(Object.prototype.call(something), "[object Object]");
  }
  /**
   * @param {*} something
   * @returns {Boolean} - whether or not something is an array
   */
  static isArray(something) {
    return Array.isArray(something);
  }
  /**
   * @param {*} something
   * @returns {Boolean} - whether or not something is a string
   */
  static isString(something) {
    return Object.is(typeof something, "string") || something instanceof String;
  }
  /**
   * @param {*} something
   * @returns {Boolean} - whether or not something is a number
   */
  static isNumber(something) {
    return Object.is(typeof something, "number");
  }
  /**
   * @param {*} something
   * @returns {Boolean} - whether or not something is a map
  static isMap(something) {
    return something instanceof Map;
  }
  /**
   * @param {*} something
   * @returns {Boolean} - whether or not something is a set
   */
  static isSet(something) {
    return something instanceof Set;
  }
  /**
   * @param {*} something
   * @returns {Boolean} - whether or not something is a boolean
   */
  static isBoolean(something) {
    return Object.is(something, "boolean");
  }
}

module.exports = rflx;
