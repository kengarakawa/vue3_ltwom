<template>
  <div class="d-inline">
    <select @change="changeSelection($event)"  class="form-control">
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
  name: "ArcheTypeCombo",
  props: ["modelValue", "options", "optional"],
  emits: ["update:modelValue" , "onchange"],
  computed: {
    theOptions() {
      return this.options ?? this.defaultOptions
    },
  },

  data() {
    return {
      withAny: true,
      defaultOptions: {
        Attacker: "Attacker",
        Defender: "Defender",
        Support: "Support",
      },
    }
  },
  mounted() {
    this.withAny = this.optional == undefined ? true : this.optional
  },
  methods: {
    changeSelection(event) {
      this.$emit("update:modelValue", event.target.value)
      this.$emit("onchange")
      console.log('emitting onchange')
      
    },
  },
}
</script>
