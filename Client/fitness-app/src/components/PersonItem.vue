<template>
      <div class="card w-100 person">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg"  alt="not loaded" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">
            <router-link :to="`/users/${user.username}`">{{ user.firstName }} {{user.lastName}}</router-link>
          </p>
          <p class="subtitle is-6">
            <router-link :to="`/users/${user.username}`">@{{user.username}}</router-link>
          </p>
        </div>
        <div class="media-right">
          <button
            class="button is-primary"
            v-if="addFriendVisible"
            :disabled="!ableToSendFriendRequest"
            @click="sendRequestBtnClicked()"
          >
            <span class="icon">
              <i class="fas fa-plus"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"PersonItem",
    data(){
        return{
            user:{id:2,username:"peter84",firstName:"Peter",lastName:"Peterson"},

        };
    }
}
</script>

<style scoped>
.person{
  border-top: 1px rgb(220,220,220) solid;
}
</style>