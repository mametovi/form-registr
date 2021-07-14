<template>
  <div class="home">
    <div class="form">
      <div class="form-title">Регистрация</div>
      <div class="form-link mb-3">
        <a href="">Как зарегистрироваться?</a>
      </div>

      <build-form :fields="regForm">


        <template v-slot:footer="disabled">
          <div class="btn-button">
            <b-button
              :disabled="disabled.disabled"
              variant="primary"
              >Далее
              </b-button
            >
            <div class="ng-binding">
              <span>Я уже зарегистрирован,</span>
              <a href="#">Вход</a>
            </div>
          </div>
        </template>
      </build-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import exForm from "@/components/Form.vue";
import countries from "@/const/countries";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

// const valdCaptcha = (captcha) => {
//   return (value) => captcha === value
// }

export default {
  name: "Registration",
  components: {
    "build-form": exForm,
  },

  data() {
    return {
      regForm: [
        {
          placeholder: "Email адрес",
          type: "text",
          name: "email",
          validation: {
            required,
            email,
          },
        },
        {
          placeholder: "Пароль",
          type: "text",
          name: "password",
          validation: {
            required,
            minLength: minLength(6),
          },
        },
        {
          placeholder: "Повторите пороль",
          type: "text",
          name: "repeatPassword",
          validation: {
            required,
            sameAsPassword: sameAs("password"),
          },
        },
        {
          placeholder: 'Номер телефона начиная с "+"',
          type: "text",
          name: "number",
          validation: {
            required,
          },
        },
        {
          placeholder: "Реферал (ID пригласителя)",
          type: "text",
          name: "id",
          validation: {
            required,
          },
        },
        {
          type: "selector",
          options: countries,
          name: "country",
          validation: {
            required,
          },
        },
        {
          placeholder: "Введите код с картинки",
          type: "captcha",
          name: "captcha",
          validation: {
            required,
            // captcha: valdCaptcha
          },
        },
        
        {
          type: "checkbox",
          placeholder: "Terms of use",
          name: "termofuse",
          grup: "docs",
          validation: {
            required,
          }         
        },

        {
          type: "checkbox",
          placeholder: "Privacy policy",
          name: "privacypolicy",
          grup: "docs",
          validation: {
            required,
          }         
        },
        


      ],
    };
  },
};
</script>
