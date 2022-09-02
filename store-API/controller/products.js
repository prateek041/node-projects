// const express = require('express');
const Products = require('../model/products')

const getAllProductsStatic = async (req, res) => {
    // we can use regex to search query things that match some of the required criterias.
    const products = await Products.find({}).sort('-name');
    res.status(200).send({
        "status": "success",
        "Data": products,
    })
}

const getAllProducts = async (req, res) => {
    // we will be creating a query object, that will query the data from DB. It looks for pattern
    const { featured, company, name, sort } = req.query;
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
    // console.log(queryObject)

    let result = Products.find(queryObject); // we need to get the objects based on the query.

    if (sort) { // once we get the result, we will check if it needs to be sorted.
        // products = products.sort()
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList)
    }
    const products = await result; // finally we have the project.
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