window.onload = function(){
	var [doRegister, doVerify, doLogin] = initializeCognito();
	document.getElementById('registerForm').onsubmit = function(e){
		e.preventDefault();
		
		var emailInput = document.getElementById("registerEmailInp").value;
		var passwordInput = document.getElementById("registerPassInp").value;
		
		var error_obj = {
			emailIsValid: true, 
			passwordIsValid: true
		};

		error_obj.emailIsValid = validateEmailInput(emailInput);
		error_obj.passwordIsValid = validatePasswordInput(passwordInput);
		if(!error_obj.emailIsValid || !error_obj.passwordIsValid) {
			alert('not valid email or password')
		} else {
			doRegister(emailInput, passwordInput, function(err, result){
				if(err) {
					console.error('err: ', err);
					alert('register failure');
				} else {
					console.log('register success');
					alert('register success');
				}
			});
		}
	};


	document.getElementById('verifyForm').onsubmit = function(e){
		e.preventDefault();

		var verifyEmailInput = document.getElementById("verifyEmailInp").value;
		var verifyCodeInput = document.getElementById("verifyCodeInp").value;

		var error_obj = {
			emailIsValid: true, 
			codeIsValid: true
		};

		error_obj.emailIsValid = validateEmailInput(verifyEmailInput);
		error_obj.codeIsValid = validateInput(verifyCodeInput);

		if(!error_obj.emailIsValid || !error_obj.codeIsValid) {
			alert('invalid email or code');
		} else {
			doConfirm(verifyEmailInput, verifyCodeInput, function(err, result){
				if(err) {
					console.error('error: ', err);
					alert('verify email failed')
				} else {
					console.log('result: ', result);
					alert('verify email success!');
				}
			});
		}
	};


	document.getElementById('loginForm').onsubmit = function(e){
		e.preventDefault();

		var loginEmailInput = document.getElementById("loginEmailInp").value;
		var loginPassInput = document.getElementById("loginPassInp").value;
		
		var error_obj = {
			emailIsValid: true, 
			passwordIsValid: true
		};

		error_obj.emailIsValid = validateEmailInput(loginEmailInput);
		error_obj.passwordIsValid = validateInput(loginPassInput);

		if(!error_obj.emailIsValid || !error_obj.passwordIsValid) {
				alert('error in email or password');
		} else {
			doLogin(loginEmailInput, loginPassInput, function(err, result){
				if(err) {
					console.error("err: ", err);
					alert("login error");
				} else {
					console.log("result: ", result);
					alert('login success');
					//goSomewhere();
				}
			});
		}
	}

	function validateInput(input){
		if(typeof input === 'undefined' || input=='') {
			return false 
		} else {
			return true;
		}
	}

	function validateEmailInput(emailInput){
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(emailInput).toLowerCase());
	}
	function validatePasswordInput(y){
		var error = false;
		if (y.length < 8) {
		  error = true;
		}
		if (y.search(/[a-z]/) == -1) {
		  error = true;
		}
		if (y.search(/[!@#$%^&*()\\|\<>\/?,.~`;'"\[\]\{\}]/) == -1) {
		  error = true;
		}
		if (error) {
		  return false; //if there is an error return false because password is not valid.
		} else {
			return true;
		}
	}

	function goSomewhere(){
		var form = document.createElement("form");
	  form.method = "GET";
	  form.action = "./home";   
	  document.body.appendChild(form);
	  form.submit();
	}
}