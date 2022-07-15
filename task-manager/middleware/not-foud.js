const notFound = (req, res) => {
    res.status(404).send('Couldnt find route')
}

module.exports = notFound