const caesar = require("../src/caesar");
const expect = require("chai").expect;
// Write your tests here!

describe("caesar", () => {
    it("Should encode when encode parameter is left out", () => {
        const actual = caesar("thinkful", 3);
        const expected = 'wklqnixo';
        expect(actual).to.eql(expected);
    })
    it("Should decode when encode parameter is set to false", () => {
        const actual = caesar("wklqnixo", 3, false);
        const expected = 'thinkful';
        expect(actual).to.eql(expected);
    })
    it("Should return false if shift value is not present", (
    ) => {
        const actual = caesar("thinkful");
        const expected = false;
        expect(actual).to.eql(expected);
    })
    it('Should return false if shift is equal to 0', () => {
        const actual = caesar("thinkful", 0);
        const expected = false;
        expect(actual).to.eql(expected);
    })
    it(' Should return false if shift is less than -25', () => {
        const actual = caesar("thinkful", -26);
        const expected = false;
        expect(actual).to.eql(expected);
    })
    it(' Should return false if shift is greater than 25', () => {
        const actual = caesar("thinkful", 55);
        const expected = false;
        expect(actual).to.eql(expected);
    })
    it("Spaces should be maintained throughtout, as should other non-alphabetic symbols", () => {
        const actual = caesar("This is a secret message!", 8);
        const expected = 'bpqa qa i amkzmb umaaiom!';
        expect(actual).to.eql(expected);

    })
    it("Capital letters can be ignored", () => {
        const actual = caesar("thinkful", -3);
        const expected = 'qefkhcri' 
        expect(actual).to.eql(expected);
    })
    it("Should wrap around to the front of the alphabet", () => {
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        const expected = 'this is a secret message!';
        expect(actual).to.eql(expected);
    })
}); 