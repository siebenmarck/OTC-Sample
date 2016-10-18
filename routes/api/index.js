/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 * 
 * Proudly built by the Bluemix Tiger Team
 * 
 * For question or feedback, contact:
 * Oliver Siebenmarck (siebenmarck@de.ibm.com)
 */

// The fibonacci module is used as an to calculate the numbers
var fib = require('../../tt_modules/fibonacci');

/**
 * Replies with the correct fibonacci number
 * @author Oliver Siebenmarck
 */
exports.getFib = function (req, res) {
    var n = parseInt(req.params.number);
    console.log("n is " + req.params.number);
    if (isNaN(n))
        res.send('Not a number\n');
    else
    {
        res.send("The result is " + fib.fib( n ) + "\n");
    }        
};


