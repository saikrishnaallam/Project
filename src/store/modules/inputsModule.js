const state = {
    inputs: [

    ],
    inputTypes: {
        'FoodInput': {
            icon: 'fas fa-hamburger',
            sufix: 'calories added',
            name: 'Food input'
        },
        'ExerciseInput': {
            icon: 'fas fa-dumbbell',
            sufix: 'calories burned',
            name: 'Exercise input'
        }
    },

    exerciseTypes: [],
    foodTypes:["Vegan","Meat"]
}

const getters = {
    getInputTypes: state => state.inputTypes,
    getInputs: state => state.inputs,
    getFoodTypes: state =>state.foodTypes
}

const actions = {

    fetchInputs: ({commit, getters}) =>{
        if (getters.isLoggedIn) {
            return axios.get(`/api/inputs/user/${getters.getCurrentUserId}`).then(({data})=>{
                commit('SET_INPUTS', data)
                return true
            }).catch(()=>false)
        }
    },
 
}

const mutations = {
    SET_INPUTS: (state, inputs) => state.inputs = inputs,
    CLEAR_DATA: (state)=>{
        state.input = []
    },
}

export default {
    state, getters, actions, mutations
}