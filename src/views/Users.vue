<template>
<div class="container ">
<div class="box">
    <div class="table-container  ">
<table class="table is-fullwidth ">
  <thead >
    <tr >
      <th> 
          <div id="profileImage" class="media-left level-left">
          <figure class="image is-48x48">
          <img src="https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg" alt="Image" />
          </figure>
           <p id="uN">Username</p>
        </div>
        </th>
      <th>Name</th>
      <th>Surname</th>
      <th>Email</th>
    </tr>
  </thead>
 <tbody>
    <tr v-for="user  in getAllUsers"  :key=user.id>
        <th>
                     <div id="profileImage" class="media-left level-left">
          <figure class="image is-48x48">
          <img src="https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg" alt="Image" />
          </figure>
           <p id="uN">   <router-link :to='"/users/"+user.username'>{{user.username}} </router-link> </p>
        </div>
            
         
            
             </th>
        <th>{{user.firstName}} </th>
        <th>{{user.lastName}} </th>
        <th>{{user.email}} </th>
    </tr>
 </tbody>
    </table>

</div>
</div>
</div>

</template>

<script>
import { mapGetters } from "vuex";

export default {
    name:"Users",
    data(){
        return{
            users:[
            //  {id:1,username:"mark99",firstName:"Mark",lastName:"Williams",email:"mark.williams@gmail.com"},
            //     {id:2,username:"peter84",firstName:"Peter",lastName:"Peterson",email:"peter.peter@gmail.com"},
            //     {id:3,username:"george22",firstName:"George",lastName:"Mikson",email:"georg.mi22@gmail.com"},
            //     {id:1,username:"mark99",firstName:"Mark",lastName:"Williams",email:"mark.williams@gmail.com"},
            //     {id:2,username:"peter84",firstName:"Peter",lastName:"Peterson",email:"peter.peter@gmail.com"},
            //     {id:3,username:"george22",firstName:"George",lastName:"Mikson",email:"georg.mi22@gmail.com"},
            //     {id:1,username:"mark99",firstName:"firstNameMark",lastName:"Williams",email:"mark.williams@gmail.com"},
            //     {id:2,username:"peter84",firstName:"Peter",lastName:"Peterson",email:"peter.peter@gmail.com"},
            //     {id:3,username:"george22",firstName:"George",lastName:"Mikson",email:"georg.mi22@gmail.com"},
            //     {id:1,username:"mark99",firstName:"Mark",lastName:"Williams",email:"mark.williams@gmail.com"},
            //     {id:2,username:"peter84",firstName:"Peter",lastName:"Peterson",email:"peter.peter@gmail.com"},
            //     {id:3,username:"george22",firstName:"George",lastName:"Mikson",email:"georg.mi22@gmail.com"},
            //     {id:1,username:"mark99",firstName:"Mark",lastName:"Williams",email:"mark.williams@gmail.com"},
            //     {id:2,username:"peter84",firstName:"Peter",lastName:"Peterson",email:"peter.peter@gmail.com"},
            //     {id:3,username:"george22",firstName:"George",lastName:"Mikson",email:"georg.mi22@gmail.com"},
            //     {id:1,username:"mark99",firstName:"Mark",lastName:"Williams",email:"mark.williams@gmail.com"},
            //     {id:2,username:"peter84",firstName:"Peter",lastName:"Peterson",email:"peter.peter@gmail.com"},
            //     {id:3,username:"george22",firstName:"George",lastName:"Mikson",email:"georg.mi22@gmail.com"},               
            ]
        }
    },
    computed:{
            ...mapGetters(["getAllUsers"]),

    }
}
</script>

<style scoped>
#uN{
    margin-left: 10px;
}
</style>