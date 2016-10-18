/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 * 
 * Proudly built by the Bluemix Tiger Team
 * 
 * For question or feedback, contact:
 * Oliver Siebenmarck (siebenmarck@de.ibm.com)
 */

/**
 * Returns the nth fibonacci number using recursion
 * @author Oliver Siebenmarck
 */
var fibonacci = function fibonacci(n) {
  if ((n == 2) || (n == 1))
    return 1;
  else
    return fibonacci(n-2) + fibonacci(n-1);
}


exports.fib = fibonacci;