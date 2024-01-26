const url = require('url');

// Example URL string
const urlString = 'https://www.example.com/path?query=param';

// Parse the URL
const parsedUrl = url.parse(urlString, true);

// Access components of the parsed URL
console.log('Protocol:', parsedUrl.protocol);
console.log('Host:', parsedUrl.host);
console.log('Path:', parsedUrl.pathname);
console.log('Query:', parsedUrl.query);