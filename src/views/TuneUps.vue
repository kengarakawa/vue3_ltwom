<template>
  <div class="container">
    <h2>Tune Ups</h2>

    <ToonList />

    <div class="d-flex">
      <div class="flex-grow-1">
        <SelectedToons />
      </div>
      <!-- <div class="flex-grow-1">
        <TuneUpResources />
      </div> -->
    </div>
  </div>
</template>

<script>
import ToonList from "@/components/ToonList.vue"
import SelectedToons from "@/components/SelectedToons.vue"
// import TuneUpResources from "@/components/TuneUpResources.vue"

export default {
  name: "TuneUps",
  components: {
    ToonList,
    SelectedToons,     
   //  TuneUpResources
  },
}
</script>
