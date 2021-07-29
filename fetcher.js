const fs = require("fs");
const request = require("request");

const url = process.argv[2];
const file = process.argv[3];

request(url, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Google homepage.

    if (response.statusCode === 200) {
      fs.writeFile(file, body, (error) => {
        if (error) {
          console.log("error");
          return;
        } else {
          console.log(`Downloaded and saved ${body.length} bytes to ${file}`);
        };
      });
    };
  });

  // STRETCH
  
  // const validPath = require('validPath');
  // const readline = require('readline');
  // const rl = readline.createInterface({
  //   input: process.stdin,
  //   output: process.stdout
  // });
