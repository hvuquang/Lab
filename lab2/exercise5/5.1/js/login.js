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
  var pass = /^[A-Za-z]\w$/
  if (password.match(pass)) {
    console.log(password);
    alert("true");
    return true;
  } else {
    console.log(password);
    alert("false");
    return false;
  }
};

function loginClick() {
  if (user.value != "" && password.value != "") {
    if (checkValid(user.value, password.value) == true) {
      alert("1");
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
