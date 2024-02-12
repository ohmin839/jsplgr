const api = require("../src/api");
const toWordsList = api.toWordsList;

test.each([
    ["", []],
    ["α", ["α"]],
    ["δ'", ["δ'"]],
    ["ὁ ἄνθρώπός τις", ["ὁ", "ἄνθρώπός", "τις"]],
])("from %s to %s", (text, words) => {
    expect(toWordsList(text)).toStrictEqual(words);
});
