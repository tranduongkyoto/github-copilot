const https = require('https');
const parseStirng = require('xml2js').parseString;
const apiKey = process.env.GOODREADS_API_KEY;

const getRatting = (title) => {
  return new Promise((resolve, reject) => {
    const url = `https://www.goodreads.com/book/title.xml?key=$`;
    const request = https.get(url, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        parseString(data, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result.GoodreadsResponse.book[0].average_rating[0]);
          }
        });
      });
    });
    request.on('error', (err) => {
      reject(err);
    });
  });
};
