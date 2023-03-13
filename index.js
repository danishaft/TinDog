import { dogs } from "./data.js";
import { Dog } from "./dog.js";

// create a function that gets each of the objects in the array one by one
const getNewDog = () => {
    const newDog = dogs.shift()
    return newDog ? new Dog(newDog) : {}
}
document.addEventListener('click', e => {
    if(e.target.id === 'accept'){
        accept(e.target.id)
    }else if(e.target.id === 'reject'){
        reject(e.target.id)
    }
})

const accept = (param) => {
    dog.isLiked(param)
    nextDog()
    renderDogHtml()
}
const reject = (param) => {
    dog.isLiked(param)
    nextDog()
    renderDogHtml()
}
let isWaiting = false

const nextDog = () => {
    if(!isWaiting){
        if(dog.hasBeenSwiped){
            isWaiting = true
            if(dogs.length > 0){
                setTimeout(()=>{
                    dog = getNewDog()
                    renderDogHtml()
                    isWaiting = false
                }, 2000)
            }
        }
    }
}

const renderDogHtml = () => {
    document.getElementById('dogs').innerHTML = dog.getDogHtml()
}
let dog = getNewDog()

renderDogHtml()