console.log('person1:shows ticket');
console.log('person2:shows tickets');

const premovie=async ()=>{
    const wifeBrongingTickets=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket');
        },3000)
    })
    const getPopcorn=new Promise((resolve,reject)=>{
        resolve(`popcorn`)});
    const getBUtter=new Promise((resolve,reject)=>{
        resolve(`butter`);
    })
     const getColdDrinks=new Promise((resolve,reject)=>{
        resolve(`coldrink`);
    })


   let ticket= await wifeBrongingTickets;
    console.log(`wife:ihave ${ticket}`);
    console.log('husband:we should go in');
    console.log('wife:no i am hungry');

    let popcorn=await getPopcorn;

    console.log(`husband:i got ${popcorn}`);
    console.log('husband:we should go in');
    console.log('wife:no i need butter on my poopcorn');

    let Butter=await getBUtter;
    console.log(`husband:here is ${Butter}`);
    console.log('wife:bring me coldrink too');

    let coldrink= await getColdDrinks;

    console.log(`husband : here is your ${coldrink}`)

console.log('wife : love you darling , lets go in we are getting late');

   return ticket;
}

premovie().then((m)=>console.log(`person3:shows${m}`))


console.log('person4:shows ticket');
console.log('person5 :shows ticket')