class Raindrops {

  numberToSound(n) {

    this._validate(n);
    let sound = '';
    if (n % 3 === 0) {
      sound += "Pling";
    }
    if (n % 5 === 0) {
      sound += "Plang";
    }
    if (n % 7 === 0) {
      sound += "Plong";
    }
    if (sound.length === 0) {
      sound += n.toString();
    }

    return sound;
  }

  _validate(n) {
    if (typeof n !== 'number') {
      throw Error(`You entered ${n}, must enter a number`);
    }
  }
}

module.exports = Raindrops;