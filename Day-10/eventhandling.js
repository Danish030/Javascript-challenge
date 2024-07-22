// Activity 1
let text = document.querySelector(".id")

let btnEvent = document.getElementById("btn")
btnEvent.addEventListener("click", function(){
    text.textContent = "Cahnged Text on click using event Handling"
});

let getImg = document.getElementById("img")
let showImg = document.getElementById("btn1")

showImg.addEventListener("dblclick", function () {
    if (getImg.style.visibility === "visible") {
        getImg.style.visibility = "hidden"
    }
    else{
        getImg.style.visibility = "visible"
    }
});


// Activity - 2 mouse events
let changeColor = document.getElementById("title");
changeColor.addEventListener("mouseover", function(){
    changeColor.style.color="yellow"
});

changeColor.addEventListener("mouseout", function() {
    changeColor.style.color = "black"; 
});

let changeBg = document.getElementById("textBg");
changeBg.addEventListener("mouseover", function(){
    changeBg.style.backgroundColor="Purple"
})


changeBg.addEventListener("mouseout", function(){
    changeBg.style.backgroundColor="rgb(123, 107, 139)"
})

// Activity - 3 - Keyboard events
let inputName = document.getElementById("name")
inputName.addEventListener("keydown", function () {
    console.log(inputName.value)
})

let outputText = document.getElementById("output")
let inputEmail = document.getElementById("mail")
inputEmail.addEventListener("keyup", function () {
   outputText.textContent = inputEmail.value;
})

// Activity - 4 

let formName = document.getElementById("name1");
let formEmail = document.getElementById("mail1");
let sumbitBtn = document.getElementById("btn2");

sumbitBtn.addEventListener("click", handleForm);
 function handleForm(e) {
    e.preventDefault()
    console.log(`User Name is ${formName.value}`);
    console.log(`Email  is ${formEmail.value}`);
 }

 let drop = document.getElementById("dropdown")
 let drop1 = document.getElementById("dropdown1")

 drop.addEventListener("change", function (){
drop1.textContent = drop.options[drop.selectedIndex].text;
 })


let list = document.getElementById("listItem")
list.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        console.log(`You clicked on ${event.target.textContent}`);
    }
})

function addItems(){
    let item = document.createElement("li")
    let input = prompt("Enter your language")
    item.textContent = input;
    list.appendChild(item)
}

let addItembtn = document.getElementById("addBtn");
addItembtn.addEventListener("click", addItems)

// Done all the activity