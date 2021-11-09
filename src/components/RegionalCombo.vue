<template>
  <select :name="compName" @change="onChange">
    <option v-if="withAny" value="">Any</option>
    <option v-for="(region, index) in regions" :key="index">
      {{ region }}
    </option>
  </select>
</template>

<script>
export default {
  name: "RegionalCombo",
  props: {
    default: {
      default: "",
      require: false,
    },
    name: {
      type: String,
    },
    onChange: {},
    optional: {
      default: true,
    },
  },
  data() {
    return {
      compName: "",
      withAny: true,

      regions: [
        "Avalooney",
        "City",
        "Desert",
        "Farm",
        "Forest",
        "Space",
        "Summit",
        "Tasmania",
        "Town",
        "WB Studis",
      ],
    }
  },
  mounted() {
    this.compName = this.name
    this.withAny = this.optional
    console.log(this.optional)
  },
}
</script>
