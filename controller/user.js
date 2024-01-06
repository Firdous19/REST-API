const USER = require('../models/user');

function homepage(req, res) {
    res.send("Welcome to the server");
}

async function handleGetAllUsers(req, res) {
    const allUsers = await USER.find({});
    res.json(allUsers);
}

async function handleCreateUser(req, res) {
    const body = req.body;
    // console.log(body);
    const newUser = await USER.create(body);
    res.send({ status: "Success", id: newUser._id });
}

async function handleGetUserById(req, res) {
    const userId = req.params.id;
    console.log(userId)
    const user = await USER.findById(userId);
    res.json(user);
}

async function handleDeleteUserById(req, res) {
    const userId = req.params.id;
    const user = await USER.findById(userId);
    await USER.findByIdAndDelete(userId);
    res.json({ status: "Deleted", username: user.name });
}

async function handleUpdateUserById(req, res) {
    const userDetails = req.body;
    console.log(userDetails);
    const userKeys = Object.keys(userDetails).filter((key) => key !== 'id')
    const userId = req.body.id;

    await USER.findByIdAndUpdate(userId, { name: userDetails.name });
    res.json({ status: "updated" });
}

module.exports = {
    homepage,
    handleGetAllUsers,
    handleCreateUser,
    handleGetUserById,
    handleDeleteUserById,
    handleUpdateUserById
}