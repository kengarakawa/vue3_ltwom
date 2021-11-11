import { createStore } from 'vuex'
import TuneUpResources from "@/assets/data/tuneups.json"

export default createStore({
  state: {
    
    selectedToons : []  ,
    tuneUpResources : TuneUpResources 
  },
  mutations: {
    addToon: function(state, toon) {      
      
      let out = state.selectedToons.find( thisToon => thisToon.name == toon.name)
      
      if(out !== undefined) {
        return 
      }
      state.selectedToons.push(toon) 
      
      console.log('now contains')
      console.log(state.selectedToons)
      
      
    }, 
    removeToon: function(state, toonName) {
      // delete state.selectedToons[ toonName ]
      state.selectedToons = state.selectedToons.filter( thisToon => thisToon.name != toonName )
    }, 
    
    
    setTuneUpLevels: function(state, {toonName, currentTuneUp , preferredTuneUp}) {
      let index = state.selectedToons.findIndex( toon => toon.name == toonName) 
      
      if(index < 0) {
        console.warn('element not found')
        return 
      }
      console.log('mutation , setTuneUpLevel ')
      
      state.selectedToons[index].currentTuneUp = currentTuneUp
      state.selectedToons[index].preferredTuneUp = preferredTuneUp
      
    } , 
    setSelectionCalculatedResources: function(state , {toonName , resources}) {
      let index = state.selectedToons.findIndex( toon => toon.name == toonName) 
      
      if(index < 0) {
        console.warn('element not found')
        return 
      }      
      state.selectedToons[index].resources = resources 
    },
    
    toggleToon: function(state, toonName) {
      let index = state.selectedToons.findIndex( toon => toon.name == toonName) 
      
      if(index < 0) {
        console.warn('element not found')
        return 
      }      
      state.selectedToons[index].isHidden = !state.selectedToons[index].isHidden
    }
  },
  actions: {
    
    addToon: function(context , toon) {
      
      toon.isHidden = false;
      toon.currentTuneUp = 1
      toon.preferredTuneUp = 30;
      toon.resources = [] 
      console.log('committing addToon action')
      context.commit('addToon' , toon)      
    } , 
    removeToon: function(context , toonName) {
      console.log('committing removeToon action')
      context.commit('removeToon' , toonName)      
    } , 
    
    
    updateTuneUpLevels: function(context , {toonName, currentTuneUp, preferredTuneUp}) {
      context.commit('setTuneUpLevels' , {toonName, currentTuneUp, preferredTuneUp})  
    } , 
    
    
    updateSelection: function(context , {toonName , resources}) {
      context.commit('setSelectionCalculatedResources' , {toonName, resources })  
    }, 
    
    toggleToon: function(context , toonName) {
      context.commit('toggleToon' , toonName)
    }
    
  },
  modules: {
  }
})
