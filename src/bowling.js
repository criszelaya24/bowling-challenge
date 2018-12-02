'use strict';

function Bowling() {
	this.points = [];
	this.total = 0;
}

Bowling.prototype.totalScore = function() {
	for (var i = 0; i < this.points.length; i++) {
		for (var j = 0; j < i; j++) {
			this.total += this.points[j];
			this.total += this.points[i];
		}
	}
	return this.total;
};

Bowling.prototype.score = function(value_1, value_2 = 0) {
	this.points.push(1, 3);
};