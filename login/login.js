const usernameInput = document.getElementById("name");
const passwordInput = document.getElementById("password");

function login() {
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredUsername === "ERIC" && enteredPassword ==="ERIC2003") {
       window.open("user_interface/Homepage.html");
        
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
sign_in.addEventListener("click",login)

function register(event) {
    event.preventDefault()

    window.open("login/registration.html" ,"_self")
    
    
}
sign_up.addEventListener("click",register)




