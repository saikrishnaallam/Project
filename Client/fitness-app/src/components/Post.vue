<template>
  <div class="panel-block">
    <div class="box w-100">
      <article class="media">
        <div class="media-left">
          <figure class="image is-32x32">
            <img src="https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg" alt="Image" />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <div >
              <span class="level is-marginless">
                <span class="level-left">
                  <span class="level-item">
                    <strong>
                      <router-link
                        to="/user/username"
                      >Mark Wilinski</router-link>
                    </strong>
                    <small class="pr-4px">
                      <router-link to="/user/username">@mark97</router-link>
                    </small>

                    <strong>Post title</strong>
                  </span>
                </span>
              </span>

              <span class="level">
                <span class="level-left">
                  <small class="pr-4px">22h ago </small>
                  <small class="pr-4px">
                    <span class="icon is-small">
                      <i class="fas fa-dumbbell" />
                    </span>
                  </small>
                  <small class="pr-4px">Exercise name</small>
                  <small class="pr-4px">22222</small>
                  <small class="pr-4px">calories burned</small>
                </span>
                <span class="level-right"></span>
              </span>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At velit, voluptatibus, tempora voluptate adipisci accusamus neque quis amet deleniti debitis optio necessitatibus quas sit sequi eum, facere est quae corporis?</p>
            </div>
          </div>
          <nav class="level is-mobile">
            <div v-if="isLoggedIn" class="level-left">
              <a class="level-item" aria-label="like" @click="likeButtonClick()">
                <span class="icon is-small">
                  <i
                    class="fas fa-heart`"
                    aria-hidden="true"
                  ></i>
                </span>
              </a>
              <small class="is-small">20</small>
            </div>
            <div v-else class="level-left">
            </div>
            <div class="level-right">
              <div class="level-item">
                <small class="is-small has-text-primary	">public</small>
              </div>
              <!-- options for edit and delete post later -->
            </div>
          </nav>
        </div>
        <div class="media-right" v-if="showEditAndDeleteOptions">
          <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
              <div class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                <span class="icon is-small">
                  <i class="fas fa-angle-down" />
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
    name:"Post",
    methods:{
        likeButtonClick(){
            alert("Like")
        }
    }
    
}
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