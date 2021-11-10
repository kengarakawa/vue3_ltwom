<template>
  <div class="p-3 m-2 shadow-lg card col-3">
    <div class="text-end">
        
       <!-- delete --> 
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-trash"
        viewBox="0 0 16 16"
      >
        <path
          d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
        />
        <path
          fill-rule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
        />
      </svg>
      
      
      <span v-if="toonDetail.isHidden">

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-toggle-off"
        viewBox="0 0 16 16"
      >
        <path
          d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"
        />
      </svg>
      </span>
      <span v-else>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-toggle-on"
        viewBox="0 0 16 16"
      >
        <path
          d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
        />
      </svg>
      </span>
      
    </div>
    <h4 class="toonName">{{ toon.name }}</h4>

    <h6 class="mb-5">
      {{ toon.rarity }} / {{ toon.type }} / {{ toon.region }}
    </h6>

    <Slider
      v-model="sliderValue.value"
      v-bind="sliderValue"
      @change="updateMinMaxSlider($event)"
    />
  </div>
</template>

<style>
h4.toonName {
  font-family: "Riffic";
}
h6 {
  font-family: "Riffic";
  font-size: 13px;
  font-weight: lighter;
}
</style>

<script>
import "@vueform/slider/themes/default.css"
import Slider from "@vueform/slider"
export default {
  name: "ToonTuneUpCard",
  components: {
    Slider,
  },
  props: ["toon"],
  data() {
    return {
      toonDetail : {
        currentTuneUp: 1,   
        preferredTuneUp: 30,
        isHidden: false , 
        toon : {} ,
        
      } , 
      
      sliderValue: {
        value: [1, 30],
        min: 1,
        max: 45,
      },
    }
  },
  
  mounted() {
      
      this.toonDetail.currentTuneUp = this.toon.currentTuneUp
      this.toonDetail.preferredTuneUp = this.toon.preferredTuneUp
      this.toonDetail.isHidden = this.toon.isHidden
      this.toonDetail.toon = this.toon 
      
      this.sliderValue.value = [ this.toonDetail.currentTuneUp , this.toonDetail.preferredTuneUp]
      
      
      
  }, 
  methods: {
    updateMinMaxSlider([minValue, maxValue]) {
    //   this.$store.commit("setMinTuneUp", {
    //     name: this.toon.name,
    //     minTuneUpValue: minValue,
    //   })
    //   this.$store.commit("setMaxTuneUp", {
    //     name: this.toon.name,
    //     maxTuneUpValue: maxValue,
    //   })
    
    
        console.log('Before dispatch')
        console.log(this.toonDetail.toon )
    
        this.$store.dispatch('updateTuneUpLevels' , {
            toonName : this.toonDetail.toon.name , 
            currentTuneUp : minValue , 
            preferredTuneUp : maxValue              
        })
        
        this.$emit('update:modelValue' , this.toonDetail)
    },
  },
}
</script>
