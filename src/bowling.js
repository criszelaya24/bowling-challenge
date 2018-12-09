'use strict';

function Bowling() {
	this.points = [];
	this.total = 0;
	this.totalRolls = 10;
	this.bonusPerframe = [];
	this.bono = 0;
	this.currentFrame = 0;
	this.validationScore = 0;
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

Bowling.prototype.score = function(shot_1 = 0 , shot_2 = 0 ) {
	this.currentFrame += 1;
	this.validationScore = shot_1 + shot_2;

	if (this.validationScore > this.totalRolls) {
		return 'Invalid rolls!';
	}
	if (shot_1 === this.totalRolls) {
		this.points.push([shot_1, 0]);
	}
	if (shot_2 === this.totalRolls) {
		this.points.push([0, shot_2]);
	}else {
		this.points.push([shot_1, shot_2]);
	}
};

Bowling.prototype.bonus = function() {
	for (var i = 0; i < this.points.length; i++) {
		for (var j = 0; j < this.points.length; j++) {
			this.total += this.points[i][j];
			if (this.points[i][j] === this.totalRolls) {
				this.bono += this.points[i+1][j];
				this.bonusPerframe.push([this.currentFrame, this.points[i][j+1]]);
			}
		}
	}
	return this.bono;
};

// [[5,5], [10,0], [1,2]]
