import Building from "./5-building";

/**
 * SkyHighBuilding class
 */
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }
  /**
   * @param {number} value - set the value of _floor
   */
  set floor(value) {
    this._floor = value;
  }

  get floor() {
    return this._floor;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
