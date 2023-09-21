const fs = require('fs');
const EleventyFetch = require("@11ty/eleventy-fetch");
const { AssetCache } = require("@11ty/eleventy-fetch");

// Load .env variables with dotenv
require('dotenv').config();

// Node
// Global variable: process.env

module.exports = async function () {
  const url = `${process.env.API_URI}/public_services?page=`;
  const buff = Buffer.from(`${process.env.API_USER}:${process.env.API_PASSWORD}`, 'utf-8');
  const credentials = buff.toString('base64');

  const fetchOptions = {
    headers: {
      'Authorization': `Basic ${credentials}`
    }
  };

  /* This returns a promise */
  const response = []

  let pagina = 1;

  while (true) {

    let data = await EleventyFetch(url + (pagina++), {
      fetchOptions,
      duration: "1h", // save for 1 hour
      type: "json"    // we’ll parse JSON for you
    });

    // Cache item resource to get cached response from `/category/1`
    // when called in related resources.
    data.forEach(element => {
      let asset = new AssetCache(`${url}/${element.id}`);

      if (asset.isCacheValid('1m')) {
        return;
      }

      asset.save(element, 'json');
    });

    if (data.length > 0) {
      response.push(data)

    }
    else {
      break
    }
  }
  const response_final = response.flat()

  // Convert the response_final to JSON
  const jsonData = JSON.stringify(response_final, null, 2);

  // Define the file path where you want to save the JSON file
  const outputPath = 'jsons/servicios.json';

  // Write the JSON data to the file
  try {
    fs.writeFileSync(outputPath, jsonData, 'utf8');
    console.log(`JSON data successfully written to ${outputPath}`);
  } catch (error) {
    console.error('Error writing JSON data:', error);
  }

  return response_final;
};