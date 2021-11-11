<template>
  <div class="p-0 mx-1 toonIcon" :title="toon.name" @click="onclick" v-html="icon"></div>
</template>

<style>
.toonIcon {
  width: 50px;
  height: 50px;
  
  overflow: hidden;
  display: inline-block;
  border-radius: 25px;
  cursor: pointer;
}
.toon-icon {
  width: 50px;
  height: 50px;
    
}
</style>

<script>
import { getToonIcon } from "@/helpers/tuneUpResources.js"
export default {
  name: "ToonIcon",
  props: {
    toon: {
      required: true,
    },
    click: {},
  },
  mounted() {},
  methods: {},
  computed: {
    icon() {
      return getToonIcon(this.toon.name)
    },
  },
}
</script>
