var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/mymeanapp", { native_parser: true });
var Q = require('q');
db.bind('user');

services = {};

module.exports = services;

services.getAll = getAll;
services.getById = getById;

services.createUser = createUser;

services.updateUser = updateUser;

function getAll() {
    console.log('inside user services get all');
    let defered = new Q.defer();
    db.user.find().toArray(function(err, users) {
        if (err) defered.reject(err);
        defered.resolve(users)
    });

    return defered.promise;
}

function getById(id) {
    console.log('inside getById');
    let defered = new Q.defer();
    db.user.findById(id, function(err, user) {
        if (err) defered.reject(err);
        defered.resolve(user);
    });

    return defered.promise;
}

function createUser(user) {
    console.log('inside create user', user);
    let defered = new Q.defer();
    db.user.insert(user, function(err, done) {
        if (err) defered.reject(err);
        console.log(done);
        defered.resolve(done);
    });
    return defered.promise;
}

function updateUser(id, user) {
    console.log('inside update user', id, user);
    let defered = new Q.defer();
    let $set = {
        name: user.name,
        status: user.status
    };
    db.user.update({ _id: mongo.helper.toObjectID(id) }, { $set }, function(err, done) {
        if (err) defered.reject(err);
        //console.log('this vl', done);
        defered.resolve();
    });
    return defered.promise;
}