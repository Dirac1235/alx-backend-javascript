/**
 * Building class
 */
export default class Building{
  /**
   * @param {number} sqft -- square feet of the building
   */
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
    this.sqft = sqft

  }

  /** 
   * @param {number} value - sets value of _sqft
   */
  set sqft(value) {
    if (typeof value != 'number')
      throw TypeError('Sqft must be number');
    this._sqft = value;
  }

  get sqft() {
    return this._sqft;
  }
}
