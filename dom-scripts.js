$(document).ready(function(){
	var mathOperator;
	$("#display").text("0");
	//#firstArg
	//#secondArg
	$("#divide").click(function(){
		mathOperator="divide";

	});
	$("#multiply").click(function(){
		mathOperator="multiply";

	}); 
	$("#subtract").click(function(){
		mathOperator="subtract";
	}); 
	$("#plus").click(function(){
		mathOperator="add";

	});
	$("#calculate").click(function(){
		var first=Number($("#firstArg").val());
		var second=Number($("#SecondArg").val());
		var displayResult=calc.operate(mathOperator,first,second)
		$("#display").text(displayResult);
		$("#firstArg").val(displayResult);
		$("#SecondArg").val("");
	})

	$("#clear").click(function(){
        $("#firstArg").val("");
        $("#SecondArg").val("");
        $("#display").text("0");
        calc.lastResult=0;

	});


});