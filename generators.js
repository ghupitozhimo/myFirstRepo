// // First Program
// function* generatorFuncPre(){
//     yield "First Line"
//     yield "Second Line"
//     yield "Third Line"
//     yield "Fourth Line"
// }

// const funcGen = generatorFuncPre()

// console.log(funcGen.next())
// console.log(funcGen.next())
// console.log(funcGen.next())
// console.log(funcGen.next())
// function* generatorFuncPre(){
//     yield "First"
//     yield "second"
//     yield "third"
//     yield "fourth"
// }
// const funGen = generatorFuncPre()
// console.log(funGen.next())
// console.log(funGen.next())
// console.log(funGen.next())
// console.log(funGen.next())
// // Second Program
// function* generatorFunc(){
//     let idx = 0
//     let arr = ['🍄', '🥬', '🍅'];

//     yield arr[idx]
//     idx++
//     yield arr[idx]
//     idx++
//     yield arr[idx]
//     idx++ 
//     yield arr[idx]
//     console.log('I am the end ')
// }

// const funcGenPrm = generatorFunc()

// Third Program
async function* generatorAsyncFunc(planet, character, starships){
    const endpointOne = `https://swapi.dev/api/planets/${planet}` 
    const endpointTwo = `https://swapi.dev/api/people/${character}` 
    const endpointThree = `https://swapi.dev/api/starships/${starships}` 

    let response =  await fetch(endpointOne)
    console.log(response)
    yield response
    let data = await response.json()

    console.log(data)

    response =  await fetch(endpointTwo)
    console.log(response)
    yield response
    data = await response.json()
    console.log(data)

    response =  await fetch(endpointThree)
    console.log(response)
    yield response
    data = await response.json()
    console.log(data)

    console.log('I am the end ')
    return 
}

const responseFromGen = generatorAsyncFunc(15,55,10);

responseFromGen.next()

// This is a new commit

