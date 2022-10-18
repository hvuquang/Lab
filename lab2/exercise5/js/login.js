var user = document.getElementById("user");
var password = document.getElementById("pwd");
var login = document.getElementById("login");
var hello = document.getElementById("hello");
var username = document.getElementById("user-name");

// let loginClick = () => {
//     alert("Error");
// }
// không dùng đc arrow function in DOM ???

let checkValid = (username, password) => {
    const re = new RegExp(@"^([a-zA-Z0-9_\-])([a-zA-Z0-9_\-\.]*)@(\[((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}|((([a-zA-Z0-9\-]+)\.)+))([a-zA-Z]{2,}|(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\])$");
}

function loginClick() {
  if (user.value != "" && password.value != "" ) {
    login.style.display = "none";
    hello.style.display = "block";
    username.innerHTML = user.value;
  } else {
    alert("Invalid Username, Password");
  }
}

function logoutClick() {
  login.style.display = "block";
  hello.style.display = "none";
}
