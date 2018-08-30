import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

export default new vuex.Store({
    state:{
        count:0,
        life:2018,
        isallowed:true
    },
    mutations:{
        increment(state){
            state.count ++
        },
        add(state){
            state.life ++
        },
        allow(state){
            state.isallowed = true
        },
        notallow(state){
            state.isallowed = false
        }
    }
})
