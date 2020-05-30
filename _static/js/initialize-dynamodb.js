function initializeDynamoDB(){
  if(AWS.config.credentials.accessKeyId == undefined) console.error('AWS credentials not loaded');
  console.log("accessKeyId: ", AWS.config.credentials.accessKeyId);
  console.log("secretAccessKey: ", AWS.config.credentials.secretAccessKey);
  AWS.config.update({
    region: "us-west-2",
    endpoint: 'dynamodb.us-west-2.amazonaws.com',
    accessKeyId: AWS.config.credentials.accessKeyId,
    secretAccessKey: AWS.config.credentials.secretAccessKey
    //accessKeyId: "",
    //secretAccessKey: ""
  });

  var docClient = new AWS.DynamoDB.DocumentClient({region: AWS.config.region});

  function createItem() {
      var params = {
          TableName :"SimpleTable",
          Item:{EmailAddr:AWS.config.credentials.identityId, status:'success'}
      };
      docClient.put(params, function(err, data) {
          if (err) {
              document.getElementById('textarea').innerHTML = "Unable to add item: " + "\n" + JSON.stringify(err, undefined, 2);
          } else {
              document.getElementById('textarea').innerHTML = "PutItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2);
          }
      });
  }

  return [createItem];
}
