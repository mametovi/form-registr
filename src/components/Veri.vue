<template>
  <div class="page">
    <div class="verification">
      <b-form-group v-for="(item, key) in fields" :key="key">
        <captcha v-if="item.type === 'captcha'" />

        <exs-input
          v-model="form[item.name]"
          :validation="$v.form[item.name]"
          v-else
          :type="item.type"
          :placeholder="item.placeholder"
        />
      </b-form-group>
    </div>

    <div class="verification-pas">
      <div class="verification-wrapper" >
        <div class="ror" v-if="!image">
          <div class="verification-pas-title">
            Прикрипите фото вашего паспорта
          </div>
          <img
            src="https://roem.ru/wp-content/uploads/2017/06/1-1-768x576.png"
            alt=""
          />

          <div class="input__wrapper">
            <input
              type="file"
              name="file"
              id="input__file1"
              class="input input__file"
              @change="onFileChange"
            />
            <label for="input__file1"
              >Прекрепить фото<b-icon
                icon="paperclip"
                aria-hidden="true"
              ></b-icon
            ></label>
          </div>
        </div>
        <div class="ror" v-else>
          <img :src="image" />
          <button @click="removeImage">удалить</button>
        </div>
      </div>

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
              >Прекрепить фото<b-icon
                icon="paperclip"
                aria-hidden="true"
              ></b-icon
            ></label>
          </div>
        </div>
        <div class="ror" v-else>
          <img :src="images" />
          <button @click="removeImages">удалить</button>
        </div>
      </div>
    </div>


    
  </div>
</template>

<script>
import Input from "./Form/Input";
import Captcha from "./Form/Captcha";
import { validationMixin } from "vuelidate";
import Checkbox from "./Form/Checkbox";

export default {
  name: "Form",
  mixins: [validationMixin],

  data() {
    return {
      form: {},
      image: "",
      images: "",
    };
  },

  validations() {
    const form = {};

    for (let i in this.fields) {
      if (this.fields[i].validation) {
        form[this.fields[i].name] = this.fields[i].validation;
      }
    }

    return {
      form,
    };
  },

  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },

    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = "";
    },

    onFileChanges(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImages(files[0]);
    },

    createImages(file) {
      var images = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.images = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImages: function (e) {
      this.images = "";
    },
  },

  components: {
    "exs-input": Input,
    captcha: Captcha,
    checkbox: Checkbox,
  },

  props: {
    fields: {
      required: true,
      type: Array,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
