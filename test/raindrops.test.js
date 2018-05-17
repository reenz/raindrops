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

  it("returns plong if n is a factor of 7",() => {
    raindrops.numberToSound(14).should.be.equal('Plong');
  })

  it("returns number if it is not a factor of 3,5 or 7",() => {
    raindrops.numberToSound(4).should.be.equal('4');
  })

  it("raises error if passed argument is not a number",() => {
    should.throw(() => raindrops.numberToSound('w'), Error, /You entered w, must enter a number/);
  })

  it("returns PlingPlang if n is a factor of 3 and 5",() => {
    raindrops.numberToSound(30).should.be.equal('PlingPlang');
  })

  it("returns PlingPlong if n is a factor of 3 and 7",() => {
    raindrops.numberToSound(21).should.be.equal('PlingPlong');
  })

  it("returns PlangPlong if n is a factor of 5 and 7",() => {
    raindrops.numberToSound(35).should.be.equal('PlangPlong');
  })

  it("returns PlingPlangPlong if n is a factor of 3,5 and 7",() => {
    raindrops.numberToSound(105).should.be.equal('PlingPlangPlong');
  })

});