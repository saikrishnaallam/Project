import router from '../../router/index'


const state = {
    currentUser: null,
    token: null,
}

const getters = {
    getCurrentUser: state => state.currentUser,
    getCurrentUserUsername: state =>  state.currentUser ? state.currentUser.username : null,
    getCurrentUserFullName: state =>  state.currentUser ? `${state.currentUser.firstName} ${state.currentUser.lastName}` : null,
    getCurrentUserId: state => state.currentUser ? state.currentUser._id : null,
    getToken: state => state.token,
    isLoggedIn: state => state.currentUser ? true : false,
    getLikedPosts:state =>state.currentUser.likedPosts,
    isFriend: (state) =>  state.currentUser.friends
}

const actions = {
    //Signs user in, retrieves validation token from server
    removeFriend({commit,getters},friendId){
        // console.warn(JSON.parse(JSON.stringify(getters.getCurrentUser.friends)))
        // console.warn(getters.isFriend(friendId))
        commit('REMOVE_FRIEND',friendId)
    },
    addFriend({commit},friendId){
        
        commit('ADD_FRIEND_TOUSER',friendId)
        console.warn(friendId)

    },
    likePost({commit,getters} ,postId){
        if(getters.getLikedPosts.includes(postId)){
            commit("REMOVE_LIKED_POST",postId)
        }else{
        commit('ADD_LIKED_POST',postId)}
        // console.warn(getters.getLikedPosts)
    },

     signIn({commit,getters}, credentials){
            // this will send credentials to back for checking
            console.log(credentials)
            getters.getAllUsers.forEach(element => {
                if(element.username==credentials.username && element.password==credentials.password){
                    sessionStorage.setItem('auth-token', element.token)
                    sessionStorage.setItem('user', JSON.stringify(element))
                    console.warn(element)
                    console.warn(JSON.stringify(element))
                    console.warn(data)
                    let data={user:element}
                    console.warn(data)
                    commit('SIGN_IN_USER', data)
                    router.push('/AccountSettings')
                    // return true
                }
                
            });
            return false;
        }
    ,
    //Signs out current user
    signOut({commit}){
        sessionStorage.removeItem('auth-token')
        sessionStorage.removeItem('user')
        // commit('CLEAR_DATA')
        commit('SIGN_OUT_USER')
        router.push('/SignIn')
    },
    signInFromSessionStorage({commit}){
        var user = sessionStorage.getItem('user')
        var token = sessionStorage.getItem('auth-token')
        if(user !== null && token !== null) commit('SIGN_IN_USER', {user: JSON.parse(user), token: token})
        
    },

}
const mutations = {
    SET_CURRENT_USER: (state, user) => state.currentUser = user,
    SET_TOKEN: (state, token) => state.token = token,
    SIGN_IN_USER: (state, { user, token })=>{
        state.currentUser = user
        state.token = token
    },
    SIGN_OUT_USER: (state)=>{
        state.currentUser = null
        state.token = null
    },
    ADD_LIKED_POST:(state,postId) =>{state.currentUser.likedPosts.push(postId) },
    REMOVE_LIKED_POST:(state,postId) =>{
        let index = state.currentUser.likedPosts.indexOf(postId);
        console.warn(index)
        if (index > -1) {
            state.currentUser.likedPosts.splice(index, 1);
        }
        },
    ADD_FRIEND_TOUSER:(state,friendId)=>{state.currentUser.friends.push(friendId)},
    REMOVE_FRIEND:(state,friendId)=>{
        let index = state.currentUser.friends.indexOf(friendId);
        if(index > -1){
            state.currentUser.friends.splice(friendId)
        }
    }
}

export default {
    state, getters, actions, mutations
}