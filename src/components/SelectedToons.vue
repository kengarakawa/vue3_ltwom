<template>
  <div class="container bg-info">
    Selected Toons

    {{ items }}

    {{ selectedList }}

    <div v-for="(toon, index) in selectedList" :key="index" class="flex">
      <div class="d-flex">
        <ToonTuneUpCard :toon="toon" @update:modelValue="handleUpdate" />
        <TuneUpResources
          :toon="toon"
          :currentTuneUp="toon.currentTuneUp"
          :preferredTuneUp="toon.preferredTuneUp"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ToonTuneUpCard from "@/components/ToonTuneUpCard.vue"
import TuneUpResources from "@/components/TuneUpResources.vue"
export default {
  name: "SelectedToons",
  components: {
    ToonTuneUpCard,
    TuneUpResources,
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
  },
  methods: {
    handleUpdate(event) {
      console.log("handleUpdate was emitted?")
      console.log(event)
    },
  },
}
</script>
