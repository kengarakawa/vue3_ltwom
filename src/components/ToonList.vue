<template>
  <div class="d-flex">
    <!-- filter options --->

    <div class="p-3 col-3">
      <div class="mb-3">
        <h4>Toon List ({{selectedToons.length}})</h4>
      </div>
      <div class="mb-3">
        ArcheType :
        <ArcheTypeCombo v-model="options.archetype" />
      </div>
      <div class="mb-3">
        Region :
        <RegionalCombo v-model="options.region" />
      </div>
      <div class="mb-3">
        <input
          class="my-3 form-control"
          type="text"
          name="keyword"
          placeholder="keyword"
          id="toonListKeyword"
          v-model="options.keyword"
          @input="filterToon"
        />
      </div>
    </div>

    <!-- result list --->
    <div class="p-3 flex-grow-1 bg-primary" style="height:200px;overflow:scroll;overflow-x:hidden">

      <ToonIcon
        v-for="(toon, key) in selectedToons"
        :key="key"
        :toon="toon"
        @click="addToon(toon)"
      />

      <!-- <div v-for="(toon, key) in selectedToons" :key="key">
        {{ toon }} , {{ key }}
      </div> -->
    </div>
  </div>
</template>

<script>
import ArcheTypeCombo from "@/components/ArcheTypeCombo.vue"
import RegionalCombo from "@/components/RegionalCombo.vue"
import ToonIcon from "@/components/ToonIcon.vue"

import AllToons from "@/assets/data/toons_array.json"

export default {
  name: "ToonList",
  components: {
    ArcheTypeCombo,
    RegionalCombo,
    ToonIcon,
  },
  data() {
    return {
      options: {
        archetype: "",
        region: "",
        keyword: "",
      },

      allToons: [],
      selectedToons: [],
    }
  },
  watch: {
    "options.archetype": function () {
      this.filterToon()
    },
    "options.region": function () {
      this.filterToon()
    },
  },
  mounted() {
    this.selectedToons = this.allToons = AllToons
  },
  methods: {
    debugOptions() {
      console.log(this.options)
    },

    debugClick(item) {
      console.log(item)
    },

    filterToon() {
      console.log("filterToon() ")
      let keyword = this.options.keyword.toLowerCase()
      this.selectedToons = this.allToons.filter((toon) => {
        let toonName = toon.name.toLowerCase()


        return (
          (keyword == "" || toonName.indexOf(this.options.keyword) >= 0) &&
          (this.options.archetype == "" ||
            toon.type == this.options.archetype) &&
          (this.options.region == "" || toon.region == this.options.region)
        )
      })

      console.log(` filter count: ${this.filterToon.length}`)
    },
    
    addToon(toon) {
      console.log('adding ')
      console.log(toon)
      this.$store.dispatch('addToon', toon) 
    }
  },
}
</script>
