/**
 * 
 */

function setErrorMessage(id, message) {
	document.getElementById(id).innerText = message;
}

function removeErrorMessage(id) {
	document.getElementById(id).innerText = "";
}

function passwordLevel(str) {
	var pattern1 = /[a-zA-Z]/;
	var pattern2 = /[0-9]/;
	var pattern3 = /[~!@#$%^&*()_+|<>?:{}]/;
	
	if(str == "" || str.length == 0) {
		return 0;
	} else {
		if(pattern1.test(str) && pattern2.test(str) && pattern3.test(str)) {
			return 4;
		} else if(!pattern1.test(str) && pattern2.test(str) && pattern3.test(str)) {
			return 3;
		} else if(pattern1.test(str) && !pattern2.test(str) && pattern3.test(str)) {
			return 3;
		} else if(pattern1.test(str) && pattern2.test(str) && !pattern3.test(str)) {
			return 3;
		} else if(!pattern1.test(str) && !pattern2.test(str) && pattern3.test(str)) {
			return 2;
		} else if(!pattern1.test(str) && pattern2.test(str) && !pattern3.test(str)) {
			return 2;
		} else if(pattern1.test(str) && !pattern2.test(str) && !pattern3.test(str)) {
			return 2;
		} else {
			return 1; 
		}
	}
}

function popup(url) {
	window.open(url, "", "height=300,width=400,location=false,menubar=false,resizable=false,toolbar=false");
}