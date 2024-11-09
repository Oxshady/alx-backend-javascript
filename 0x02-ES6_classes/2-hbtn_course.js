export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== typeof (String())) {
      throw (TypeError("Name must be a string"));
    }
    else if (typeof (length) !== typeof (Number())) {
      throw (TypeError("Length must be a number"));
    }
    else if (typeof (students) !== typeof (Array())) {
      throw (TypeError("Students must be a Array"));
    }
    else {
      this._name = name;
      this._length = length;
      this._students = students;
    }
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof (name) !== typeof (String())) {
      throw (TypeError("Name must be a string"));
    }
    else {
      this._name = name;
    }
  }
  get length() {
    return this._length;
  }
  set length(length) {
    if (typeof (length) !== typeof (Number())) {
      throw (TypeError("Length must be a number"));
    }
    else {
      this._length = length;
    }
  }
  get students() {
    return this._students;
  }
  set students(students) {
    if (typeof (students) !== typeof (Array())) {
      throw (TypeError("Students must be a Array"));
    }
    else {
      this._students = students;
    }
  }
}
