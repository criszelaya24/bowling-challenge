'use strict';

describe('Game', function(){
	var bowling;
	beforeEach(function(){
		bowling = new Bowling;
	});
	it('Start with total of 0', function(){
		expect(bowling.totalScore()).toEqual(0);
	});

	it('Score the first frame!', function(){
		bowling.score(1,3);
		expect(bowling.totalScore()).toEqual(4);
	});
});