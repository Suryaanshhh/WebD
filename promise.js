
console.log('person1:shows ticket');
console.log('person2:shows ticket');
const wifeBrongingTickets=new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('ticket');
      },3000)
})
const getPopcorn=wifeBrongingTickets.then((t)=>{
    console.log("wife:ihave tickets");
    console.log('husband:we should go in');
    console.log('wife:no i am hungry');
    return new Promise((resolve,reject)=>{
       resolve(`popcorn ${t}`) 
    })
})
const getBUtter=getPopcorn.then((t)=>{
    console.log('husband:i got popcorn');
    console.log('husband:we should go in');
    console.log('wife:no i need butter on my poopcorn');
    return new Promise((resolve,reject)=>{
        resolve(` butter ${t}`)
        
    })
})

const getColdDrinks=getBUtter.then((t)=>{
    return new Promise((resolve,reject)=>{
           resolve(`coldrink ${t}`)
    })
})

getColdDrinks.then((t)=>{
    console.log(t);
})
console.log('person4:shows ticket');
console.log('person5:shows ticket');