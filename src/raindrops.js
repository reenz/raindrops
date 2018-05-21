class Raindrops {

  numberToSound(n) {
    const map = [
      [
        3, 'Pling'
      ],
      [
        5, 'Plang'
      ],
      [
        7, 'Plong'
      ],
      [9, 'Plung']
    ];
    this._validate(n);

    let result = '';
    let sound = map.reduce((result, [num, subString]) => {
      if (n % num === 0) {
        return result + subString;
      } else {
        return result;
      }
    }, result);

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