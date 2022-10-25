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
  var passw = /[A-Za-z]\w/;
  var user = /[A-Za-z]\w/;
  if(username.match(user)&& username.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-\ ]/) < 0) {
    if (password.match(passw) && password.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-\ ]/) < 0) {
      return true;
    } else {
      return false;
    }
  }
    else return false;
};

function loginClick() {
  if (user.value != "" && password.value != "") {
    if (checkValid(user.value, password.value) == true) {
      login.style.display = "none";
      hello.style.display = "block";
      username.innerHTML = user.value;
    } else {
      alert("Invalid Username, Password");
    }
  } else {
    alert("Invalid Username, Password");
  }
}

function logoutClick() {
  login.style.display = "block";
  hello.style.display = "none";
}
