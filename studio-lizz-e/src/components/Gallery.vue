<template>
    <div class="container">
        <button
            href="#"
            v-on:click="onClickPrevious()"
            class="button">&#8249;</button>
        <img class="img" v-bind:src="this.picList[this.index]" alt="">
        <button 
            href="#"
            v-on:click="onClickNext()"
            class="button">&#8250;</button>
        
    </div>
    
</template>

<script>
import imgOne from "../assets/lizzie-dining.jpg"
import imgTwo from "../assets/egg-chair.jpg"
import imgThree from "../assets/egg-mirror.jpg"
import imgFour from "../assets/l-room.jpg"
import imgFive from "../assets/christmas-egg.jpg"
import imgSix from "../assets/stevie-champs.jpg"
import imgSeven from "../assets/stevie-mirror.jpg"

export default {

    name: 'Gallery',
    
    data() {
        return{
            index: 0,
            picList: [imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix, imgSeven]
        }

    },

    methods: { 
        onClickNext() {
            if (this.index + 1 === this.picList.length) {
                this.index = 0 
            } else {
              this.index = this.index + 1
            }
        },

        onClickPrevious () {
            if (this.index - 1 === -1) {
                this.index = this.picList.length - 1
                } else {
                    this.index = this.index - 1
                }
             console.log(this.index)
        } 
    }
}
</script>

<style scoped>

.container{
    display: flex;
    justify-content: center;
    align-items: center;
}

.button {
  background-color: #2c3e50;
  border: black;
  color: #f1f1f1;
  text-decoration: none;
  padding: 8px 16px;
  transition: 0.6s ease;
  border-radius: 10%;
  margin: 1em;
  height: 40px;
  outline: none;
  transition: ease 1s;
}

.button:hover {
transition: ease 1s;
background: #CCC;
color: black;
}

.button-container {
  margin-top: 20px;
}

.img{
  max-width: 40%;
  max-height: 40%;
  transition: 5s ease all;
}

</style>