const caesar = require("../src/caesar");
const expect = require("chai").expect;
// Write your tests here!

describe("caesar", () => {
    it("Should return false if shift value is not present, equal to 0, less than -25, or greater than 25", (
    ) => {
        const actual = caesar("thinkful", 0);
        expect(actual).to.be.false;
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