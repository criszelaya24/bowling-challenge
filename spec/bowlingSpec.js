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
		bowling.score(3,2);
		expect(bowling.totalScore()).toEqual(15);
		expect(bowling.getCurrentFrame()).toEqual(3);
	});

	it('Validating an score of X', function(){
		bowling.score(10,0);
		bowling.score(5,5);
		expect(bowling.totalScore()).toEqual(20);
	});

	it('Score an spare an returning total bonus!', function(){
		bowling.score(5,5);
		bowling.score(4,4);
		bowling.score(3,7);
		bowling.score(4,6)
		bowling.score(2,2)
		expect(bowling.bonus()).toEqual(10)
	});

	it('Score an spare an returning bonus total and the frame where was!', function(){
		bowling.score(5,5);
		bowling.score(10,0);
		console.log(bowling.bonusPerframe[0,0]);
	});

	it('Can have a perfect game', function(){
		bowling.score(5,0)
		bowling.score(2,3)
		bowling.score(10)
		expect(bowling.totalScore()).toEqual(300);
	});
});