// our class goes here 
import { dogs } from "./data.js";

export class Dog {
    constructor(data){
        Object.assign(this, data)
        this.hasBeenRejected = false
    }
    isLiked(param){
        if(param === 'accept'){
            this.hasBeenRejected = false
            this.hasBeenLiked = true
            this.hasBeenSwiped = true
        }else if(param === 'reject'){
            this.hasBeenRejected = true
            this.hasBeenLiked  = false
            this.hasBeenSwiped = true
        }
    }
    getReactionHtml(){
      if(this.hasBeenLiked){
        return `
            <div class="like-reaction" id="like-action">
                <p >Like</p>
            </div>`
      }else if(this.hasBeenRejected){
        return `
            <div class="reject-reaction" id="reject-action">
                <p >Nope</p>
            </div>`
      }else {
        return``
      }
    }
    getDogHtml(){
        const {name, avatar, age, bio, } = this
        const reaction = this.getReactionHtml()
        return `
        <figure>
            <img src="${avatar}" alt="${name} image">
            <div class="text">
                <p class="name">${name}, ${age}</p>
                <p class="question">${bio}</p>
            </div>
            ${reaction}
        </figure>
        <div class="bottom-bar">
            <span id="reject-btn" class="btn"> <i class="bi bi-x-lg" id ="reject"></i></span>
            <span id="accept-btn" class="btn"> <i class="bi bi-heart-fill" id ="accept"></i></span>
        </div>`
    }
}