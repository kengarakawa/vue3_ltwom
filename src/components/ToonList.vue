<template>
  <div class="d-flex ">
    <!-- filter options --->
    
      <div class="p-3 col-3">
        <div class="mb-3">
          <h4>Toon List</h4>
        </div>
        <div class="mb-3">
          ArcheType :
          <ArcheTypeCombo name="archetype" v-model="options.archetype"/>
        </div>
        <div class="mb-3">
          Region :
          <RegionalCombo name="regional"  v-model="options.region"/>
          
          @change="archeTypeChange($event)"
          
          
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
        
        
        <XXSimpleSelect :options="customOptions" v-model="options.what" />
        <br />
        <br />
        
        options.archetype: {{ options.archetype }} <br />
        options.region: {{ options.region }} <br />
        options.keyword: {{ options.keyword }} <br />
        options.what: {{ options.what }} <br />
        
    </div>
  </div>
</template>

<script>
import ArcheTypeCombo from "@/components/ArcheTypeCombo.vue"
import RegionalCombo from "@/components/RegionalCombo.vue"
import XXSimpleSelect from "@/components/XXSimpleSelect.vue"
export default {
  name: "ToonList",
  components: {
    ArcheTypeCombo,
    RegionalCombo ,
    XXSimpleSelect
    
  },
  data() {
     return {
         options : {
             archetype : 'Attacker' , 
             region : '' ,
             keyword : '' , 
             what : 'Forth Item' 
         } ,
         customOptions : [
             { text: 'First Item' , value : 'First Item' } , 
             { text: 'Second Item' , value : 'Second Item' } , 
             { text: 'Third Item' , value : 'Third Item' } , 
             { text: 'Forth Item' , value : 'Forth Item' } , 
             { text: 'Fifth Item' , value : 'Fifth Item' } , 
         ]
     } 
  }, 
  methods: {
    archeTypeChange(event) {
      console.log("Being changed")
      console.log(event.target.value)
    },
    
    
    debugOptions() {
        console.log(this.options)
    }
  },
}
</script>
