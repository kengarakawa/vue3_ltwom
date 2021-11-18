<template>
  <div class="d-flex">
    <!-- filter options --->

    <div class="px-1 py-3 col-3">
      <div class="mb-3 d-flex justify-content-between">
        <div class="highlighted">Toon List ({{ selectedToons.length }})</div>
        <div>
          <svg
            title="reset"
            alt="reset"
            class="svg-icon clickable"
            style="
              width: 1em;
              height: 1em;
              vertical-align: middle;
              fill: #feae0a;
              overflow: hidden;
            "
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            @click="resetForm"
          >
            <path
              d="M214.864 440.317l69.471-41.742c20.83-12.516 47.862-5.776 60.377 15.053 12.516 20.83 5.776 47.862-15.053 60.377L137.653 589.374 22.285 397.369c-12.516-20.83-5.776-47.862 15.053-60.378 20.83-12.515 47.862-5.775 60.377 15.054l34.478 57.38c36.81-123.472 126.622-227 249.697-279.243 223.634-94.927 481.893 9.459 576.842 233.144 94.948 223.685-9.365 481.973-232.998 576.9-161.485 68.546-346.059 34.258-472.152-83.359-17.77-16.575-18.738-44.418-2.162-62.188 16.575-17.77 44.418-18.738 62.187-2.163 100.9 94.117 248.546 121.546 377.742 66.705C870.24 783.287 953.688 576.663 877.727 397.71c-75.96-178.953-282.562-262.459-461.452-186.524-100.372 42.605-173.066 127.8-201.411 229.131z"
            />
          </svg>
        </div>
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

.highlighted {
  font-family: "riffic";
  font-size: 16px;
  color: #feae0a;
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
    "options.keyword": function () {
      this.filterToon()
    },
  },
  mounted() {
    this.selectedToons = this.allToons = AllToons
  },
  methods: {
    resetForm() {
      this.options.keyword = ""
      this.options.region = ""
      this.options.archetype = ""
    },
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
