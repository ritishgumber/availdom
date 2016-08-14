var request = require("request");
var init = function () {
  return {
    check: ch()
  };
};
var ch= function () {
return function (name,cb) {
  if (typeof cb === 'function') {
      request.get({
        url : 'https://api.ote-godaddy.com/v1/domains/available?domain='+name+'&checkType=FAST&forTransfer=false&',
		method:'GET',
        headers : {
				  'Access-Control-Allow-Origin':'*'
        }
      }, function(err, response, body){
        if (err) {
		console.log("err");
          cb(err);
        }
        else if (!response) {
          cb("No response recieved (check internet connection)");
        }
        else if (response.statusCode == 400) {
          cb("Error: Bad request. ");
        }
        else if (response.statusCode == 401) {
          cb("Error: Unauthorized. Authentication info not sent or invalid ");
        }
        else if (response.statusCode == 403) {
          cb("Authenticated user is not allowed access	");
        }
        else if (response.statusCode == 404) {
          cb("Error: Not found");
        }
        else if (response.statusCode == 410) {
          cb("Error: URL expired");
        }
        else if (response.statusCode == 500) {
          cb("Error: Internal server error");
        }
        else if (response.statusCode == 503) {
          cb("Error: Service unavailable");
        }
        else if (response.statusCode == 599) {
          cb("Error: Connection timed out");
        }
		else if (response.statusCode == 422) {
          cb("Error: Domain name error.");
        }
        else if (response.statusCode == 200){
          cb(null, body);
        }else{
          cb(response);
        }
      });
    }}
  }



exports.init= init;

