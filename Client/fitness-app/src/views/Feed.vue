<template>
 <div class="panel">
    <div class="panel-heading">
      <div class="level">
        <div class="level-left">
          <span>Feed</span>
        </div>
        <div class="level-right">
          <div class="select is-small">
            <select v-model="selectedFilter" >
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
 <Post></Post>


</div>

</template>

<script>
import Post from "../components/Post";

export default {
    name:"Feed",
    components: {Post},
      data(){
          return{
              selectedFilter:"Public posts"
          };
      }
}
</script>