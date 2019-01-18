const db = require('../dbconfig');
const mapper = require('./mappers.js')

module.exports = {
    postAction,
}


function postAction(newAction) {
    return db('actions').insert(newAction)
}