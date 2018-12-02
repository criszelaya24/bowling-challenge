'use strict';

function Bowling() {
	this.points = [];
	this.total = 0;
}

Bowling.prototype.totalScore = function() {
	for (var i = 0; i < this.points.length; i++) {
		total += this.points[i];
	}
	return this.total;
};