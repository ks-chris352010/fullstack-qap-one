const fs = require('fs');

const filePath = 'example.txt';
// Read the contents of the file, utf8 refers to the character encoding scheme
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    return;
  }
  // Output the contents of the file
  console.log(`File contents:\n${data}`);
});
