let fname = document.getElementById("name")
const username = document.getElementById("username")
const password = document.getElementById("password")
const verify = document.getElementById("confirm")
const error = document.getElementById("error")

function registration (e) {
    let messages = []
    username ? messages.push("Welcome," + username.value) : messages.push('rada')

    
    if (password.value ==="" && verify.value===""){
        messages.push("")
    }
    if (password.value.length <6) {
        messages.push("password cannot be less than 6 characters")
    }
   if (password.value !== verify.value){
        messages.push("passwords do not match")
    }
    if (messages.length >0){
        e.preventDefault()
        error.innerText = messages.join(',')

    }

}


        
reg.addEventListener("click",registration)


