<template>
  <div class="panel">
    <div class="panel-heading">
      <div class="level">
        <div class="level-left">
          <span>@{{username}}</span>
              <button  class="addFbtn button is-info is-small">Add friend</button>
              <button  class="addFbtn button is-danger is-small">Remove friend</button>

        </div>
      </div>

    </div>
    <div class="box ">

    <div class="level-left">
     <p class="overview"><strong>First name:</strong> Peter </p>
    </div>
        <div class="level-left">
     <p class="overview"><strong>Last name:</strong> Walsh</p>
    </div>   
        <div class="level-left">
     <p class="overview"><strong>Height:</strong> 1.88m</p>
    </div>   
        <div class="level-left">
     <p class="overview"><strong>Weight:</strong> 88kg</p>
    </div>

  

    </div>
    <ActivityInput id="exercise"></ActivityInput>
    <div class="panel-heading">
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
    </div>

    <Post></Post>
    <Post></Post>
    <Post></Post>
    <Post></Post>
  </div>
</template>

<script>
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