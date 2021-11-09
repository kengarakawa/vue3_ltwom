<template>
  <div>
    <span>{{ compName || "" }} {{ value || "" }}</span>
    <select v-model="model">
      <option value="">Any</option>
      <option value="Attacker">Attacker</option>
      <option value="Defender">Defender</option>
      <option value="Support">Support</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "ArcheTypeCombo",
  props: ["value", "default", "name", "optional"],
    model: {
      get() {
        console.log(" Get being called()")
        console.log(`returning ${this.value} `)
        return this.value
      },
      set(value) {
        console.log(`Set being called ${value}  `)
        this.$emit("input", value)
      },
    },

  data() {
    return {
      compName: "",
      withAny: true,
    }
  },
  mounted() {
    this.compName = this.name || 'XXX'
    this.withAny = this.optional || false 
    console.log(this.optional)
  },
  methods: {
    _handleInput(event) {
      console.log("event being called")
      console.log(`returning ${event.target.value}`)
      console.log(this)
      this.$emit("input", event.target.value)
    },
  },
}
</script>
