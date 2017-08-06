router = require('express').Router();
userService = require('../service/userService');

router.get('/', getAll);
router.post('/', createUser);
router.get('/:id', getByIdController);
router.put('/:id', updateUser);

module.exports = router;

function getAll(req, res, next) {
    console.log('inside user controller get all');
    userService.getAll()
        .then(function(users) {
            res.send(users);
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}

function getByIdController(req, res, next) {
    userService.getById(req.params.id)
        .then(function(user) {
            res.send(user);
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}

function createUser(req, res, next) {
    console.log('inside create user');
    userService.createUser(req.body)
        .then(function(user) {
            res.status(200).json('User Successfully Created');
        })
        .catch(function(err) {
            res.status(400).send('User creation failed');
        });
}

function updateUser(req, res, next) {
    console.log('inside update');
    userService.updateUser(req.params.id, req.body)
        .then(function(user) {
            res.status(200).json('user updated');
        })
        .catch(function(err) {
            res.status(400).send('User update failed');
        })
}