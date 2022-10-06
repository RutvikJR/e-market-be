var users = require('./model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const { tokenKey } = require('../../config/config');
const ObjectId = mongoose.Types.ObjectId;

exports.register = async (req, res) => {
    try {
        let emailExists = await users.findOne({
            email: req.body.email.toLowerCase(),
        });
        if (emailExists) {
            res.status(400).json({
                message: 'This email is already registered!',
            });
        } else {
            const salt = await bcrypt.genSalt();
            const hashPassword = await bcrypt.hash(req.body.password, salt);

            const query = new users({
                _id: new ObjectId(),
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                contact: req.body.contact,
                email: req.body.email.toLowerCase(),
                password: hashPassword,
                verified: false,
            });
            query
                .save()
                .then((result) => {
                    res.status(200).json({
                        success: true,
                        message: 'User registered successfully!',
                    });
                })
                .catch((error) => console.log(error));
        }
    } catch (error) {
        res.status(200).json({ success: 0, message: error });
    }
};

exports.login = async (req, res) => {
    try {
        let user = await users.findOne({
            email: req.body.email.toLowerCase(),
        });
        if (!user) {
            res.status(400).json({ message: 'This email is not registered!' });
        } else {
            const isMatch = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (isMatch) {
                const token = jwt.sign({ id: user._id }, tokenKey, {});
                res.status(200).json({
                    data: user,
                    token,
                    message: 'Details Found!',
                });
            } else res.status(400).json({ message: 'Invalid credentials!' });
        }
    } catch (error) {
        res.status(200).json({ success: 0, message: error });
    }
};

exports.index = async (req, res) => {
    try {
        const allUsers = await users.find();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(200).json({ success: 0, message: 'error!' });
    }
};

exports.getById = async (req, res) => {
    try {
        var whereClause = {
            _id: req.body.id,
        };
        const data = await users.find(whereClause);
        if (data.length) {
            res.status(200).json({
                message: 'details found!',
                data: data[0],
            });
        } else res.status(400).json({ message: 'User not found!' });
    } catch (error) {
        res.status(400).json({ success: 0, message: 'error!' });
    }
};

exports.update = async (req, res) => {
    try {
        users
            .update(
                {
                    name: req.body.name,
                    indian_price: req.body.indian_price,
                    symbol: req.body.symbol,
                },
                {
                    returning: true,
                    where: {
                        id: req.body.id,
                    },
                }
            )
            .then(function () {
                users.findOne({ where: { id: req.body.id } }).then((data) => {
                    if (data) {
                        res.status(200).json({
                            success: 1,
                            data: data,
                            message: 'Updated successfully',
                        });
                    } else {
                        res.status(200).json({
                            success: 0,
                            message: 'No Results Found',
                        });
                    }
                });
            });
    } catch (error) {
        res.status(400).json({
            success: 0,
            message: 'Error while updating data.',
        });
    }
};

exports.remove = async (req, res) => {
    try {
        const result = users
            .deleteOne({ _id: ObjectId(req.body.id) })
            .then(function () {
                res.status(200).json({
                    message: 'User removed successfully.',
                });
            });
    } catch (error) {
        res.status(400).json({
            message: 'Error while removing data.',
        });
    }
};
