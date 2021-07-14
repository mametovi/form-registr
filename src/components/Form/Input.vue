<template>
  <div>
     <b-form-input :type="type" :value="value" :placeholder="placeholder" :state="state" 
                @input="handleInput" @blur="checkValidation" />
    <b-form-invalid-feedback>{{ error }}</b-form-invalid-feedback>

  </div>
</template>

<script>
import mixin from "./mixin"

// Text, Password,Email
export default {
  name: 'Input',
  mixins: [mixin]
}
</script>
