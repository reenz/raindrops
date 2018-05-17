class Raindrops {

  numberToSound(n) {
    this._validate(n);
    if (n % 3 === 0) {
      return "Pling";
    } else if (n % 5 === 0) {
      return "Plang";
    } else if (n % 7 === 0) {
      return "Plong";
    } else {
      return n.toString();
    }
  }

  _validate(n) {
    if (typeof n !== 'number') {
      throw Error(`You entered ${n}, must enter a number`);
    }
  }
}

module.exports = Raindrops;