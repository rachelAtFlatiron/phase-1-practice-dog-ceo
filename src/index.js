console.log('%c HI', 'color: firebrick')
const url = "https://dog.ceo/api/"
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const imgDiv = document.querySelector('#dog-image-container') //document.getElementById('dog-image-container')

//1. fetch to imgUrl
fetch(imgUrl)
//2. process the information (with .thens)
.then(res => res.json())
//3. create an element with said information
.then(data => {
    debugger
    data.message.forEach(img => {
        let el = document.createElement('img')
        el.src = img 
        //4. append said element onto the page
        imgDiv.append(el)
    })
})
