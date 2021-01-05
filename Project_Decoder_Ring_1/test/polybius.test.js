// Write your tests here!
const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("Polybius", () => {
    it("When encoding, your output should still be a string", () => {
        const actual = polybius("thinkful");
        const expected = "4432423352125413";
        expect(actual).to.have.string(expected);
    })
    it("When decoding, the number of characters in the string exluding spaces should be even. Otherwise, return false", () => {
        const actual = polybius("44324233521254134", false);
        expect(actual).to.be.false;
    });
    it("Spaces should be maintained throughout.", () => {
        const actual = polybius("3251131343 2543241341", false);
        const expected = "hello world";
        expect(actual).to.eql(expected);
    })
    it("Capital letters can be ignored.", () => {
        const actual = polybius("Hello world");
        const expected = '3251131343 2543241341';
        expect(actual).to.eql(expected);
    })
    it('The letters "I" and "J" share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.', () => {
        const actual = polybius("4432423352125413", false);
        const expected = "th(i/j)nkful";
        expect(actual).to.eql(expected);
    })
})