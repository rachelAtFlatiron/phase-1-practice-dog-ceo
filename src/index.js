console.log("%c HI", "color: firebrick");
const url = "https://dog.ceo/api/";
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const imgDiv = document.querySelector("#dog-image-container"); //document.getElementById('dog-image-container')
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const breedDiv = document.querySelector("#dog-breeds");
const breedDropdown = document.querySelector("#breed-dropdown");

//create parameter breed so that it knows what information to use
//because info is out of global scope
function addBreed(breed) {
	//3. create the elements
	let li = document.createElement("li");
	li.textContent = breed;
	li.addEventListener("click", (e) => {
		li.style.color = "yellow";
	});
	//4. append to page
	breedDiv.append(li);
}
let breedArray = [];
//1. fetch to imgUrl
fetch(imgUrl)
	//2. process the information (with .thens)
	.then((res) => res.json())
	//3. create an element with said information
	.then((data) => {
		data.message.forEach((img) => {
			let el = document.createElement("img");
			el.src = img;
			//4. append said element onto the page
			imgDiv.append(el);
		});
	});

//1. fetch to url
fetch(breedUrl)
	//2. process the info
	.then((res) => res.json())
	.then((data) => {
		breedArray = Object.keys(data.message);
		breedArray.forEach((breed) => {
            //breed is in function scope for cb function of forEach
			addBreed(breed);
		});
	});

//Challenge 4
//1. add an eventlistener to <select>
breedDropdown.addEventListener("change", (e) => {
	let value = e.target.value;

	//2. filter out dogs based on select value
	let filteredBreeds = breedArray.filter((breed) => {
		//does the first letter of breed === value
		return breed[0] === value;
	});
	//3. add those dogs to page
	//empty previous <ul> to start fresh
	breedDiv.innerHTML = "";
	//repopulate the <ul>
	filteredBreeds.forEach((breed) => {
        //breed is in function scope for cb function of forEach
		addBreed(breed);
	});
});
