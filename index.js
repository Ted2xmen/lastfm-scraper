const PORT = 8080
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();
const url = 'https://www.last.fm/user/ted2xmen';

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html);
    
        $('.chartlist', html).each(function() {

            const song = $(this).find('.chartlist-row--now-scrobbling').find('.chartlist-name').text()
            const singer = $(this).find('.chartlist-row--now-scrobbling').find('.chartlist-artist').text()
           
            console.log(song);
            console.log(singer);
         })
    })
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));