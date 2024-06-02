/**
 * Currency class
 */
export default class Currency {
  /**
   * @param {string} code - The currency code
   * @param {string} name - The name of the currecy
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * @param {string} value - sets _code to value
   *
   */
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  get code() {
    return this._code;
  }

  /**
   * @param {string} value - sets _name to value
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
