// const express = require('express');
const Products = require('../model/products')

const getAllProductsStatic = async (req, res) => {
    const products = await Products.find({ featured: true });
    res.status(200).send({
        "status": "success",
        "Data": products,
    })
}

const getAllProducts = async (req, res) => {
    const { featured, company } = req.query;
    const queryObject = {}
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false;
    }

    if (company) {
        queryObject.company = company;
    }
    console.log(queryObject)
    const products = await Products.find(queryObject)
    res.status(200).send({
        "status": "success",
        "msg": products,
    })
}

module.exports = {
    getAllProductsStatic,
    getAllProducts,
}