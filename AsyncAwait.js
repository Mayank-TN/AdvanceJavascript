console.log('Person1 : show ticket')
console.log('Person2 : show ticket')

const preMovie = async () => {

    const promiseWifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => { resolve('ticket') }, 3000)
    })

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'))

    const addButter = new Promise((resolve, reject) => resolve('butter'))

    const getColdDrink = new Promise((resolve,reject)=> resolve('Cold Drink'))

    let ticket = await promiseWifeBringingTickets;
    console.log(`wife : i have ${ticket}`)
    console.log('husband : we should go in')
    console.log('wife : no i am hungry')

    
    let popcorn = await getPopcorn;
    console.log(`husband : i got some ${popcorn}`)
    console.log('husband : we should go in')
    console.log('wife : i need butter on my popcorn')

   
    let butter = await addButter;
    console.log(`husband :  i got some ${butter} `)
    console.log('wife : i need cold drink too!')
    

    let coldDrink = await getColdDrink;
    console.log(`husband : here is your ${coldDrink}, anything else my darling`)
    console.log('wife : lets go we are getting late')
    console.log('husband : thank you for reminder')

    return ticket
}

preMovie().then((m) => console.log(`Person3 : shows ${m}`))
console.log('Person4 : show ticket')
console.log('Person5 : show ticket')

