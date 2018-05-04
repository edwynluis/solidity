const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;

beforeEach( async () => {
	// Retrieve Accounts
	accounts = await web3.eth.getAccounts();
	
	// Deploy
	new web3.eth.Contract( JSON.parse(interface) )
		.deploy({data : bytecode, });
} );

/*
beforeEach( () => {
	web3.eth.getAccounts()
	.then( fetchedAccounts => {
		console.log( fetchedAccounts );
	} );
} );
*/

describe( 'Inbox', () => {
	it( 'deploys a contract', () => {
		
	} );	
} );

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