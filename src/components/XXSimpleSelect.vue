<template>
  <select v-model="model">
    <option v-for="(option,key) in options" :value="option.value" :key="key">
      {{ option.text }}
    </option>
  </select>
</template>

<script>
export default {
  name: "XXSimpleSelect",
  props: ["value", "options"],
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        console.log(' theSet() ')
        console.log(this)
        this.$emit("input", value)
      },
    },        
  },
}
</script>
