<template>
  <div class="panel">
    <div class="panel-heading">
      <div class="level">
        <div class="level-left">
          <span>@{{getUserByUsername(this.username).username}}</span>
              <button v-if="!this.showAdd" class="addFbtn button is-info is-small" @click="btnAddClick">Add friend</button>
              <button v-if="this.showAdd" class="addFbtn button is-danger is-small" @click="removeButtonClicked">Remove friend</button>

        </div>
      </div>

    </div>
    <div class="box ">
  <div class="level-left">
     <p class="overview"><strong>Username:</strong> {{getUserByUsername(this.username).username}}</p>
    </div>

    <div class="level-left">
     <p class="overview"><strong>First name:</strong> {{getUserByUsername(this.username).firstName}} </p>
    </div>
        <div class="level-left">
     <p class="overview"><strong>Last name:</strong> {{getUserByUsername(this.username).lastName}}</p>
    </div>   
  
  

    </div>
    <!-- <ActivityInput id="exercise"></ActivityInput> -->
    <!-- <div class="panel-heading">
      <div class="level">
        <div class="level-left">
          <span>My history</span>
        </div>
        <div class="level-right">
          <div class="select is-small">
            <select v-model="selectedFilter">
              <option>Public posts</option>
              <option>Private posts</option>
            </select>
          </div>
        </div>
      </div>
    </div> -->
<!-- 
    <Post></Post>
    <Post></Post>
    <Post></Post>
    <Post></Post> -->
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
import Post from "../components/Post";

export default {
    name:"User",
    components: { Post },
    props: {
    username: {
      type: String,
      required: true
    }
  },
  computed:{
        ...mapGetters(["getUserByUsername","isFriend",'getCurrentUser']),
        showAdd: function() {
      
        if(this.getCurrentUser.friends.includes(this.getUserByUsername(this.username).id))
        return true
        else
        return false

      }
      

  },
  data(){
    return{
      user:null
    };
  },
  methods:{
    ...mapActions(["removeFriend","addFriend"]),

    removeButtonClicked(){
      console.warn(this.getCurrentUser.friends)
      console.warn(this.getUserByUsername(this.username).id)
      this.removeFriend(this.getUserByUsername(this.username).id)
    },
    btnAddClick(){
      this.addFriend(this.getUserByUsername(this.username).id)
                  console.warn(this.isFriend)

    }
  },
  

}
</script>

<style scoped>
p{
    font-size: 1.2rem;
}
.addFbtn{
    margin-left: 10px;
}
</style>