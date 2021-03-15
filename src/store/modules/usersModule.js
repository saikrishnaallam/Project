const state = {
    allUsers:[     
    {id:1,friends:[],email:"fillerimal@gmail.com",username:"a",firstName:"a",lastName:"a",password:'a',token:"jwt",likedPosts:[]},   
    {id:2,friends:[],email:"fillerimal@gmail.com",username:"UsersUsername",firstName:"usersFirstName",lastName:"usersLastName",password:'a',token:"jwt",likedPosts:[]},
    {id:3,friends:[],email:"fillerimal@gmail.com",username:"markMarks",firstName:"Mark",lastName:"jackson",password:'a',token:"jwt",likedPosts:[]},
    {id:4,friends:[],email:"fillerimal@gmail.com",username:"william99",firstName:"wilson",lastName:"wilsonski",password:'a',token:"jwt",likedPosts:[]},
    {id:5,friends:[],email:"fillerimal@gmail.com",username:"markZ99",firstName:"mark",lastName:"paulson",password:'a',token:"jwt",likedPosts:[]}
],
    users: []

}

const getters = {
    getUsers: state => state.users,
    getAllUsers: state=>state.allUsers,
    getUserByUsername:(state) => (uName)=>{return state.allUsers.find(user => user.username === uName) }

}

const actions = {

    signUp({commit,getters},userInfo){
        let user={
            id:getters.getAllUsers.length,
            username: userInfo.username,
            password: userInfo.password,
            email: userInfo.email,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            token:"jwt"
          };
          console.warn(user)
          console.warn(JSON.stringify(user))
          commit('SET_NEW_USER', user)
          getters.getAllUsers.forEach(element => {
              console.log(element.username)
              
          });

    },
    searchForUser({ commit ,getters}, query) {
            let data=[];
            console.warn(query)

            this.getters.getAllUsers.forEach(element => {

                if(element.username.includes(query)){

                    data.push(element)
                }
                
            });
          
            this.commit('SET_SEARCH_RESULTS', data)
            return true
      
    },
    clearSearchResults: ({ commit }) => commit('CLEAR_SEARCH_RESULTS'),

    fetchUser({ getters }, username) {
        var user = getters.getUsers.find(usr => usr.username === username)
        return user
    }

}

const mutations = {
    SET_SEARCH_RESULTS: (state, users) => {
        state.users = users
    },
    CLEAR_SEARCH_RESULTS: state => state.users = [],
    CLEAR_DATA: (state) => {
        state.users = []
    },

    SET_NEW_USER:(state, user)=>{
        state.allUsers.push(user)
    }
}

export default {
    state, getters, actions, mutations
}