// import { createStore } from 'vuex';

// export default createStore({
//   state: {
//     pub: [

//     ],

//   },

//   getters: {
//     allPub: (state)=> state.todos,
//   },
//   mutations: {
//     add_todo(state, todo){state.todos.push(todo);
//     },
//     // delete_todo(state, id){
//     //   state.todos = state.todos.filter((todo) =>todo.id != id);
//     // },
//     // update_todo(state,todo){
//     //   let index = state.todos.findIndex(t => t.id == todo.id) ;
//     //   if(index != -1){
//     //     state.todos[index] = todo;
//     //   }
//     // },
//   },
//   actions: {
//     addTodo({commit}, todo) {
//       commit("add_todo", todo);
//      },
//     // deleteTodo({commit}, id){
//     //   commit("delete_todo", id);
//     // },
//     // updateTodo({commit}, todo){
//     //   commit("update_todo", todo);
//     // }, 
//   },
//   modules: {
//   },
// });

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        INCREASE_COUNT(state, amount = 1) {
            state.count += Number(amount)
        },
        DECREASE_COUNT(state, amount = 1) {
            state.count -= Number(amount)
        }
    },
    actions: {
        updateCount({ commit }, amount) {
            if (amount >= 0) {
                commit('INCREASE_COUNT', amount)
            } else {
                commit('DECREASE_COUNT', amount)
            }
        }
    }
})