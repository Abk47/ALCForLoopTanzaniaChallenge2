// Checking if passwords match when signing Up
var check = function() {
    if (document.getElementById('password').value ==
        document.getElementById('password1').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'Passwords match';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Passwords do not match';
    }
}


