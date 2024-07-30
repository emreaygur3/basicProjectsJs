const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const input = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton =document.querySelector("#searchButton");
const clearButton =document.querySelector("#clearButton");
const imageListWrapper = document.querySelector(".imageList-wrapper");

runEventListeners();
function runEventListeners(){
    form.addEventListener("submit", search);
    clearButton.addEventListener("click", clear);
}


function search(e){
 const value = input.value.trim();
 fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
    method: "GET" ,
    headers: {
        Authorization :"Client-ID 1rCLFajYPB7tArZWlnbUlB7YUHGuv7rk2yDRM-qqb6I"
    }
 })
 .then((res)=> res.json())
 .then((data)=>{
   Array.from(data.results).forEach((image)=>{
    // console.log(image.urls.small)
    addImageToUI(image.urls.small)
   })
 })
 .catch((err)=>console.log(err))
 
    e.preventDefault();
}

function addImageToUI(url){
const div =document.createElement("div")
div.className="card";
const img =document.createElement("img")
img.setAttribute("src",url)
img.width="400"
img.height="400"
div.appendChild(img)
imageListWrapper.appendChild(div);
}

function clear(){
    input.value="";
    Array.from(imageListWrapper.children).forEach((child)=>child.remove())
}


// results/urls/small