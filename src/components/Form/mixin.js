const mixin = {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String
    },
    value: {},    

    validation: {
      type: Object,
      default: undefined
    },
    options: {
      type: Array
    },
    celender: {
      type: String
    }
  },

  data() {
   return {
      texts: {
        required: 'Это поле обязытельное к заполнению!',
        email: 'Это поле должно быть email',
        minLength: 'Минимальное колличество 8',
        sameAs: 'Поле не совпадает',
        numeric: 'Поле принимает только число'
      },
      checked: false,
      error: ''
   }
  },

  computed: {
    hasLabel() {
      return this.label !== undefined
    },

    hasValidation() {
      return this.validation !== undefined
    },
    state() {
      if (!this.hasValidation) {
          return null
      }
      if (!this.checked) {
          return null
      } else {
          return !this.validation.$error
      }
    }
  },

  methods: {
    handleInput(val) {
      if (this.hasValidation) {
          this.checked = false;
      }

      this.$emit('input', val)
    },

    constructErrors() {
        const params = this.validation.$params;
        const errors = Object.keys(params).reduce((accumulator, key) => {
            if (!this.validation[key]) {
                const options = {};
                if (key === 'minLength') {
                    options.length = params.minLength.min
                }
                const text = this.texts[key];
                accumulator.push(text);
            }
            return accumulator
        }, []);

        return errors.join('. ');
    },

    checkValidation() {      
        if (!this.hasValidation) return;
        this.validation.$touch()
        if (this.validation.$error) {
            this.checked = true;
            this.error = this.constructErrors()
        } else {
            this.error = ''
        }

        this.$emit('check-validation')
    }
  }
}

export default mixin