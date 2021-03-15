<template>
  <div class="panel">
    <div class="panel-heading">
      <div class="level">
        <div class="level-left">
          <span>Dashboard</span>
        </div>
      </div>
    </div>
    <div class="box level">
      <div class="level-left">
        <i class="fas fa-balance-scale"></i>
        <p class="overview"><strong>Weight:</strong> 70kg</p>
      </div>
      <div class="level-left">
        <i class="fas fa-hamburger"></i>
        <p class="overview"><strong>Calories ingested today:</strong> 1800</p>
      </div>
      <div class="level-left">
        <i class="fas fa-dumbbell"></i>
        <p class="overview"><strong>Calories burned today:</strong> 777</p>
      </div>
    </div>
        <div v-if="isLoggedIn" class="column"><FoodAndExerciseInput/></div>

    <div class="panel-heading">
      <div class="level">
        <div class="level-left">
          <span>My history</span>
        </div>
        <!-- <div class="level-right">
          <div class="select is-small">
            <select v-model="selectedFilter">
              <option>My posts</option>
            </select>
          </div>
        </div> -->
      </div>
    </div>

    <Post
      v-for="post in getPosts(selectedFilter)"
      :key="post._id"
      :post="post"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Post from "../components/Post";
import FoodAndExerciseInput from '../components/FoodAndExerciseInput'

export default {
  name: "Dashboard",
  components: { Post, FoodAndExerciseInput  },
  data() {
    return {
      selectedFilter: "My posts",
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn", "getPosts"]),
  },
  methods: {},
};
</script>

<style scoped>
.overview {
  margin-left: 5px;
}
#exercise {
  margin-bottom: 10px;
}
</style>