// const userLoggedIn = localStorage.getItem("userLoggedIn");
// const formData = new FormData();
// formData.append('username', 'admin');
// formData.append('password', 'admin');
// if (userLoggedIn) {
//   window.location.pathname = "/index.html";
// }
// const loginForm = document.querySelector('form#login-form')
// const errorUserName = document.querySelector('span#error-username')
// const errorPassword = document.querySelector('span#error-password')

// loginForm.onsubmit = (e) =>{
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const username = formData.get('username');
//     const password = formData.get('password');
//     errorUserName.innerHTML = !username ? "username tidak boleh kosong" : "";
//     errorPassword.innerHTML = !password ? "Password tidak boleh kosong" : "";
//     console.log(username)
//     if (username && password) {
//       localStorage.setItem("userLoggedIn", true);
//       window.location.pathname = "/index.html";
//     }
//   }