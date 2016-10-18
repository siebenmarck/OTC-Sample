/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 * 
 * Proudly built by the Bluemix Tiger Team
 * 
 * For question or feedback, contact:
 * Oliver Siebenmarck (siebenmarck@de.ibm.com)
 */

var assert = require("assert");

describe('UNIT TESTS', function(){
    before(function() {
      fib = require('../tt_modules/fibonacci');
    });


  // Test the Fibonacci module
  describe('Fibonacci Module', function(){
    // Test with one
    it('fib(1) should return 1', function(){
      var result = fib.fib(1);
      assert.equal(1, result);
    }); 
    // Test with 10
    it('fib(10) should return 55', function(){
      var result = fib.fib(10);
      assert.equal(55, result);
    });
  });
});
