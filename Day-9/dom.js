// Activity 1
document.getElementById("title").innerText = "JavaScript";

document.querySelector(".text").style.backgroundColor = 'yellow';

// Activity 2
const div = document.createElement("div")
div.innerText = " This div is created"
document.body.appendChild(div)


let  li = document.createElement("li")
let data = ["Python"," Javascript", "C#"]
for (i = 0; i < data.length; ++i) {
    let li = document.createElement('li');
    li.innerText = data[i];
    list.appendChild(li);
}
let ul = document.getElementById("list");

ul.appendChild

// Activity 3
// removed p-tag which has book list data
let removeP = document.getElementById("text1");
removeP.remove();

// removed last child of li which is C# in the list
let removeList = document.getElementById("list");
removeList.removeChild(removeList.lastElementChild)

// Activity -4
// changging element's attributes

let getImg = document.getElementById("img")

getImg.src = "code.jpg"


let myBook = document.querySelector(".book")
myBook.classList.add("add")

// removed ul tag's calss
 let selecUl = document.querySelector(".ulTag")

 selecUl.classList.remove("class")

 // Activity -5
 let getBtn = document.querySelector(".btn")
 getBtn.addEventListener("click", function(){
    myBook.innerText= "Frontend engineering is Complex"
 })

 getBtn.addEventListener("mouseover", function() {
    getBtn.style.border = "3px solid yellow";
});