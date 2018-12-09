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
	it('Validating an score more than 10 rolls', function(){
		expect(bowling.score(10,3)).toEqual('Invalid rolls!');
	});
	it('Score the first frame!', function(){
		bowling.score(1,3);
		bowling.score(4,2);
		expect(bowling.totalScore()).toEqual(10);
		expect(bowling.getCurrentFrame()).toEqual(2);
	});

	it('Validating an score of X', function(){
		bowling.score(0,10);
		bowling.score(5,5);
		expect(bowling.totalScore()).toEqual(20);
	});

	it('Score an spare an returning bonus!', function(){
		bowling.score(5,5);
		bowling.score(10,0);
		bowling.score(1,2);
		expect(bowling.bonus()).toEqual(11)
	});
});