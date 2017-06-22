const request = require('request'),
      prompt = require('prompt'),
      async = require('async');

async.waterfall([
  getInput,
  queryApi
], function (err, result) {
  // result now equals 'done'
});
function getInput(callback) {

  prompt.start();

  prompt.get(['dnis'], function (err, result) {

    let dnis = result.dnis;

    callback(null, dnis);

  });

}

function queryApi(dnis, callback) {

  console.log(dnis);

}
