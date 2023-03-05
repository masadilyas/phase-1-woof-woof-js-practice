//wait for page to load
//
document.addEventListener("DOMContentLoaded", fetchPups)

function fetchPups(){
fetch("http://localhost:3000/pups")
//wait for response 
//convert to JSON

.then(response => response.json())
//pass the array of objects
//to addAllPups functions
.then(pups => addAllPups(pups))
}

function addAllPups(pups){
//grab the div with id of dog-bar
const dogBar=document.getElementById("dog-bar")
//iterate over the array of pup object
pups.forEach((pup)=> {
//create a span for each element
const newDogSpan=document.createElement("span")
//set the span inner text to the name 
newDogSpan.innerText=pup.name
//attach a click event listener to span
newDogSpan.dataset.id=pup.id

newDogSpan.addEventListener("click",handlePupClick)
//add the span to the div with id dog-bar
dogBar.append(newDogSpan)
});
}
function handlePupClick(e){
//fetch to the dynamic 
//interpolate the data-id attribute
fetch(`http://localhost:3000/pups/${e.target.dataset.id}`)
//convert response to JSON
.then(response=> response.json())
//pass data to addOnePup
.then(pupData=> addOnePup(pupData))
}

function addOnePup(pup){
//grab div with id dog-info
const dogInfo=document.getElementById("dog-info")
//create the div
dogInfo.innerHTML=""
//create an img tag
const pupImage = document.createElement("img")
//set img sr attribute to image key from pop object
pupImage.src = pup.image
//create an h2 with pups name
const pupName=document.createElement("h2")
pupName.innerText=pup.name
//create a button element 
const dogButton=document.createElement("button")
//conditionally render button text
//based on isGoodDog boolean value
dogButton.innerText=pup.isGoodDog ? "Good Dog!": "Bad Dog!"

dogButton.addEventListener("click", handlePupButtonClick)
//append new img tag to div#dog-info
dogInfo.append(pupImage,pupName,dogButton)

function handlePupButtonClick(e){
    if (e.target.innerText ==="Good Dog!"){
    e.target.innerText="Bad Dog!"
    }else {
e.target.innerText="Good Dog!"
    }
}
}
