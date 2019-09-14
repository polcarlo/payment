const request = require('request');
var global = require("global");

request({
    method: 'GET',
    uri: 'http://localhost:5000/config/cash-in',
    	
    }, foo = function (error, response, body){

       global.aaa = body;


});

request({
    method: 'GET',
    uri: 'http://localhost:5000/config/cash-out/juridical',
    	
    }, function (error, response, body){
     



     

});

request({
    method: 'GET',
    uri: 'http://localhost:5000/config/cash-out/natural',
    	
    }, function (error, response, body){

    

});

module.exports = {
    

    foo: global.aaa


};


