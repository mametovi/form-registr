<template>
  <div class="form-chekboks">

    <b-form-group
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
    >
      <b-form-checkbox
        :value="value"
        @change="handleInput"
        @blur="checkValidation"
        :options="options"
        name="flavour-1"
      >
        {{ placeholder }}
      </b-form-checkbox>
    </b-form-group>
    
  </div>
</template>

<script>
import mixin from "./mixin";

export default {
  name: "Checboks",
  mixins: [mixin],

  data() {
    return {};
  },
};
</script>
