class Raindrops {

  numberToSound(n) {
    if (n % 3 === 0) {
      return "Pling";
    } else if (n % 5 === 0) {
      return "Plang";
    }
  }

}

module.exports = Raindrops;