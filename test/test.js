console.log = function() {};
const rewire = require('rewire');
const { assert, expect } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('sketch.js', 'utf8');

describe('', function () {
  it('', function() {
    let appModule
    try {
      appModule = rewire('../sketch.js');
    } catch(e) {
      expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
    }

    // Test that the variable was declared
    let drawFunction = 'draw()';
    let learnerDeclaredDraw;
    try {
        learnerDeclaredDraw = appModule.__get__('draw');
    } catch (e) {
        expect(true, 'Did you declare a `draw()` function?').to.equal(false);
    }

    // Make assertions about the variable value
    expect(learnerDeclaredDraw, `Did you create \`draw()\` as a function?`).to.be.a('function');
   
    let structureOne = function() {
      background($x);
    };

    let isMatchOne = Structured.match(learnerDeclaredDraw.toString(), structureOne);

    assert.isOk(isMatchOne, `Did you move the \`background()\` function in the \`draw()\` function?`)
  });
});