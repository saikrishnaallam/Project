<template>
  <div class="section ">
    <div class="container">
      <div class="panel is-dark">
        <div class="panel-heading">
          <div class="field has-addons is-fullwidth">
            <div class="control has-icons-left is-expanded">
              <input class="input" type="text" placeholder="Search for people" v-model.trim="search"/>
              <span class="icon is-small is-left">
                <i class="fas fa-search"></i>
              </span>
            </div>
            <div class="control">
              <a class="button is-info" @click="searchBtnClicked()">Search</a>
            </div>
          </div>
        </div>
    <div class="panel-block" v-for="user in getUsers" :key="user._id">
                <PersonItem  :user="user" ></PersonItem>

        </div>
    <!-- place for people  -->
    <!-- <PersonItem></PersonItem> -->


      </div>
    </div>
  </div>
</template>

<script>
import PersonItem from '../components/PersonItem'
import { mapActions, mapGetters } from 'vuex';

export default {
    name:"FindFriends",
      components:{
      PersonItem
            
  },
    data(){
        return{
      search: ''

        };
    },
  
      computed:{
    ...mapGetters(['getUsers']),
  },
    methods:{
          ...mapActions(['searchForUser',  'clearSearchResults']),

        searchBtnClicked(){
          // alert(this.search)
      this.searchForUser(this.search)
        }
    },

       beforeDestroy(){
    this.clearSearchResults()
  },
    
}
</script>