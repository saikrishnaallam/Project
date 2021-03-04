import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue"
import SignUp from "../views/SignUp.vue"
import Feed from "../views/Feed.vue"
import FindFriends from "../views/FindFriends.vue"
import Dashboard from "../views/Dashboard.vue"
import Users from "../views/Users.vue"
import NewActivity from "../views/NewActivity.vue"
import Statistics from "../views/Statistics.vue"
import User from "../views/User.vue"

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "SignIn", component: SignIn},
  { path: "/signIn", name: "SignIn", component: SignIn},
  { path: "/signUp", name: "SignUp", component: SignUp},
  { path: "/feed", name: "Feed", component: Feed},
  { path: "/friends", name: "FindFriends", component: FindFriends},
  { path: "/dashboard", name: "Dashboard", component: Dashboard},
  { path: "/newActivity", name: "NewActivity", component: NewActivity},
  { path: "/users", name: "Users", component: Users},
  { path: "/statistics", name: "Statistics", component: Statistics},
  { path: "/users/:username", name: "Statistics", component: User,props: true,

},
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
