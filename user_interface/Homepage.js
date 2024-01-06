const time = new Date()
document.getElementById("time").innerHTML = time
let username = "ERIC"
const display = username.value
document.getElementById("Profile").innerHTML=username


var myindex=0
slideshow()

function slideshow (){
    var i
    var images =document.getElementsByClassName("slides");
    
    for(i=0;i<images.length;i++){
        images[i].style.display="none"
    }
    myindex++;
    if(myindex>images.length){
        myindex=1
    }
    images[myindex-1].style.display="block"

    setTimeout(slideshow,3000)
    
}
