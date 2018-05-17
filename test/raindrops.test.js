const chai = require("chai");
const should = chai.should();

const Raindrops = require('../src/raindrops.js');

describe('Raindrops',() => {
  let raindrops;

  beforeEach(() => {
    raindrops = new Raindrops();
  });

  it("returns pling if n is a factor of 3",() => {
    raindrops.numberToSound(6).should.be.equal('Pling');
  })

  it("returns plang if n is a factor of 5",() => {
    raindrops.numberToSound(10).should.be.equal('Plang');
  })
});