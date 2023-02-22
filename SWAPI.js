const starship= document.getElementById('starship')
const resourcelist = document.getElementById('resource')
const pressButton= document.getElementById('pressButton')
const starshipCode= document.getElementById('starship-code')
const endpoint = `https://swapi.dev/api/starships`
const getRendomStarshipList = ()=>{
    try{
        const resource = document.createElement('li')
        const response = fetch(endpoint);
        throw new Error('I am error outside')

        response
        .then(data=> data.json())
        .then(newresource=>{
            resource.innerHTML= newresource.value
            resourcelist.appendChild(resource)
            console.log(resourcelist)
            throw new Error('I am error')
    
        }).catch((err) => console.log(err))
    }catch(err){
        console.log(err)
    }
}
const getRandonGenerator =()=>{
    try{
        const response = fetch (endpoint);
        response
        .then(data=>data.json())
        .then(newrescourse=>{
            throw new Error('i am error inside')
            resourcelist.innerHTML= newrescourse.value
            // resourcelist.appendChild(rescource)
            console.log(resource)
            throw new console.error('i am error outside');
        }).catch((err)=> console.log(err))
    }catch(err){
     console.log(err)
    }
}
pressButton.addEventListener('click',getRandonGenerator)

// const people = document.getElementById('people')
// const endpoint1 = `https://swapi.dev/api/people/1/`
// const peopleAPI = document.getElementById('peopleCharacter')
// const character = ''


// const getRandomCharacter =()=>{
//     try{
//     const response = fetch(endpoint1)
//     throw new Error('I am error outside')
//     response
//     .then(data=>data.json())
//     .then(newCharacter=>{
//         console.log(newCharacter)
//         throw new Error('I am error')
//         people.innerHTML= newCharacter.birth_year
    
//     }).catch((err)=> console.log(err))
    
// }catch(err){
//     console.log(err)
// }

// }
// starship.addEventListener('click',getRandomCharacter)

// const planetApi = document.getElementById('planet')
// const endpoint2 = `https://swapi.dev/api/films/1`
// const clickButton = document.getElementById('click-button')
// const planetList = ''

// const getRendomPlanetList = ()=>{
//     try{
//     const response= fetch(endpoint2);
//     throw new error ('this is error outside')
//     response
//     .then(data=> data.json())
//     .then(newplanetList=>{
//         throw new error ('this is error')
//         console.log(newplanetList)
//         planetApi.innerHTML = newplanetList.terrain
//     }).catch((err)=>console.log(err))
// }catch (err){
//     console.log(err)
// }
// }
// // planetApi.addEventListener('click',getRendomPlanetList)


// const planet= document.getElementById('planet')
// const endpoint3 = `https://swapi.dev/api/planets/3`
// const clickButton3 = document.getElementById('planet-button')

// const getRandomCharacter1 = ()=>{
//     try {
//     const response = fetch(endpoint3)
//     throw new error('this is error outside')
//     response
//     .then(data=> data.json())
//     .then(newPlanet=>{
//         throw new error ('this is error inside')
//         planetApi.innerHTML= newPlanet.name
//         console.log(newPlanet)
//     }).catch((err)=> console.log())
// }catch(error){
// console.log(error)
// }
// }

// // clickButton3.addEventListener('click',getRandomCharacter1)
