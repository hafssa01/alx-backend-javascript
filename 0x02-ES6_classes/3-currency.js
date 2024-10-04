export default class Currency {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(nm) {
    return this._name = nm;
  }

  get code() {
    return this._code;
  }

  set code(cd) {
    return this._code = cd;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
