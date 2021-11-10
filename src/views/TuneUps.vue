<template>
  <div class="container min-vh-100">
    <div class="row">
      <h2>Tune Ups</h2>
    </div>

    <div class="row">
      <div class="col-12">
        <ToonList />
      </div>
    </div>
    <div class="row">
          <SelectedToons />
        
    </div>

    <!-- <div class="flex-grow-1">
        <TuneUpResources />
      </div> -->
  </div>
</template>

<style>
h2 {
  font-family: 'riffic';

}
</style>


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
