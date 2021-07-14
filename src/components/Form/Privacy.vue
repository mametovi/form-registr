<template>
  <div>
    <div class="verification-wrapper">
      <div class="ror" v-if="!image">
        <div class="verification-pas-title">
          {{ placeholder }}
        </div>

        <img :src="img" alt="" />

        <div class="input__wrapper">         
          <label>
            <b-form-file plain @change="onFileChange" />
            Прекрепить фото<b-icon icon="paperclip" />
          </label>
        </div>
      </div>

      <div class="ror" v-else>
        <img :src="image" />
        <button @click="removeImage">удалить</button>
      </div>
    </div>
    
<!-- 
    <div class="verification-wrapper">
      <div class="ror" v-if="!images">
        <div class="verification-pas-title">
          Прикрипите фото паспорта как показанно на рисунке ниже
        </div>
        <img
          src="https://1.bp.blogspot.com/-hr8pxQdNzcI/XQjiiLBUzkI/AAAAAAAABcc/wnbPI9HK4zwwq8g8DCIOD2dfC62PTXmawCLcBGAs/s1600/06_18_%25D0%25A1%25D0%25B5%25D0%25BB%25D1%2584%25D0%25B8%2B%25D1%2581%2B%25D0%25BF%25D0%25B0%25D1%2581%25D0%25BF%25D0%25BE%25D1%2580%25D1%2582%25D0%25BE%25D0%25BC.png"
          alt=""
        />

        <div class="input__wrapper">
          <input
            type="file"
            name="file"
            id="input__file"
            class="input input__file"
            @change="onFileChanges"
          />
          <label for="input__file"
            >Прекрепить фото<b-icon icon="paperclip" aria-hidden="true"></b-icon
          ></label>
        </div>
      </div>
      <div class="ror" v-else>
        <img :src="images" />
        <button @click="removeImages">удалить</button>
      </div>
    </div> -->

  </div>
</template>

<script>
import mixin from "./mixin"

export default {
  name: 'verification',
  mixins: [mixin],

  props: {
    img: {
      type: String
    }
  },
  
  data() {
    return {
      image: ""
    }
  },

  methods: {
     onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },

    createImage(file) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
        this.handleInput(vm.image)
      };
      reader.readAsDataURL(file);
    },

    removeImage: function (e) {
      this.image = "";
    }
  }
}
</script>