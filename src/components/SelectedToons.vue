<template>
  <div class="p-0 m-0 container-fluid bg-info">
    <div v-for="(toon, index) in selectedList" :key="index" class="flex">
      <div class="d-flex g-1">
        <ToonTuneUpCard :toon="toon" @update:modelValue="handleUpdate" />
        <TuneUpResources
          :toon="toon"
          :currentTuneUp="toon.currentTuneUp"
          :preferredTuneUp="toon.preferredTuneUp"
          
          @update="onUpdated($event)"
        />
      </div>
    </div>
    
    
    <div>
      <h3>Selected Toons</h3>
          {{ items }}
          {{ selectedList }}
          
          
          <TuneUpResourceTable :resourcesList="totalResources" />
    </div>
  </div>
</template>

<script>
import ToonTuneUpCard from "@/components/ToonTuneUpCard.vue"
import TuneUpResources from "@/components/TuneUpResources.vue"
import TuneUpResourceTable from "@/components/TuneUpResourceTable.vue"
export default {
  name: "SelectedToons",
  components: {
    ToonTuneUpCard,
    TuneUpResources,
    TuneUpResourceTable , 
  },
  data() {
    return {
      items: [],
    }
  },
  computed: {
    selectedList() {
      return this.$store.state.selectedToons
    },
    totalResources() {
      console.log("totalResources() being called?")
      return {
        gold: 1 
      }
    }
  },
  methods: {
    handleUpdate(event) {
      console.log("handleUpdate was emitted?")
      console.log(event)
    },
    
    onUpdated(payload) {
      console.log("onUpdated")
      console.log(payload)
      
    }
  },
}
</script>
