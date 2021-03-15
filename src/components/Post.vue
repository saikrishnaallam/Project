<template>
  <div class="panel-block">
    <div class="box w-100">
      <article class="media">
        <div class="media-left">
          <figure class="image is-32x32">
            <img
              src="https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg"
              alt="Image"
            />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <div>
              <span class="level is-marginless">
                <span class="level-left">
                  <span class="level-item">
                    <strong>
                      <router-link to="/user/username">{{
                        `${post.user.firstName} ${post.user.lastName}`
                      }}</router-link>
                    </strong>
                    <small class="pr-4px">
                      <router-link to="/user/username"
                        >@{{ post.user.username }}</router-link
                      >
                    </small>

                    <strong>{{ post.title }}</strong>
                  </span>
                </span>
              </span>

              <span class="level">
                <span class="level-left">
                  <small class="pr-4px">22h ago </small>
                  <small class="pr-4px">
                    <span v-if="this.post.isExercise" class="icon is-small">
                      <i class="fas fa-dumbbell" />
                    </span>

                    <span v-if="!this.post.isExercise" class="icon is-small"
                      ><i class="fas fa-hamburger"></i
                    ></span>
                  </small>
                  <!-- <small class="pr-4px">Exercise name</small> -->
                  <small class="pr-4px">{{post.length}}</small>
                  <small class="pr-4px">calories </small>
                  <small v-if="this.post.isExercise" class="pr-4px"
                    >burned
                  </small>
                  <small v-if="!this.post.isExercise" class="pr-4px"
                    >ingested
                  </small>
                </span>
                <span class="level-right"></span>
              </span>
              <p>{{ post.text }}</p>
            </div>
          </div>
          <nav class="level is-mobile">
            <div v-if="isLoggedIn" class="level-left">
              <a
                class="level-item"
                aria-label="like"
                @click="likeButtonClick()"
              >
                <div v-if="isLiked">
                  <span class="icon is-small">
                  <i class="fas fa-heart" aria-hidden="true"></i>
                </span>

                </div>
                  <div v-if="!isLiked">
                  <span class="icon is-small">
                  <i class="far fa-heart" aria-hidden="true"></i>
                </span>

                </div>

              </a>
              <small class="is-small">{{this.likes}}</small>
            </div>
            <div v-else class="level-left"></div>
            <div class="level-right">
              <div class="level-item">
                <small class="is-small has-text-primary">public</small>
              </div>
            </div>
          </nav>
        </div>
    
      </article>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Post",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      likes: 0,
    };
  },
  methods: {
    ...mapActions(["likePost"]),

    likeButtonClick() {
      this.likePost(this.post.id);
      // this.likes +=1;
      this.getLikedPosts.includes(this.post.id) ? this.likes+=1 : this.likes-=1
    },
  },
  computed: {
    ...mapGetters(["isLoggedIn", "getLikedPosts", "getCurrentUser"]),
    isLiked: function () {
      return this.getLikedPosts.includes(this.post.id);
    },
  },
};
</script>

<style >
.w-100 {
  width: 100%;
}
.pr-4px {
  padding-right: 4px;
}
.row-height-adjust {
  line-height: 0.5rem !important;
}
</style>