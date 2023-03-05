// ### BONUS! STEP 5: FILTER GOOD DOGS
​
// When a user clicks on the Filter Good Dogs button, two things should happen:
​
// - The button's text should change from "Filter good dogs: OFF" to "Filter good
//   dogs: ON", or vice versa.
// - If the button now says "ON" (meaning the filter is on), then the Dog Bar
//   should only show pups whose isGoodDog attribute is true. If the filter is off,
//   the Dog Bar should show all pups (like normal).
​
const run = () => {
  fetch('http://localhost:3000/pups')
  .then((resp) => resp.json())
  .then((data) => {
    const dogFilter = document.querySelector("#good-dog-filter");
    const dogBar = document.querySelector("#dog-bar");
​
    dogFilter.addEventListener("click", () => {
      // dogFilter.innerText = dogFilter.innerText === 'Filter good dogs: OFF' ? "Filter good dogs: ON" : "Filter good dogs: OFF";
      
      if (dogFilter.innerText === 'Filter good dogs: OFF') {
        dogFilter.innerText = "Filter good dogs: ON";
        dogBar.innerText = '';
        const filteredPups = data.filter((pup) => {
          if(pup.isGoodDog) {
            return pup;
          }
        })
        console.log(filteredPups);
        filteredPups.forEach((pup) => {
          addDogToNavBar(pup)
        })
​
      } else {
        dogFilter.innerText = "Filter good dogs: OFF"
        // want to render all pups again
        dogBar.innerText = '';
        data.forEach((pup) => {
          addDogToNavBar(pup)
        })
      }
    })
    data.forEach((pup) => {
    addDogToNavBar(pup)
  })})
}

const addDogToNavBar = (pupObj) => {
  // data = array of dogs
  const dogBar = document.querySelector("#dog-bar");
  const dogInfo = document.querySelector("#dog-info");
​
  const dogSpan = document.createElement("span");
  dogSpan.innerText = pupObj.name
  dogBar.appendChild(dogSpan);
  
  dogSpan.addEventListener("click", () => {
    dogInfo.innerText = ''
    // - an `img` tag with the pup's image url
    const dogImg = document.createElement("img");
    dogImg.src = pupObj.image
    
    // - an `h2` with the pup's name
    const dogName = document.createElement("h2");
    dogName.innerText = pupObj.name
    
    // - a `button` that says `"Good Dog!"` or `"Bad Dog!"` based on whether
    //   `isGoodDog` is true or false. Ex:
    
    // When a user clicks the Good Dog/Bad Dog button, two things should happen:
    const dogButton = document.createElement("button");
    dogButton.innerText = pupObj.isGoodDog ? "Good Dog!" : "Bad Dog!";
    // - The button's text should change from Good to Bad or Bad to Good
    dogButton.addEventListener("click", (e) => {
      dogButton.innerText = dogButton.innerText === 'Good Dog!' ? "Bad Dog!" : "Good Dog!";
      // console.log(e.target.innerText)
      // if (dogButton.innerText === 'Good Dog!') {
      //   dogButton.innerText = 'Bad Dog!';
      // } else {
      //   dogButton.innerText = 'Good Dog!';
      // }
    })
    
    dogInfo.append(dogImg, dogName, dogButton)
  })
}
document.addEventListener('DOMContentLoaded', run)

// 1. addeventlisteners
// 2. fetch (GET REQUEST)
// 3. render stuff to the dom




/////// new code 
//steps 2: add Pups to DOg bar




fetch("http://localhost:3000/pups")
.then((res)=>res.json())
.then((data)=>{
data.forEach((pups)=>{
addAllPups(pups)
}
)})

function addPups(pups){
const dogDiv=document.getElementById("dog-bar")
const dogInfo=document.getElementById("dog-info")
const dogSpan=document.createElement("span")
dogSpan.innerText=pups.name
dogDiv.append(dogSpan)

dogSpan.addEventListener("click",()=>{
dogInfo.innerText=""
const dogImage=document.createElement("img")
dogImage.src=pups.image
const h2=document.createElement("h2")
h2.innerText=pups.name
const button=document.createElement("button")
button.innerText=isGoodDog?"Good Dog!":"Bad Dog!"

button.addEventListener("click",()=>{
if (button.innerText==="Good God!"){
    button.innerText="Bad Dog!"
}else {
    button.innerText="Good Dog!"
}
dogInfo.append(dogImage,h2,button)
})







document.addEventListener(DOMContentLoaded,fetchPups)