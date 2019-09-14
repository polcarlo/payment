var jsonFile = require('jsonFile');
const computation = require('../helper/computation');


var fileName = 'input.json';

jsonFile.readFile(fileName, function(err, jsonData) {
  if (err) throw err;
  for (var i = 0; i < jsonData.length; ++i) {


  	computation.compute(jsonData[i]);
 
   /* console.log("Emp ID: "+jsonData[i].date);
    console.log("Emp Name: "+jsonData[i].user_id);
    console.log("Emp Address: "+jsonData[i].user_type);
    console.log("Designation: "+jsonData[i].operation.amount);
    console.log("----------------------------------");*/
  }
});