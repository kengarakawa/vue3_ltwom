<template>
  <div class="d-flex ">
    <!-- filter options --->
    
      <div class="p-3 col-3">
        <div class="mb-3">
          <h4>Toon List</h4>
        </div>
        <div class="mb-3">
          ArcheType :
          <ArcheTypeCombo v-model="options.archetype" />
        </div>
        <div class="mb-3">
          Region :
          <RegionalCombo v-model="options.region" :options="checkingOptions"/>
          
          
        </div>
        <div class="mb-3">
          <input
            class="my-3 form-control"
            type="text"
            name="keyword"
            placeholder="keyword"
            id="toonListKeyword"
            v-model="options.keyword"
          />
        </div>
      </div>

    <!-- result list --->
    <div class="flex-grow-1 bg-primary">
        toon list
        
        <div class="align-bottom">
            <button @click="debugOptions">Log Options</button>            
        </div>
        
        
        
        options.archetype: {{ options.archetype }} <br />
        options.region: {{ options.region }} <br />
        options.keyword: {{ options.keyword }} <br />
        
    </div>
  </div>
</template>

<script>
import ArcheTypeCombo from "@/components/ArcheTypeCombo.vue"
import RegionalCombo from "@/components/RegionalCombo.vue"

export default {
  name: "ToonList",
  components: {
    ArcheTypeCombo,
    RegionalCombo ,
    
  },
  data() {
     return {
         options : {
             archetype : 'Support' , 
             region : 'Tasmania' ,
             keyword : '' , 
         } ,

         checkingOptions : {
           'Tasmania' : 'Da Tasmania' , 
           'Romania' : 'Da Romania' , 
           'Attacker' : 'Da Attacker' , 
         }
     } 
  }, 
  methods: {
    
    debugOptions() {
        console.log(this.options)
    }
  },
}
</script>
