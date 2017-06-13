// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    username: ''
  },
  mutations: {
    username (state,name) {
      state.username = name;
    }
  },
  actions: {
    update_user_name(store,name)
    {
      store.commit('username',name);
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  created:function(){
  	this.checkLogin()
  },
  watch:{
  	'$route':'checkLogin'
  },
  router,store,
  template: '<App/>',
  components: { App },
  methods:{
  	checkLogin(){
      
  		if(!localStorage.getItem("login"))
      {
        this.$router.push('login');
        return;
      } 

      if(!this.$store.username && localStorage.getItem('login'))
      {
        this.$store.dispatch('update_user_name',123);
        this.$router.push('user');
        return;
      }

      if(this.$store.username && localStorage.getItem('login'))
      {
         this.$router.push('user');
         return;
      }
  	}
  }
})
