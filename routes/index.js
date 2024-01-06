const express = require('express');
const { default: mongoose } = require('mongoose');
const routes = express.Router();
const USER = require('../models/user')

const { homepage, handleGetAllUsers, handleCreateUser, handleGetUserById, handleDeleteUserById, handleUpdateUserById } = require('../controller/user')

routes.get('/', homepage);

routes.get('/api/users', handleGetAllUsers);

routes.post('/api/users', handleCreateUser);

routes.get('/api/users/:id', handleGetUserById);

routes.patch('/api/users/:id', handleUpdateUserById);

routes.delete('/api/users/:id', handleDeleteUserById)

module.exports = routes;