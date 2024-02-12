const toPolytonic = require("./converter").parse;
const toWordsList = require("./collector").parse;

const api = {
    toPolytonic: toPolytonic,
    toWordsList: toWordsList
};

module.exports = api;