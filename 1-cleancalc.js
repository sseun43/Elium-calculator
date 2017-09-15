// -------------------  v.1.1  --------------------- //


var calc = {
	
	lastResult: 0000,
	
	operate: function(operation, arg1, arg2) {
	if (arg2) {
		lastResult = operation(arg1, arg2);
		return lastResult;
	} else {
		lastResult = operation(arg1, lastResult);
		return lastResult;
	}
},
	add: function(arg1, arg2) {
	return arg1 + arg2;
},
	subtract:function(arg1, arg2) {
	return arg1 + arg2;
},
	multiply:function(arg1, arg2) {
	return arg1 * arg2;
},
	divide:function(arg1, arg2) {
		if(arg2===0||arg1===0){return 0}
			else{return arg1 / arg2;}
}

};

// ----------------------------  tests ---------------------------- //
// write a simple testing suite for each method and property.
var testingUnit=function(testee){
  var a=5;
  var b=0;
  var expected=0;
  if(testee(a,b)===expected){return true;}
   else{return false;}
};
// comiple the suites into a meta-suite for testing your whole calc object
var testSuites=function(testee){
	var arr=[];
for(let i=1;i<arguments.length;i++){
   if(arguments[i](testee)){
   	arr.push("pass");
   }else{ arr.push("fail");}
}
return arr;
};

console.log(testSuites(calc.divide,testingUnit));
// ---------------------------- v.1.2 ------------------------------ //

// modify the calculator to take commandline arguments: https://blog.kevinchisholm.com/tag/process-argv/


