// Tanuja
'use strict';

const request = require('../lib/http');

const getAllTweets = async (req, res) => {
    // Checking if required param exist
    let response = {};
    try {
        // Making Twitter Request
        response = await request({
            method: 'GET',
            uri: `https://api.twitter.com/1.1/statuses/user_timeline.json`,
            resolveWithFullResponse: true,
            oauth: req.auth,

        })
        response.body = JSON.parse(response.body);
    }
    catch (err) {
        response.body = JSON.parse(err.response.body);
    };

    res.json(response.body);
};

module.exports = getAllTweets;
