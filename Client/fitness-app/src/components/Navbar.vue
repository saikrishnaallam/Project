<template>
    <nav class="navbar is-success" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
      <router-link to="/dashboard" class="navbar-item">Dashboard</router-link>


    <a role="button"
     class="navbar-burger"
     aria-label="menu" 
     aria-expanded="false" 
     data-target="navbarBasicExample"
     @click="menuOpen = !menuOpen">

      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" :class="`navbar-menu ${menuOpen ? 'is-active' : ''}`">
    <div class="navbar-start">
      <router-link to="/feed" class="navbar-item">Feed</router-link>
      <!-- <router-link to="/newActivity" class="navbar-item">New activity</router-link> -->
      <router-link to="/friends" class="navbar-item">Find friends</router-link>
      <!-- These 2 only admin will see but I will do hiding after I get done with login and state managment -->
      <router-link to="/users" class="navbar-item">Users</router-link>
      <router-link to="/statistics" class="navbar-item">Usage statistics</router-link>


     
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
        <router-link to="/signUp" class="button is-primary">Sign up</router-link>
        <router-link to="/signIn" class="button is-light">Sign in</router-link>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>


export default {
    name:"Navbar",

    components:{

    },
    data(){
        return{
            menuOpen: false

        }
    },
    methods:{

    }
}
</script>

<style scoped>
 a{
     font-size: 1.15rem;
 }
</style>