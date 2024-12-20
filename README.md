# MongoDB $inc operator error with string value

This repository demonstrates an error that occurs when using the MongoDB $inc operator incorrectly.  The example showcases a common mistake of using a string instead of a number when attempting to increment a field.

## Bug

The `bug.js` file shows the incorrect usage of the `$inc` operator.  It attempts to increment a field with a string value, which causes an error.

## Solution

The `bugSolution.js` file provides the correct implementation, using a numeric value to increment the field.

## How to reproduce the bug

1.  Clone the repository.
2.  Ensure you have MongoDB running.
3.  Run the `bug.js` script.  This will throw an error.
4.  Run the `bugSolution.js` script. This will successfully increment the field.