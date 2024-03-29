require('dotenv').config()

const connectDB = require('./db/connect')
const Products = require('./model/products')
const jsonProducts = require('./products.json')

const start = async (req, res) => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Products.deleteMany();
        await Products.create(jsonProducts);
        console.log('connected succesfully');
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

start()