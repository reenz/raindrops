const chai = require("chai");
const should = chai.should();

const Raindrops = require('../src/raindrops.js');

describe('Raindrops',() => {
  
  it("returns pling if n is a factor of 3",() => {
    let raindrops = new Raindrops();
    raindrops.numberToSound(6).should.be.equal('Pling');
  })
});