const express = require('express');

const getAllProductsStatic = async (req, res) => {
    throw new Error('testing package')
    res.status(200).send({
        "status": "success",
        "msg": "Test Route",
    })
}

const getAllProducts = async (req, res) => {
    try {
        res.status(200).send({
            "status": "success",
            "msg": "Real Route",
        })
    } catch (error) {
        res.send({
            "status": "failed",
            'err': error,
        })
    }
}

module.exports = {
    getAllProductsStatic,
    getAllProducts,
}