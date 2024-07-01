console.log("%c HI", "color: firebrick");

//got all necessary nodes and urls and saved as const
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const dogImageContainer = document.getElementById("dog-image-container");
const breedList = document.getElementById("dog-breeds");
const breedDropdown = document.getElementById("breed-dropdown");

//created a reusable function (helper function) to render any array as a list of breeds
function renderList(breeds) {
	//reset list if re-rendering based on filter
	breedList.innerHTML = ''
	breeds.forEach((breed) => {
		const li = document.createElement("li");
		li.textContent = breed;
		breedList.append(li);

		//event listener
		//target the element needed
		li.addEventListener("click", (e) => {
			e.target.style.color = "red";
		});
	});
}

//fetched the first 4 images 
fetch(imgUrl)
	.then((res) => {
		//error handling
		if (res.ok) {
			return res.json();
		} else {
			throw "something went wrong";
		}
	})
	.then((data) => {
		//created new <img> for each image
		data.message.forEach((img) => {
			let newImage = document.createElement("img");
			newImage.src = img;
			dogImageContainer.append(newImage);
		});
	});

//fetched all breed information
fetch(breedUrl)
	.then((res) => {
		//do a little error handling
		if (res.ok) {
			return res.json();
		} else {
			throw "something went wrong";
		}
	})
	.then((data) => {
		//extracted the keys from the JSON 
		let breedKeys = Object.keys(data.message);
		//render initial list of breeds (pre-filter)
		renderList(breedKeys);

		//change event (because the target element is an <input> not a <button>)
		breedDropdown.addEventListener("change", (e) => {
			const filteredBreeds = breedKeys.filter((curBreed) => {
				if (curBreed[0] === e.target.value) {
					return true;
				} else {
					return false;
				}
			});
			//all subsequent re-renders of breeds list
			renderList(filteredBreeds)
		});
	});

//.filter
//filters through an array
//returns a new array with elements that satisfy the conditional

//all numbers that are even
const nums = [1, 2, 3, 4, 5, 6];
const result = nums.filter((num) => {
	// % returns the remainder regarding divison
	//if remainder is 0, the number is even
	//if remainder is 1, the number is odd
	//we must make sure we are always dividng by 2
	// if(num % 2 === 0){
	// 	return true
	// } else {
	// 	return false
	// }
	return num % 2 === 0;
});
