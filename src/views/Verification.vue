<template>
  <div class="ver">
    <div class="container">

    <div class="verification-title">
      Верификация
    </div>

    <div class="verification-text">
      Внимание!Все поле обязательны к заполнению! <br>
      при отстутствииу коких-либо данных ставьте почерк(знак минус)
    </div>
    
    <build-form :fields="regForm">    
      <template v-slot:footer="disabled"> 
         <div class="verification-btn">
          <div class="btn-text">
            После отправки документов напишите в чат администратору и собщите о верификации документов
          </div>
          <b-button variant="primary" :disabled="disabled.disabled">Отправить</b-button>
        </div>
      </template>
    </build-form>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Btn from "../components/Btn";

import exForm from "@/components/Form.vue";
import { required,} from "vuelidate/lib/validators";

// const valdCaptcha = (captcha) => {
//   return (value) => captcha === value
// }

export default {
  name: "Registration",
  components: {
    "build-form": exForm,
    "v-btn": Btn
  },

  data() {
    return {
      regForm: [
         {
          placeholder: "Фамилия",
          type: "text",
          name: "name",
          validation: {
            required,
          },
        },
        {
          placeholder: "Имя",
          type: "text",
          name: "user",
          validation: {
            required,
          },
        },
        {
          placeholder: "Отчество",
          type: "text",
          name: "cup",
          validation: {
            required,
          },
        },
        {
          type: "celender",
          name: "celender",
          placeholder: 'Дата рождения',
          validation: {
            required,
          },
        }, 
        {
          placeholder: "Серия паспорта",
          type: "text",
          name: "passport",
          validation: {
            required,
          },
        }, 
        {
          placeholder: "Номер пасспорта",
          type: "text",
          name: "numpass",
          validation: {
            required,
          },
        },
        {
          placeholder: "Кем выдан паспорт",
          type: "text",
          name: "issued",
          validation: {
            required,
          },
        }, 
        {
          type: "celender",
          name: "passport-date",
          placeholder: 'Дата выдачи паспорта',
          validation: {
            required,
          },
        },
        {
          placeholder: "Код подразделения",
          type: "text",
          name: "subdivisions",
          validation: {
            required,
          }
        },
        {
          placeholder: "Адрес по прописке",
          type: "text",
          name: "adress",
          validation: {
            required,
          },
        },

        {
          type: "pas",
          placeholder: "Прекрепить фото паспорта",
          img: 'https://roem.ru/wp-content/uploads/2017/06/1-1-768x576.png',
          name: "pas",
          grup: "docs",
          validation: {
            required,
          }    
        }, 

        {
          type: "pas",
          placeholder: "Прикрипите фото паспорта как показанно на рисунке ниже",
          img: 'https://1.bp.blogspot.com/-hr8pxQdNzcI/XQjiiLBUzkI/AAAAAAAABcc/wnbPI9HK4zwwq8g8DCIOD2dfC62PTXmawCLcBGAs/s1600/06_18_%25D0%25A1%25D0%25B5%25D0%25BB%25D1%2584%25D0%25B8%2B%25D1%2581%2B%25D0%25BF%25D0%25B0%25D1%2581%25D0%25BF%25D0%25BE%25D1%2580%25D1%2582%25D0%25BE%25D0%25BC.png',
          name: "fest",
          grup: "docs",
          validation: {
            required,
          }    
        }

      ],
    };
  },
};
</script>
