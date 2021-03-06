var OpenTok = require('opentok');
var apiKey = '25925352';    // Replace with your API key  
var secret = 'b10360ef840cd6659cd5d14d184f629926b55d30';  // Replace with your API secret  
var opentok = new OpenTok.OpenTokSDK(apiKey, secret);

var location = '127.0.0.1'; // use an IP of 'localhost'


var url = require('url');
var url_parts = url.parse(request.url, true);
var query = url_parts.query;
if (typeof query.sessionId  === "undefined" ){
	var sessionId = '';
	opentok.createSession(location, {'p2p.preference':'disabled'}, function(result){
 		sessionId = result;
	});
}
else
	var sessionId = query.sessionId;

var token = opentok.generateToken({session_id:sessionId, role:OpenTok.RoleConstants.PUBLISHER, connection_data:"userId:42"});
