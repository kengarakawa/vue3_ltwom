<template>
  <div class="d-inline">
    <select @change="changeSelection($event)" class="form-control">
      <option v-if="withAny" value="">Any</option>
      <option
        v-for="(opt, key) in theOptions"
        :value="key"
        :key="key"
        :selected="key == modelValue"
      >
        {{ opt }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "RegionalCombo",
  props: ["modelValue", "options", "optional"],
  emits: ["update:modelValue"],
  computed: {
    theOptions() {
      return this.options ?? this.defaultOptions
    },
  },

  data() {
    return {
      withAny: true,
      defaultOptions: {
        Avalooney: "Avalooney",
        City: "City",
        Desert: "Desert",
        Farm: "Farm",
        Forest: "Forest",
        Space: "Space",
        Summit: "Summit",
        Tasmania: "Tasmania",
        Town: "Town",
        "WB Studios": "WB Studios",
      },
    }
  },
  mounted() {
    this.withAny = this.optional == undefined ? true : this.optional
  },
  methods: {
    changeSelection(event) {
      this.$emit("update:modelValue", event.target.value)
    },
  },
}
</script>
