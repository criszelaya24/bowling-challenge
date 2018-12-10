'use strict';

function Bowling() {
	this.points = [];
	this.total = 0;
	this.totalRolls = 10;
	this.bonusPerframe = [];
	this.bono = 0;
	this.currentFrame = 0;
	this.validationScore = 0;
	this.test = 0;
}

var bowling = new Bowling();

Bowling.prototype.getCurrentFrame = function() {
	return this.currentFrame
};

Bowling.prototype.score = function(shot_1 = 0 , shot_2 = 0 ) {
	this.currentFrame += 1;
	this.validationScore = shot_1 + shot_2;

	if (this.validationScore > this.totalRolls) {
		return 'Invalid rolls!';
	}
	if (shot_1 === this.totalRolls) {
		this.points.push({Frame: this.currentFrame, value1: shot_1, value2: 0, bonus: 0});
		return;
	}
	if (shot_2 === this.totalRolls) {
		this.points.push({Frame: this.currentFrame, value1: 0, value2: shot_2, bonus: 0});
		return;
	}else {
		this.points.push({Frame: this.currentFrame, value1: shot_1, value2: shot_2, bonus: 0});
	}
};

Bowling.prototype.totalScore = function() {
	for (var i = 0; i < this.points.length; i++) {
			this.total += this.points[i]["value1"];
			this.total += this.points[i]["value2"];

	}
	return this.total;
};

Bowling.prototype.bonus = function() {
	for (var i = 0; i < this.points.length; i++) {
		this.test = 0;
		this.test += this.points[i]["value1"];
		this.test += this.points[i]["value2"];
		if (this.test === this.totalRolls) {
			if (i === 9) {
				this.points[i]["bonus"] = 10;
			}else{
				this.points[i]["bonus"] = this.points[i+1]["value1"];
			}
		}
		this.bono += this.points[i]["bonus"];
	}
	this.total += this.bono;
	return this.bono;
};

// [[5,5], [10,0], [1,2]]
