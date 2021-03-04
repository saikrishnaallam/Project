<template>
  <div class="panel">
    <div class="panel-heading">
      <div class="level">
        <div class="level-left">
          <span>Overview</span>
        </div>
      </div>

    </div>
    <div class="box level">
    <div class="level-left">
      <i class="fas fa-balance-scale"></i>
     <p class="overview"><strong>Weight:</strong> 70kg </p>
    </div>
        <div class="level-left">
      <i class="fas fa-hamburger"></i>
     <p class="overview"><strong>Calories ingested today:</strong> 1800 </p>
    </div>
        <div class="level-left">
      <i class="fas fa-dumbbell"></i>
     <p class="overview"><strong>Calories burned today:</strong> 777</p>
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
import ActivityInput from "../components/ActivityInput"
export default {
  name: "Dashboard",
  components: { Post,ActivityInput },
  data() {
    return {
      selectedFilter: "Public posts",
    };
  },
};
</script>

<style scoped>
.overview{
    margin-left: 5px;
}
#exercise{
  margin-bottom: 10px;
}
</style>