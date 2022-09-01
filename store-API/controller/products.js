// const express = require('express');
const Products = require('../model/products')

const getAllProductsStatic = async (req, res) => {
    // we can use regex to search query things that match some of the required criterias.
    const products = await Products.find({ name: "accent chair" });
    res.status(200).send({
        "status": "success",
        "Data": products,
    })
}

const getAllProducts = async (req, res) => {
    // we will be creating a query object, that will query the data from DB. It looks for pattern
    const { featured, company, name } = req.query;
    const queryObject = {}
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false;
    }

    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }; // case insensitive
    }
    console.log(queryObject)
    const products = await Products.find(queryObject)
    res.status(200).send({
        "status": "success",
        products,
        nbHits: products.length
    })
}

module.exports = {
    getAllProductsStatic,
    getAllProducts,
}