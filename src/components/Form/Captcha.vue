<template>


  <div class="geneer">
    
    <b-form-input type="text" :placeholder="placeholder" :value="value" @input="handleInput" />

    <div class="captch">

      <b-img v-if="captcha.img" :src="getImgUrl(captcha.img)" />
 
      <div class="random" @click="getRepeat()">
        <b-icon icon="arrow-repeat" aria-hidden="true"></b-icon>
      </div>
    </div>
  </div>
  
</template>

<script>
  import mixin from "./mixin"

  export default {
    name: "Captcha",
    mixins: [mixin],

    data() {
      return {
        captchaArr: [{
            id: 273231,
            img: "captcha-1",
          },
          {
            id: 761099,
            img: "captcha-2",
          },
          {
            id: 187609,
            img: "captcha-3",
          },
          {
            id: 169897,
            img: "captcha-4",
          },
          {
            id: 567952,
            img: "captcha-5",
          },
          {
            id: 528949,
            img: "captcha-6",
          },
          {
            id: 142853,
            img: "captcha-7",
          },
          {
            id: 404862,
            img: "captcha-8",
          },
          {
            id: 892919,
            img: "captcha-9",
          },
          {
            id: 220443,
            img: "captcha-10",
          }],

        random: 1

      }
    },

    computed: {
      captcha() {
        return this.captchaArr[this.random];
      }
    },

     methods: {
      getRandom() {
        const size = this.captchaArr.length - 1;
        this.random = Math.ceil(Math.random() * size).toString();        
      },

      getImgUrl(pet) {                
        return require("@/assets/" + pet + ".png"); 
      },

      getRepeat() {
        const size = this.captchaArr.length - 1;
        this.random = Math.ceil(Math.random() * size).toString();
      },
    },

    mounted() {
      
      this.getRandom()

    },
  }
</script>
