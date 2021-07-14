<template>
  <div class="home">

     
      <submits-button>

        <h1 slot="title">{{title}}</h1>

      </submits-button>
        
  </div>
</template>

<script>
// @ is an alias to /src

export default {


  data() {
    return {
      title: 'Счетчик'
    }
  },  

  name: 'Home',
  components: {
  }
}
</script>
