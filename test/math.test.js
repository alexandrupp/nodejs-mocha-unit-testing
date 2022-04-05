const expect = require('chai').expect;
const math = require('../math'); // import math file

describe('math.js tests', () => {
    describe('math.add() Test', () => {
        // it('should equal 2', () => {
        //     const result = math.add(1, 1);
        //     expect(result).to.equal(2);
        // });
        it('should equal 2', async () => {
            const result = await math.add(1, 1);
            expect(result).to.equal(2);
        });
        // it('should equal 4', () => {
        //     const result = math.add(2, 2);
        //     expect(result).to.equal(4);
        // });
        it('should equal 4', () => {
            math.add(2, 2).then(result => expect(result).to.equal(4));
        });
    });
    
    describe('math.multiply() Test', () => {
        // it('should equal 3', () => {
        //     const result = math.multiply(3, 1);
        //     expect(result).to.equal(3);
        // });
        it('should equal 3', () => {
            math.multiply(3, 1).then(result => expect(result).to.equal(3));
        });
        // it('should equal 10', () => {
        //     const result = math.multiply(5, 2);
        //     expect(result).to.equal(10);
        // });
        it('should equal 10', async () => {
            const result = await math.multiply(5, 2);
            expect(result).to.equal(10);
        });
    });

    it('should throw an error', async () => {
        try {
            await math.add(1);
        } catch (error) {
            expect(error).to.equal('missing arg');
        }
    });
});