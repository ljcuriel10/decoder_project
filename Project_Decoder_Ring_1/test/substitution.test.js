// Write your tests here!n
const expect = require('chai').expect;
const substitution = require('../src/substitution');

describe('Substitution', () => {
    it('Should return false if input or alphabet are missing', () => {
        const actual = substitution();
        const expected = false;
        expect(actual).to.eql(expected);
    })
    it('Should substitute letters with new alphabet', () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'jrufscpw';
        expect(actual).to.eql(expected);
    })
    it('Spaces should be maintained throughout', () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.eql(expected);
    })
    it('Capital letters can be ignored.', () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.eql(expected);
    })
    it('The alphabet parameter must be string of exactly 26 characters. Otherwise, it should return false.', () => {
        const actual = substitution("thinkful", "short");
        const expected = false;
        expect(actual).to.eql(expected);
    })
    it('All of the characters in the alphabet parameter must be unique. Otherwise, it should return false.', () => {
        const actual =substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        const expected = false;
        expect(actual).to.eql(expected);
    })
    it('Should decode message', () => {
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        const expected = 'thinkful';
        expect(actual).to.eql(expected);
    })
})