<template>
  <div class="section">
    <div class="container">
      <div class="panel">
        <div class="panel-heading">
          <h1>
            <strong>Friends </strong>(this will be fetched from server and only
            real friends will be shown for now friends are those without +)
          </h1>
        </div>
        <div
          class="panel-block"
          v-for="user in this.getAllUsers"
          :key="user._id"
        >
          <PersonItem :user="user"></PersonItem>
        </div>
        <!-- place for people  -->
        <!-- <PersonItem></PersonItem> -->
      </div>
    </div>
  </div>
</template>

<script>
import PersonItem from "../components/PersonItem";
import { mapGetters } from "vuex";

export default {
  name: "Friends",
  components: {
    PersonItem,
  },

  computed: {
    ...mapGetters(["getAllUsers"]),
  },
};
</script>