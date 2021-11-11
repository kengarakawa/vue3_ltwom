<template>
  <div class="p-0 m-0 container-fluid result-pane">
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

    <div class="d-flex g-1" v-if="selectedList.length > 1">
      <div class="p-3 m-2 shadow-lg flex-d card col-3 bg-warning">
        <h3>Total Resource ({{ selectedList.length }})</h3>        
        <div class="bottom-0 align-text-bottom text-end">copyright@2021</div>
      </div>
      <div class="p-2 m-2 card col-9">
        <TuneUpResourceTable :resourcesList="totalResources" />
      </div>
    </div>
  </div>
</template>

<style>
h3 {
  font-family: 'riffic';
  font-size: 18px;
}
.result-pane {
  background-color: #6AA16C;  
}
</style>

<script>
import ToonTuneUpCard from "@/components/ToonTuneUpCard.vue"
import TuneUpResources from "@/components/TuneUpResources.vue"
import TuneUpResourceTable from "@/components/TuneUpResourceTable.vue"
export default {
  name: "SelectedToons",
  components: {
    ToonTuneUpCard,
    TuneUpResources,
    TuneUpResourceTable,
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
        gold: 1,
      }
    },
  },
  methods: {
    handleUpdate(event) {
      console.log("handleUpdate was emitted?")
      console.log(event)
    },

    onUpdated(payload) {
      console.log("onUpdated")
      console.log(payload)
    },
  },
}
</script>
