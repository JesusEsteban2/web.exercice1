import FACT from './facts.json' with {type:'json'};
console.log(FACT)

function handlerSetUsers(event) {
    const form=event;
    

//FormData.prototype.entries();
const players=[{
    player:'Pepe',
    age:22
}]

localStorage.setItem(players,JSON.stringify(players))

players=JSON.parse(localStorage.getItem(players))

}