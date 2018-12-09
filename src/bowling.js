'use strict';

function Bowling() {
	this.points = [];
	this.total = 0;
	this.totalRolls = 10;
	this.bonusPerframe = [];
	this.currentFrame = 0;
}

Bowling.prototype.getCurrentFrame = function() {
	return this.currentFrame
};

Bowling.prototype.totalScore = function() {
	for (var i = 0; i < this.points.length; i++) {
		for (var j = 0; j < this.points.length; j++) {
			this.total += this.points[i][j];
		}
	}
	return this.total;
};

Bowling.prototype.score = function(shot_1 , shot_2 ) {
	this.currentFrame += 1;
	if (shot_1 === this.totalRolls) {
		this.points.push([shot_1, 0]);
		// this.bonus();
	}
	if (shot_2 === this.totalRolls) {
		this.points.push([0, shot_2]);
		// this.bonus();
	}
	this.points.push([shot_1, shot_2]);
};
