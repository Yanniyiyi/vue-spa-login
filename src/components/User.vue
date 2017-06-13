<template>
  <div class="hello">
    <h1>{{ greeting }}</h1>
    <button @click='logout'>Logout</button>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {

    }
  },
  methods:{
    logout(){
      localStorage.removeItem('login');
      location.reload();
    }
  },
  computed: {
    greeting(){
      return 'Welcome' + this.$store.state.username;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
