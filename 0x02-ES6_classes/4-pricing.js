import { Currency } from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(at) {
    return this._amount = at;
  }

  get currency() {
    return this._currency;
  }

  set currency(cy) {
    return this._currency = cy;
  }

  displayFullPrice() {
    return `${this.amount} (${this.currency})`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
