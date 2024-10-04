export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    this.throwError('Class extending Building must override evacuationWarningMessage');
  }

  throwError(message) {
    throw new Error(message);
  }
}
