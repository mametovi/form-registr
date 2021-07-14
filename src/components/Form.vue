<template>
  <div class="page">
    <b-form-group v-for="(item, key) in fields" :key="key">
      <captcha
        v-model="form[item.name]"
        :validation="$v.form[item.name]"
        v-if="item.type === 'captcha'"
        :placeholder="item.placeholder"
      />

      <b-select
        v-model="form[item.name]"
        :validation="$v.form[item.name]"
        v-else-if="item.type === 'selector'"
        :options="item.options"
        value-field="code"
        text-field="name"
      />

      <checkbox
        v-model="form[item.name]"
        :placeholder="item.placeholder"
        :validation="$v.form[item.name]"
        v-else-if="item.type === 'checkbox'"
      >
      </checkbox>


      <b-form-datepicker v-model="form[item.name]"
        :validation="$v.form[item.name]"
        v-else-if="item.type === 'celender'"
        :placeholder="item.placeholder" />

        

      <file-photo
        class="verification-pas"
         v-model="form[item.name]"
        :img="item.img"
        :placeholder="item.placeholder"
        :validation="$v.form[item.name]"
        v-else-if="item.type === 'pas'" />

        <file-photo
        class="verification-pas"
         v-model="form[item.name]"
        :img="item.img"
        :placeholder="item.placeholder"
        :validation="$v.form[item.name]"
        v-else-if="item.type === 'fest'" />

      <ex-input
        v-model="form[item.name]"
        :validation="$v.form[item.name]"
        v-else-if="item.type === 'text'"
        :type="item.type"
        :placeholder="item.placeholder" />
    </b-form-group>

    <slot v-bind:disabled="$v.form.$invalid" name="footer" >
      <b-button
        variant="primary"
        @click="$router.push({ name: 'succsses' })"
        :disabled="$v.form.$invalid"
        >Отправить</b-button
      >
    </slot>

  </div>
</template>

<script>
import Btn from "../components/Btn";

import Privacy from "./Form/Privacy"
import Input from "./Form/Input";
import Captcha from "./Form/Captcha";
import { validationMixin } from "vuelidate";
import Checkbox from "./Form/Checkbox";

export default {
  name: "ExForm",
  mixins: [validationMixin],

  components: {
    "ex-input": Input,
    captcha: Captcha,
    checkbox: Checkbox,
    "v-btn": Btn,
    "file-photo": Privacy
  },

  props: {
    fields: {
      required: true,
      type: Array,
    },
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

  data() {
    return {
      form: {},
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
