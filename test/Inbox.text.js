const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());



/*

// TEST EXAMPLE

class Car{
	park(){
		return 'stopped';
	}
	drive(){
		return 'vroom';
	}
}

let car;

beforeEach( () => {
	car = new Car();
} );

describe('Block 1', () => {
	it('Test 1 : park', () => {
		assert.equal( car.park(), 'stopped' );
	});
	it('Test 2 : drive', () => {
		assert.equal( car.drive(), 'vroom' );
	});
});

*/