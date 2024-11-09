export default class Currency {
  constructor(code, name) {
    if (typeof (code) !== typeof (String())) {
      throw (TypeError('Code must be a string'));
    } else if (typeof (name) !== typeof (String())) {
      throw (TypeError('Name must be a string'));
    } else {
      this._code = code;
      this._name = name;
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof (name) !== typeof (String())) {
      throw (TypeError('Name must be a string'));
    } else {
      this._name = name;
    }
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof (code) !== typeof (String())) {
      throw (TypeError('Code must be a string'));
    } else {
      this._code = code;
    }
  }

  displayFullCurrency() {
    return (`${this._name} (${this.code})`);
  }
}
