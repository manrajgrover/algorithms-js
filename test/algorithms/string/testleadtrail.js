/* eslint-env mocha */
const LongestCommLeadtrailSubString = require('../../../src/algorithms/string/LongestCommLeadtrailSubString');
const expect = require('expect');


describe('Longest common leading and trailing substring of two strings', () => {
  it('should return empty strings if the inputs mismatch entirely', () => {
    const stringA = 'ABCDEF';
    const stringB = 'QRST';

    const SubStrings = LongestCommLeadtrailSubString(stringA, stringB);
    expect(SubStrings).toStrictEqual({"leading":"","trailing": ""});
  });

  it('should return only trailing common substring if no leading common subtring found', () => {
    const stringA = 'ABCMNOP';
    const stringB = 'EFGHMNOP';

    const SubStrings = LongestCommLeadtrailSubString(stringA, stringB);
    expect(SubStrings).toStrictEqual({"leading":"","trailing": "MNOP"});
  });

  it('should return only leading common substring if no trailing common subtring found', () => {
    const stringA = 'ABCMNOP';
    const stringB = 'ABCYZ';

    const SubStrings = LongestCommLeadtrailSubString(stringA, stringB);
    expect(SubStrings).toStrictEqual({"leading":"ABC","trailing": ""});
  });

  it('should return both leading common substring and trailing common subtring if found', () => {
    const stringA = 'ABCYEFG';
    const stringB = 'ABCZEFG';

    const SubStrings = LongestCommLeadtrailSubString(stringA, stringB);
    expect(SubStrings).toStrictEqual({"leading":"ABC","trailing": "EFG"});
  });
});
