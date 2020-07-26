// index, show, store, update, destroy
const Led = require('../models/Led')

module.exports = {
    async index(req, res) {
        const { button } = req.query;

        const leds = await Led.find({ button: button })

        return res.json(leds);
    },

    async store(req, res) {
        const { button, status } = req.body;

        const led = await Led.create({ button, status });

        return res.json(led);
    } 
}