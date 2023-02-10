const express = require('express');
const routes = express.Router();
const main = require('../scrapeFN/scrape');

routes.post('/indeed', async (req, res) => {
    try{
        const { skill } = req.body;
        let scrp = await main(skill);
        return res.status(200).json({
            status: "ok",
            list: scrp?.list || {} // scrp && scrp.list === object ? scrp.list : {}
        });
    } catch(e) {
        return res.status(500).send(e);
    }
})

module.exports = routes;