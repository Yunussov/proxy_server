const express = require('express');
const request = require('request');
const app = express();

app.use('/', (req, res) => {
    const url = `https://elevenlabs.io${req.url}`;
    req.pipe(request({ url, qs: req.query })).pipe(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});
