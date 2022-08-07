const notFound = (req, res) => {
    res.status(404).send("Data not found");
}

module.exports = notFound