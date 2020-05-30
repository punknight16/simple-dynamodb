window.onload = function(){
	var [doRegister, doVerify, doLogin, doRefresh] = initializeCognito();
	doRefresh(function(err, cognitoUser){
		if(err) {
			alert('you are not logged in');
		} else {
	  	console.log("refreshed"); 
	  	console.log("attempting to initializeDynamoDB");
	  	var [createItem] = initializeDynamoDB();
	  	console.log("attempting to createItem in table...")

	  	createItem();
		}			
	});	
}