<template>
  <div class="v-rest">
    

    <!-- <div name="header">
      <div class="btn-button">
        <b-button
          variant="primary"
          @click="$router.push({ name: 'succsses' })"
          >Далее</b-button
        >
        <div class="ng-binding">
          <span>Я уже зарегистрирован,</span>
          <a href="#">Вход</a>
        </div>
      </div>
    </div> -->

  <header>
    <slot name="header"></slot>
  </header>

  <footer>
    <slot name="footer"></slot>
  </footer>

     
  </div>
</template>

<script>
export default {
  name: 'v-rest'
};
</script>
