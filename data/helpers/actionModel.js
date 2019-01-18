const db = require('../dbconfig');
const mappers = require('./mapper.js')

module.exports = {
    postAction,
}


function postAction(newAction) {
    return db('actions').insert(newAction)
}