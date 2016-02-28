'use strict';

$(document).ready(init);

var chances = 3;
var selectednum = [];

function init() {
	
	$('#restart').on('click', restart);
	$('#confirm').on('click', confirm);
	$('#randomize').on('click', randomize);
	$('.num').click(numSelected);
	shuffleCircles();
}

function restart() {
	console.log('restart is working');
	location.reload();
}

function confirm() {
	var answer = 0;
	var $highlight = $('.highlight')

	$highlight.each(function(index, value){
		 answer += parseInt(value.innerHTML)
	})


	if (answer !== randomBoxes) {
		$('#message').html("Try again kiddo!")
	} else {
		$('#message').html("You win!")
		$('.highlight').remove();
	}
	shuffleCircles();
}

var randomBoxes;

function shuffleCircles() {

	var $arrStars = $('<tr>');
	randomBoxes = Math.floor(Math.random()*9 )+ 1;

	for(var i=0; i<randomBoxes; i++){
		var $eachStar = $('<td>').addClass('stars');
		$arrStars.append($eachStar);
	}
	$('#starsparent tr:first-child').remove();
	$arrStars.appendTo('#starsparent');
	
}

function numSelected(event) {

	$(this).toggleClass('highlight');
}

function randomize() {
	if(chances===0){
		$('#randomize').html('Sorry No More')
		return;
	}
	shuffleCircles();
	chances--;
}