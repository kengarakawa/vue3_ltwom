import { createStore } from 'vuex'

export default createStore({
  state: {
    
    selectedToons : [] 
  },
  mutations: {
    addToon: function(state, toon) {      
      state.selectedToons[ toon.name ] = toon       
    }, 
    removeToon: function(state, toonName) {
      delete state.selectedToons[ toonName ]
    }
  },
  actions: {
    
    addToon: function(context , toon) {
      console.log('committing addToon action')
      context.commit('addToon' , toon)      
    } , 
    removeToon: function(context , toonName) {
      console.log('committing removeToon action')
      context.commit('removeToon' , toonName)      
    } , 
    
  },
  modules: {
  }
})
