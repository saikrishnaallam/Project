    // when we connect to server we will dynamically get all these posts

const state = {
    publicPosts: [ 
        {id:1,likeCount:0,isExercise:true,text:"Lorem ipsum dolor sit amet consecbbtetur, adipisicing elit. At velit, voluptatibus, tempora voluptate adipisci accusamus neque quis amet deleniti debitis optio necessitatibus quas sit sequi eum, facere est quae corporis",
        title:"post title 1",user:{firstName:"usersFirstName",lastName:"usersLastName",username:"usersUsername"}},
        {id:2,likeCount:0,isExercise:true,text:"Lorem ipsum dolor sit amet consectestur, adipisicing elit. At velit, voluptatibus, tempora voluptate adipisci accusamus neque quis amet deleniti debitis optio necessitatibus quas sit sequi eum, facere est quae corporis",
        title:"post title 1",user:{firstName:"usersFirstName",lastName:"usersLastName",username:"usersUsername"}},
        {id:3,likeCount:0,text:"Lorem ipsum dolor sit amet consectaetur, adipisicing elit. At velit, voluptatibus, tempora voluptate adipisci accusamus neque quis amet deleniti debitis optio necessitatibus quas sit sequi eum, facere est quae corporis",
        title:"post title 1",isExercise:false,user:{firstName:"b",lastName:"usersLastName",username:"usersUsername"}}



],
    friendsPosts: [   
        {id:4,likeCount:0,text:"Lorem ipsum dolor sisst amet consectetur, adipisicing elit. At velit, voluptatibus, tempora voluptate adipisci accusamus neque quis amet deleniti debitis optio necessitatibus quas sit sequi eum, facere est quae corporis",
    title:"post title 1",user:{firstName:"usersFirstName",lastName:"usersLastName",username:"usersUsername"}}],
   
    privatePosts: [ 
    ],
    // {id:5,text:"Lorem ipsum dolor simt amet consectetur, adipisicing elit. At velit, voluptatibus, tempora voluptate adipisci accusamus neque quis amet deleniti debitis optio necessitatibus quas sit sequi eum, facere est quae corporis",
    // title:"post title 2",user:{firstName:"usersFirsbtName",lastName:"usersLastName",username:"usersUsername"}},
    // {id:6,text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. At velit, voluptatibus, tempora voluptate adipisci accusamus neque quis amet deleniti debitis optio necessitatibus quas sit sequi eum, facere est quae corporis",
    // title:"post title 3",user:{firstName:"usersFirstNam;;e",lastName:"usersLastName",username:"usersUsername"}}

   

    postVisibility: [
        "Private",
        "Friends",
        "Public"
    ],
    feedFilterOptions: [
        {
            name: "My posts",
            needsToBeLoggedIn: true
        },
        {
            name: "Friends posts",
            needsToBeLoggedIn: true
        },
        {
            name: "Public posts",
            needsToBeLoggedIn: false
        },
        {
            name: "All posts",
            needsToBeLoggedIn: true
        }
    ]
}
const actions = {
        addNewExercisePost({commit,getters},postInput){
            console.warn(postInput)
            let post={
                id:getters.getPrivatePosts.length,
                text:postInput.name,
                title:postInput.input_data.exerciseType,
                user:getters.getCurrentUser,
                length:postInput.input_data.length,
                timeUnit:postInput.lengthUnit,
                likeCount:0,
                isExercise: postInput.type =="ExerciseInput" ? true:false
            }
            console.warn(post)
            commit('APPEND_PRIVATE_POSTS',post)
        },
        // will make and adapt food posts when server side is added
        addNewFoodPost({commit,getters},postInput){
            console.warn(postInput)
            let post={
                id:getters.getPrivatePosts.length,
                title:postInput.input_data.foodType +" meal. " + postInput.input_data.quantity+" grams",
                text:postInput.name +"grams",
                user:getters.getCurrentUser,
                length:postInput.value,
                timeUnit:"",
                likeCount:0,
                isExercise: postInput.type =="ExerciseInput" ? true:false
            }
            // console.warn(post)
            commit('APPEND_PRIVATE_POSTS',post)
        },

}

const getters = {
    getPosts: state => postVisibilityFilterOption => {
        if (postVisibilityFilterOption === 'Public posts') return state.publicPosts
        else if (postVisibilityFilterOption === 'Friends posts') return state.friendsPosts
        else if (postVisibilityFilterOption === 'My posts') return state.privatePosts
        else return state.publicPosts // should make this bellow work next time
        // else return [...state.publicPosts, ...state.friendsPosts, ...state.privatePosts]
        // .sort().reduce((map, post) => map.set(post.id, post), new Map()).values()
    },
    getPostVisibility: state => state.postVisibility,
    getFeedFilterOptions: state => state.feedFilterOptions,
    getPrivatePosts: state => state.privatePosts
}



const mutations = {
    ADD_POST: (state, post) => state.privatePosts.push(post),
  
    APPEND_PRIVATE_POSTS: (state,post) => {
        state.privatePosts.push(post)
    },
    // LIKE_DISLIKE_POST: (state, post) => {
    //     var posts = [...state.privatePosts, ...state.friendsPosts, ...state.publicPosts]
    //     posts.filter(p=> p._id === post._id).forEach(p=>p.likes = post.likes)
    // },
    CLEAR_DATA: (state) => {
        state.publicPosts = []
        state.friendsPosts = []
        state.privatePosts = []

        state.publicPostsPageStatus = {
            nextPage: 1,
            hasMorePages: true
        }
        state.friendsPostsPageStatus = {
            nextPage: 1,
            hasMorePages: true
        }
        state.privatePostsPageStatus = {
            nextPage: 1,
            hasMorePages: true
        }
    },
    DELETE_POST: (state, post_id) => {
        var index = state.privatePosts.findIndex(post => post._id === post_id)
        state.privatePosts.splice(index, 1)
    },
    SET_POST: (state, post) => {
        var index = state.privatePosts.findIndex(p => p._id === post._id)
        state.privatePosts[index] = post
    }
}

export default {
    state, getters, actions, mutations
}