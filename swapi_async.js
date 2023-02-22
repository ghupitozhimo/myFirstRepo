const starship= document.getElementById('starship')
const resourcelist = document.getElementById('resource')
const pressButton= document.getElementById('press-button')
const starshipCode= document.getElementById('starship-code')
const endpoint = `https://swapi.dev/api/starships`

const getRendomStarshipList = ()=>{
    const resource = document.createElement('li')
    const response = fetch(endpoint);
    response
    .then(data=> data.json())
    .then(newresource=>{
        resource.innerHTML= newresource.name
        resourcelist.appendChild(resource)
        console.log(newresource)
    })
}

pressButton.addEventListener('click',getRendomStarshipList)

const getRendomPlanetList = document.getElementById('planet')
const response = fetch (endpoint);
response
const resourse = document.createElement('li')
.then (data =>data.json())
.then (newPlanet=>{
    newPlanet.innerHTML =newPlanet.value
    newPlanet.appendChild(planet)
    console.log(newPlanet)
    
})
 
pressButton.addEventListener('click',getRendomPlanetList )

const getRandomCharacter1 = document.getElementById('character1')
const endpoint1 =`https://swapi.dev/api/starships`
response
const resource= documment.createElement('li')
.then(data=>data.json())
.then(newCharacter=>{
newCharacter.innerHTML= newCharacter.name
newCharacter.appendChild()
console.log(newCharacter)
})
// const people = document.getElementById('people')
// const endpoint1 = `https://swapi.dev/api/people/1/`
// const peopleAPI = document.getElementById('peopleCharacter')
// const peopleList = document.getElementById('list')
// const character = ''

// const getRandomCharacterAsyncAwait =async ()=>{
//     //data fetching
//     const response =await fetch(endpoint1);
//     const data= await response.json()
//     console.log(data)
//     //Create DOM Node
//     const list = document.createElement('li');
//     list.innerHTML = data.name
//     peopleList.appendChild(list )
//     console.log(peopleList)
    
// }
// peopleAPI.addEventListener('click',getRandomCharacterAsyncAwait)

// const planetApi = document.getElementById('planet')
// const endpoint2 = `https://swapi.dev/api/films/1`
// const clickButton = document.getElementById('click-button')
// const planetList = ''

// const getRendomPlanetList = ()=>{
//     const response= fetch(endpoint2);
//     response
//     .then(data=> data.json())
//     .then(newplanetList=>{
//         console.log(newplanetList)
//         planetApi.innerHTML = newplanetList.terrain
//     })
// }

// const planet= document.getElementById('planet')
// const endpoint3 = `https://swapi.dev/api/planets/3`
// const clickButton3 = document.getElementById('planet-button')

// const getRandomCharacter1 = ()=>{
//     const response = fetch(endpoint3)
//     response
//     .then(data=> data.json())
//     .then(newPlanet=>{
//         planetApi.innerHTML= newPlanet.name
//         console.log(newPlanet)
//     })
// }

// clickButton3.addEventListener('click',getRandomCharacter1)
 

// function*generatorFuncPre(){
//     yield "0"
//     yield "1"
//     yield "2"
//     yield "3"
// }

// const funGen= generatorFuncPre()
// console.log(funGen.next())
// console.log(funGen.next())
// console.log(funGen.next())
// console.log(funGen.next())

// function*generatorFunc(){
//     let idx = 0
//     let arr = ['apple', 'mango', 'banana']
//     yield arr [idx]
//     idx++
//     yield arr [idx]
//     idx++
//     yield arr [idx]
//     idx++
//     yield arr [idx]
//     console.log('i am the end')
// }
// generatorFunc()