<template>
  <div id="app">
          <Navbar></Navbar>

    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
   components:{
    Navbar
  },
}
</script>

<style >
/* gets rid of vertical scrollbar */
html{
  overflow-y : hidden; 
}
</style>
