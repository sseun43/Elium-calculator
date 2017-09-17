# SPECIFICATIONS
 This document contains the specification for the DOM. 
It uses jquery library and so it uses mostly functions wit side-effects


```javascript
mathOperator:variable
   purpose:serves as a place to store the maths operator functions. e.g calc.multiply
   behaviour:undefined before any operator is clicked, but otherwise always contain an operator

firstArg_id:HTML Input
   purpose:serves as a place for user to enter the first Arguement number to be calculated
   behaviour:HTML Input that collects only number, possible to toggle number with arrows

secondArg_id:HTML Input
   purpose:serves as a place for user to enter the second Arguement number to be calculated
   behaviour:HTML Input that collects only number, possible to toggle number with arrows

display_id:A bootstrap well for displaying the results
   purpose:display results of computation
   behaviour:uses jquery "text" method to display results

divide_id:An HTML button that activates division
   purpose:used to call "calc.divide" method
   behaviour:stores "calc.divide" method in "mathOperator" variable which is passed as an arguement to "calc.operate"

multiply_id:An HTML button that activates multiplication
   purpose:used to call "calc.multiply" method
   behaviour:stores "calc.multiply" method in "mathOperator" variable which is passed as an arguement to "calc.operate"

subtract_id:An HTML button that activates subtraction
   purpose:used to call "calc.subtract" method
   behaviour:stores "calc.subtract" method in "mathOperator" variable which is passed as an arguement to "calc.operate"

plus_id:An HTML button that activates addition
   purpose:used to call "calc.add" method
   behaviour:stores "calc.add" method in "mathOperator" variable which is passed as an arguement to "calc.operate"


calculate_id:An HTML button that evaluate the whole operation
   purpose:evaluates the math operator by using the two numbers and math operator given,displays result 
           and make the result the first arguement for next operation
   behaviour:calls the "calc.operate" function with the "mathOperator" variable and the two numbers

clear_id:An HTML button that restore the web state back to its original state
   purpose:allow for clearing all previous operation and starting a new one
   behaviour:change "firstArg" and "SecondArg" id into empty string and turns the display and "calc.lastResult" into zero

```