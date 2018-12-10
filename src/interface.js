$(document).ready(function(){
	var bowling = new Bowling();
	$("#table").hide();
	$("#button").hide();
	$("#button").fadeIn(900, function() {});
	$("#table").fadeIn(900, function() {});
	$('#current-frame').text(bowling.getCurrentFrame());

	$('#1-pin').click(function(){
		bowling.score(1)
	});
	$('#2-pin').click(function(){

	});
	$('#3-pin').click(function(){
		
	});
	$('#4-pin').click(function(){
		
	});
	$('#5-pin').click(function(){
		
	});
	$('#6-pin').click(function(){
		
	});
	$('#7-pin').click(function(){
		
	});
	$('#8-pin').click(function(){
		
	});
	$('#9-pin').click(function(){
		
	});
	$('#10-pin').click(function(){
		
	});
});