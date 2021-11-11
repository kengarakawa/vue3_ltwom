<template>
  <div class="d-flex">
    <!-- filter options --->

    <div class="px-1 py-3 col-3">
      <div class="mb-3 row">
        <h4>Toon List ({{ selectedToons.length }})</h4>
      </div>
      <div class="mb-2 row">
        <div class="col-6">ArcheType :</div>
        <div class="col-6">
          <ArcheTypeCombo v-model="options.archetype" />
        </div>
      </div>
      <div class="mb-2 row">
        <div class="col-6">Region :</div>
        <div class="col-6">
          <RegionalCombo v-model="options.region" />
        </div>
      </div>
      <div class="mb-2 row">
        <div class="col-12">
          <input
            class="form-control"
            type="text"
            name="keyword"
            placeholder="keyword"
            id="toonListKeyword"
            v-model="options.keyword"
            @input="filterToon"
          />
        </div>
      </div>
    </div>

    <!-- result list --->
    <div class="p-3 mb-5 flex-grow-1 toon-list">
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

<style>
/* .toon-list::-webkit-scrollbar {
  display: none;
}
.toon-list {
  -ms-overflow-style: none;  
  scrollbar-width: none;  
} */
.toon-list {
  scrollbar-color: #d4aa70 #e4e4e4;
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
}

.toon-list::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background: #8070d4;
  border: 6px solid rgba(0, 0, 0, 0.2);
}

.toon-list::-webkit-scrollbar-thumb {
  background-image: linear-gradient(180deg, #d0368a 0%, #708ad4 99%);
  box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
  border-radius: 100px;
}
.toon-list::-webkit-scrollbar-thumb:hover {
  background-color: #5749d2;
}

/* New Syntax */
.toon-list {
  scrollbar-color: #d4aa70 #e4e4e4;
  transition: scrollbar-color 0.3s ease-out;
}

.toon-list:hover {
  scrollbar-color: #5749d2;
}
</style>

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
      console.log("adding ")
      console.log(toon)
      this.$store.dispatch("addToon", toon)
    },
  },
}
</script>
