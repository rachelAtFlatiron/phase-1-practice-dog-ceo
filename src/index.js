console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const imgContainer = document.getElementById('dog-image-container')
const breedContainer = document.getElementById('dog-breeds')
const breedDropdown = document.getElementById('breed-dropdown')
let breeds = []

function addBreed(breed){
    let li = document.createElement('li')
    li.textContent = breed 
    breedContainer.append(li)
    //YOU DO: Challenge Three
    li.addEventListener('click', () => {
        li.style.color = 'red'
    })
}
//WE DO: Challenge One
fetch(imgUrl)
.then(res => res.json())
.then(data => {
    data.message.forEach(dog => {
        let img = document.createElement('img')
        img.src = dog
        imgContainer.append(img)
    })
})

//YOU DO: Challenge Two
fetch(breedUrl)
.then(res => res.json())
.then(data => {
    breeds = Object.keys(data.message)
    breeds.forEach(breed => {
        addBreed(breed)
    })
})

//WE DO: Challenge Four
breedDropdown.addEventListener('change', (e) => {
    console.log(breeds)
    
    let filterBreeds = breeds.filter(el => {
        return el[0] == e.target.value
    })
    //YOU DO: Rest of Challenge Four
    breedContainer.innerHTML = ''
    filterBreeds.forEach(breed => {
        addBreed(breed)
    })
})