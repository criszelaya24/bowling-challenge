'use strict';

describe('Game', function(){
	var bowling;
	beforeEach(function(){
		bowling = new Bowling;
	});
	it('Start in fram equa a 0',function(){
		expect(bowling.getCurrentFrame()).toEqual(0);
	});
	it('Start with total of 0', function(){
		expect(bowling.totalScore()).toEqual(0);
	});

	it('Score the first frame!', function(){
		bowling.score(1,3);
		bowling.score(4,2);
		expect(bowling.totalScore()).toEqual(10);
		expect(bowling.getCurrentFrame()).toEqual(2);
	});
});