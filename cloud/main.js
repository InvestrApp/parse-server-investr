
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define('push', function(request, response) {
  // request has 2 parameters: params passed by the client and the authorized user
  var params = request.params;
  var user = request.user;

  var installation = params.installationId;
  console.log(installation)
  var pushQuery = new Parse.Query(Parse.Installation);
  pushQuery.equalTo("installationId", installation);
  
  var message = params.message;
  console.log(message)

  Parse.Push.send({
  where: pushQuery,
  data: {"alert": message},
  }, { success: function() {
     console.log("#### PUSH OK");
  }, error: function(error) {
     console.log("#### PUSH ERROR" + error.message);
  }, useMasterKey: true});

  response.success('success');
});