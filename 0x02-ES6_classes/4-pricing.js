import Currency from './3-currency';

/**
  * Pricing class
  */
export default class Pricing {
  /**
   * @param {number} amount - The amount
   * @param {object} currency - The currency type
   */

  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * @param {number} value - The amount is set to value
   */

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._amount = value;
  }

  get amount() {
    return this._amount;
  }

  /**
   * @param {object} value - The Currency is set it to value
   */
  set currency(value) {
    if (!value instanceof (Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = value;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   * @param {number} amount - The amount of the currency
   * @param {number} conversionRate - The rate of conversion
   */
  static conversionRate(amount, conversionRate) {
    return amount * conversionRate;
  }
}
