# SPECIFICATIONS
This document contains the specification for the object calc


```javascript

property:lastResult

method_name: Addition
  args: 2
    arg1: numbers
    arg2: numbers
  return: A number that represents the addition of the arguements given
    purpose: the returned value is used to change variable 'lastResult'
  behavior: adds the arguement given
purpose: it does all the addition operation for the calculation application

method_name: Subtraction
  args: 2
    arg1: numbers
    arg2: numbers
  return: A number that represents the Subtraction of the arguements given
    purpose: the returned value is used to change variable 'lastResult'
  behavior: Subtract arg1 from arg2
purpose: it does all the subtraction operation for the calculation application

method_name: Multiplication
  args: 2
    arg1: numbers
    arg2: numbers
  return: A number that represents the multiplication of the arguements given
    purpose: the returned value is used to change variable 'lastResult'
  behavior: Multiply the arguement given
purpose: it does all the multiplication operation for the calculation application

method_name: Division
  args: 2
    arg1: numbers
    arg2: numbers
  return: A number that represents the division of the arguements given
    purpose: the returned value is used to change variable 'lastResult'
  behavior: divides the arguement given
purpose: it does all the division operation for the calculation application


method_name: Operate
  args: 3
    operation:call back function e.g Multiply operation
    arg1: numbers
    arg2: numbers
  return: A number which is stored in the variable lastResult
    purpose: the returned value is used to change variable 'lastResult'
  behavior: checks for arg2, if there is no arg2, it calls the operation with the variable lastresult
purpose: it is enables chaining of the mathematical operation
```